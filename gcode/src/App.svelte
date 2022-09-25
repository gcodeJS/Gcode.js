<script>
  import Gcanvas from "./lib/Gcanvas.svelte";

  let array = [];

  function createRandomArray() {
    array = [];
    for (let i = 0; i <= 30; i++) {
      array = [
        ...array,
        {
          x: i * 10 * Math.random(),
          y: i * 10,
        },
      ];
    }
  }
</script>

<main
  class="flex flex-wrap justify-center gap-10 place-items-center h-full overflow-auto p-10"
>
  <button
    class="bg-sky-500 p-4 rounded-lg text-2xl text-white hover:shadow-lg hover:scale-110 border-0 focus:border-4 focus:border-blue-800 focus:bg-blue-400 hover:shadow-sky-600/30 transition duration-300"
    on:click={createRandomArray}>click me</button
  >
  <Gcanvas coordsArray={array} />
</main>
