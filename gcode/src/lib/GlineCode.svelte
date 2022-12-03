<script>
  import GlineCodeAfter from "./GlineCodeAfter.svelte";
  import GlineCodeBefore from "./GlineCodeBefore.svelte";
  import GlineCodeCoords from "./GlineCodeCoords.svelte";

  export let positionsObj;
  export let index;
</script>

<div class="flex gap-2">
  {#each Object.entries(positionsObj) as positions}
    {#if positions[0] !== "options"}
      <GlineCodeCoords {positions} />
    {:else}
      <GlineCodeBefore commandsObj={positions[1].before} {index} />
      <GlineCodeAfter optionsObj={positions[1].after} />
    {/if}
  {/each}
</div>
