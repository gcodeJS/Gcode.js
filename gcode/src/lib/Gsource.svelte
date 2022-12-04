<script>
  import GlineCode from "./GlineCode.svelte";

  export let coordsArray;
  export let animationSpeed = 20;
</script>

<!-- relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-40 before:bg-gradient-to-t before:from-white/80 before:to-transparent -->
{#if coordsArray.length > 0}
  <div
    class="max-h-[60vmin] px-8 py-4 bg-white/80 rounded-lg overflow-auto"
  >
    <h1 class="text-3xl font-extrabold text-slate-400 mb-4">Source Code:</h1>
    {#each coordsArray as thisCoords, index (thisCoords)}
      <GlineCode positionsObj={thisCoords} {index} {animationSpeed} />
    {/each}
  </div>
{/if}
