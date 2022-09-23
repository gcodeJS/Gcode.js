<script>
  import Gcanvas from "./lib/Gcanvas.svelte";

  const createRandomArray = (numTimes) => {
    let array = [];

    for (let i = 0; i <= numTimes; i++) {
      array = [
        ...array,
        {
          x: i * 10 * Math.random(),
          y: i * 10,
        },
      ];
    }

    console.log(array)

    return array;
  };

  let nLines = 30;
</script>

<main
  class="flex flex-wrap justify-center gap-10 place-items-center h-full overflow-auto p-10"
>
  <input type="range" min="0" max="50" bind:value={nLines} />
  <Gcanvas coordsArray={createRandomArray(nLines)} />
</main>
