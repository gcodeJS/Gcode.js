<script>
  import GlineCode from "./GlineCode.svelte";

  export let coordsArray;
  export let anim_speed;
</script>

{#if coordsArray.length > 0}
  <div class="p-4 bg-white/80 shadow-lg rounded-lg max-h-80 overflow-auto">
    {#each coordsArray as thisCoords, index (thisCoords)}
      <GlineCode x={thisCoords.x} y={thisCoords.y} {index} {anim_speed} />
    {/each}
  </div>
{/if}
