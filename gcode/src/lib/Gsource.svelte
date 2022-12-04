<script>
  import GlineCode from "./GlineCode.svelte";

  export let coordsArray;
  export let animationSpeed = 20;
</script>

{#if coordsArray.length > 0}
  <div
    class="px-8 py-4 bg-white/80 shadow-lg rounded-lg max-h-[100%] overflow-auto"
  >
    <h1 class="text-3xl font-extrabold text-slate-400 mb-4">Source Code:</h1>
    {#each coordsArray as thisCoords, index (thisCoords)}
      <GlineCode positionsObj={thisCoords} {index} {animationSpeed} />
    {/each}
  </div>
{/if}
