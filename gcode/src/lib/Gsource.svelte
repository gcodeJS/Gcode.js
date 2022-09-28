<script>
  import GlineCode from "./GlineCode.svelte";

  export let coordsArray;
</script>

<div class="p-4 bg-white/50 rounded-lg max-h-80 w-100 overflow-auto">
  {#each coordsArray as thisCoords, index (thisCoords)}
    <GlineCode x={thisCoords.x} y={thisCoords.y} index={index} />
  {/each}
</div>

<!-- <style>
  div {
    width: var(--canvas-width);
    height: var(--canvas-height);
    overflow: var(--parentOverflow);
  }
</style> -->
