<script>
  import Gcanvas from "./lib/Gcanvas.svelte";

  const createRandomArray = (numTimes) => {
    let array = [];

    for (let i = 0; i <= numTimes; i++) {
      array = [
        ...array,
        {
          x: i * 10 * Math.random(),
          y: i * 10 * Math.random(),
        },
      ];
    }

    return array;
  };
</script>

<main
  class="flex flex-wrap justify-center gap-10 place-items-center h-full overflow-auto p-10"
>
  {#each [10, 20, 30, 40, 50, 60] as numberOfItems}
    <Gcanvas coordsArray={createRandomArray(numberOfItems)} />
  {/each}
</main>
