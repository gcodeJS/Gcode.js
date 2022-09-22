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

    return array;
  };
</script>

<main class="flex gap-10 place-items-center h-full overflow-auto p-4">
  <Gcanvas coordsArray={createRandomArray(10)} />
  <Gcanvas coordsArray={createRandomArray(20)} />
  <Gcanvas coordsArray={createRandomArray(30)} />
</main>
