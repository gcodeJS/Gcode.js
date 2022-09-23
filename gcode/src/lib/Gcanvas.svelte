<script>
  import Gline from "./Gline.svelte";
  export let coordsArray;

  $: maxCoordX = Math.max(...coordsArray.map((coord) => coord.x));
  $: maxCoordY = Math.max(...coordsArray.map((coord) => coord.y));
</script>

<div
  class="relative bg-white shadow-md rounded"
  style="width:{maxCoordX}px; height:{maxCoordY}px;"
>
  {#each coordsArray as thisCoords, index}
    {@const prevCoords = coordsArray[index - 1] ?? thisCoords}
    <Gline
      x={thisCoords.x}
      y={thisCoords.y}
      prevX={prevCoords.x}
      prevY={prevCoords.y}
    />
  {/each}
</div>
