<script>
  import Gline from "./Gline.svelte";
  export let coordsArray;

  const CORRECTION_DIMENSIONS = 2;

  $: maxCoordX = Math.max(...coordsArray.map((coord) => coord.x));
  $: maxCoordY = Math.max(...coordsArray.map((coord) => coord.y));

  let hWith = 0;
  let hNot = 0;

  $: scrollBarHeight = hWith - hNot;

  $: console.log(scrollBarHeight);
</script>

<style>

</style>

<div
  class="relative bg-white shadow-md rounded overflow-auto"
  style="width:{maxCoordX + CORRECTION_DIMENSIONS}px; height:{maxCoordY +
    CORRECTION_DIMENSIONS +
    scrollBarHeight}px;"
  bind:clientHeight={hNot}
  bind:offsetHeight={hWith}
>
  {#each coordsArray as thisCoords, index (thisCoords)}
    {@const prevCoords = coordsArray[index - 1] ?? thisCoords}
    <Gline
      x={thisCoords.x}
      y={thisCoords.y}
      prevX={prevCoords.x}
      prevY={prevCoords.y}
    />
    <!-- <div class="h-1 w-1 bg-red-500 absolute rounded-full" style="top:{thisCoords.y}px; left:{thisCoords.x}px;"></div> -->
  {/each}
</div>
