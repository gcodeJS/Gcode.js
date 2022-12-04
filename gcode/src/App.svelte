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

    for (let i = 0; i <= 50; i++) {
      array = [
        ...array,
        {
          x: i * 10,
          y: i * 10,
          options: {
            G: 2,
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
  </div>

  <div class="flex flex-wrap gap-5 justify-center">
    <Gcanvas coordsArray={array} anim_speed={ANIMATION_SPEED} />
    <Gsource coordsArray={array} />
  </div>
</main>
