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
          x: null,
          y: null,
          z: null,
        },
        zeroPoint: {
          x: 0,
          y: 0,
          z: 1,
        },
      },
    };

    const linesToDo = {
      y: Math.ceil(
        ExampleData.piece.height /
          ((ExampleData.tool.diameter / 100) * ExampleData.tool.percentage),
      ),
    };

    console.log(linesToDo);

    let isRight = false;

    for (let i = 0; i <= 50; i++) {
      if (isRight) {
      }

      function goLeft() {}

      // array = [
      //   ...array,
      //   {
      //     x: 10,
      //     y: 10,
      //     options: {
      //       before: {
      //         G: 1,
      //       },
      //     },
      //   },
      // ];
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
