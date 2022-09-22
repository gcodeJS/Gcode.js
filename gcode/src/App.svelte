<script>
  import Gcanvas from "./lib/Gcanvas.svelte";

  let coordsArray = [];
  let nTimes = 10;

  for (let i = nTimes * -1; i <= nTimes; i++) {
    coordsArray = [
      ...coordsArray,
      {
        x: i,
        y: i * (i * 2),
      },
    ];
  }

  console.log(coordsArray)
</script>

<main class="grid grid-cols-2 place-items-center h-full">
  <Gcanvas {coordsArray} />
  <Gcanvas {coordsArray} />
</main>
