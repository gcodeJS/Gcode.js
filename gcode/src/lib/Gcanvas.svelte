<script>
  import Gline from "./Gline.svelte";
  export let coordsArray;

  const CORRECTION_DIMENSIONS = 2;

  $: maxCoordX = Math.max(...coordsArray.map((coord) => coord.x));
  $: maxCoordY = Math.max(...coordsArray.map((coord) => coord.y));

  let hWith = 0;
  let hNot = 0;

  $: scrollBarHeight = hWith - hNot;

  let parentOverflow;

  $: setOverflowStyle = parentOverflow ? "hidden" : "auto";
</script>

<div
  class="Gcanvas relative bg-white shadow-md rounded overflow-auto transition-[width,height]"
  style=" 
  --canvas-width:{maxCoordX + CORRECTION_DIMENSIONS}px; 
  --canvas-height:{maxCoordY + scrollBarHeight + CORRECTION_DIMENSIONS}px;
  --parentOverflow:{setOverflowStyle};
  "
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
      {index}
      totalLines={coordsArray.length}
      bind:parentOverflow
    />
  {/each}
</div>

<style>
  div {
    width: var(--canvas-width);
    height: var(--canvas-height);
    overflow: var(--parentOverflow);
    container-type: inline-size;
  }
</style>
