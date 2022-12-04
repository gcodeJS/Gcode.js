<script>
  import Gcanvas from "./lib/Gcanvas.svelte";
  import Gsource from "./lib/Gsource.svelte";

  let array = [];

  const ANIMATION_SPEED = 20;

  function createRandomArray() {
    array = [];
    const maxY = (window.innerHeight / 100) * 40;
    for (let i = 0; i <= 50; i++) {
      array = [
        ...array,
        {
          x: i * 10,
          y: maxY * Math.random(),
          options: {
            before: {
              G: 1,
            },
            after: {
              comment: Math.random().toString(2).substring(2, 10),
            },
          },
        },
      ];
    }
  }

  function createLineaObbliqua() {
    array = [];
    const WIDTH = 7;

    for (let i = 0; i <= 50; i++) {
      array = [
        ...array,
        {
          x: i * WIDTH,
          y: i * WIDTH,
          options: {
            before: {
              G: 0,
            },
          },
        },
      ];
    }
  }

  function createSpianatura() {
    array = [];

    let ExampleData = {
      piece: {
        width: 50,
        height: 100,
      },
      tool: {
        diameter: 20,
        percentage: 60,
      },
      coords: {
        previus: {
          x: 0,
          y: 0,
          z: 1,
        },
        zeroPoint: {
          x: 0,
          y: 0,
          z: 1,
        },
      },
      options: {
        distanzaSicurezza: 2,
      },
    };

    const linesToDo = {
      y: Math.ceil(
        ExampleData.piece.height /
          ((ExampleData.tool.diameter / 100) * ExampleData.tool.percentage),
      ),
      z: ExampleData.coords.zeroPoint.z,
    };

    let isRight = false;

    for (
      let linesZcompleted = linesToDo.z;
      linesZcompleted >= 0;
      linesZcompleted--
    ) {
      const startPoints = {
        x:
          ExampleData.coords.zeroPoint.x -
          ExampleData.tool.diameter / 2 -
          ExampleData.options.distanzaSicurezza,
        y:
          ExampleData.tool.diameter / 2 -
          (ExampleData.tool.diameter / 100) * ExampleData.tool.percentage, // diam percentage measure
      };

      if (linesZcompleted === linesToDo.z) {
        ExampleData.coords.previus.x = startPoints.x;
        ExampleData.coords.previus.y = startPoints.y;
      }

      if (linesZcompleted === 0) {
        ExampleData.coords.previus.z += ExampleData.options.distanzaSicurezza;
        addThisCoordinate({G:0});

        ExampleData.coords.previus.x = startPoints.x;
        ExampleData.coords.previus.y = startPoints.y;
        addThisCoordinate({G:0});
      }

      ExampleData.coords.previus.z = linesZcompleted;
      addThisCoordinate();

      for (
        let linesYcompleted = 0;
        linesYcompleted <= linesToDo.y;
        linesYcompleted++
      ) {
        console.log({ isRight });
        if (isRight) {
          ExampleData.coords.previus.x =
            ExampleData.coords.zeroPoint.x -
            ExampleData.options.distanzaSicurezza; // go left
          addThisCoordinate();
          ExampleData.coords.previus.y += // need to be -= but for making it visible I use +
            (ExampleData.tool.diameter / 100) * ExampleData.tool.percentage;
          addThisCoordinate();
          isRight = false;
        } else {
          ExampleData.coords.previus.x =
            ExampleData.piece.height + ExampleData.options.distanzaSicurezza; // go right
          addThisCoordinate();
          ExampleData.coords.previus.y += // need to be -= but for making it visible I use +
            (ExampleData.tool.diameter / 100) * ExampleData.tool.percentage;
          addThisCoordinate();
          isRight = true;
        }
      }
    }

    function addThisCoordinate(options = {G:1}) {
      array = [
        ...array,
        {
          x: ExampleData.coords.previus.x,
          y: ExampleData.coords.previus.y,
          z: ExampleData.coords.previus.z,
          options: {
            before: {
              G: options.G,
            },
          },
        },
      ];
    }
  }
</script>

<main class="flex flex-wrap p-4 gap-4 h-full overflow-auto">
  <div class="flex flex-wrap gap-4">
    <button
      class="bg-sky-500 p-4 rounded-lg text-2xl text-white hover:shadow-lg hover:scale-[1.01] focus:outline hover:shadow-sky-600/30 transition"
      on:click={createRandomArray}>random</button
    >

    <button
      class="bg-sky-500 p-4 rounded-lg text-2xl text-white hover:shadow-lg hover:scale-[1.01] focus:outline hover:shadow-sky-600/30 transition"
      on:click={createLineaObbliqua}>linea obliqua</button
    >

    <button
      class="bg-sky-500 p-4 rounded-lg text-2xl text-white hover:shadow-lg hover:scale-[1.01] focus:outline hover:shadow-sky-600/30 transition"
      on:click={createSpianatura}>Spianatura</button
    >
  </div>

  <div class="flex flex-wrap gap-5 justify-center">
    <Gcanvas coordsArray={array} animationSpeed={ANIMATION_SPEED} />
    <Gsource coordsArray={array} animationSpeed={ANIMATION_SPEED} />
  </div>
</main>
