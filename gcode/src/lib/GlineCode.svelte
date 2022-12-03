<script>
  import GlineCodeCoords from "./GlineCodeCoords.svelte";

  export let positionsObj;
  export let index;
</script>

<div class="flex gap-2">
  {#each Object.entries(positionsObj) as positions}
    {#if positions[0] && positions[1].before}
      {@const value = positions[1].before}
      <span class="text-slate-500">N{index}</span>
      {#each Object.entries(value) as command}
        <span class="text-violet-500 font-bold">
          {command.join("")}
        </span>
      {/each}
    {/if}
    {#if positions[0] !== "options"}
      <GlineCodeCoords {positions} />
    {:else}
      {@const value = positions[1].after}
      <span class="text-slate-400">
        ; {value.comment}
      </span>
    {/if}
  {/each}
</div>
