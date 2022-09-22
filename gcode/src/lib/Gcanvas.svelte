<script>
  import Gline from "./Gline.svelte";
  export let coordsArray;
</script>

<div class="relative bg-white shadow-md rounded w-80 h-80">
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
