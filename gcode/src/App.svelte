<script>
  import Gcanvas from "./lib/Gcanvas.svelte";
  
  let nLines = 10;
  
  function createRandomArray(numTimes) {
    let array = [];

    for (let i = 0; i <= numTimes; i++) {
      array = [
        ...array,
        {
          x: i * (2 * i),
          y: i * 10,
        },
      ];
    }

    return array;
  };

</script>

<main
  class="flex flex-wrap justify-center gap-10 place-items-center h-full overflow-auto p-10"
>
  <input class="fixed top-0 m-4 w-[80vw]" type="range" min="0" max="50" bind:value={nLines} />
  <Gcanvas coordsArray={createRandomArray(nLines)} />
</main>