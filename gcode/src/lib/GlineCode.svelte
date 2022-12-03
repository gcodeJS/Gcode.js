<script>
  export let positionsObj;
  export let index;
</script>

<div class="flex gap-2">
  <span class="text-slate-500">N{index}</span>
  <span class="text-violet-500 font-bold">G1</span>

  <div class="flex gap-2">
    {#each Object.entries(positionsObj) as positions}
      <div class="flex">
        {#each positions as pos, index}
          {#if index === 0}
            <span class="text-cyan-500 font-bold">
              {pos.toUpperCase()}
            </span>
          {:else}
            <span class="text-rose-500">
              {pos.toFixed(2)}
            </span>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .G-command-name {
    color: rgb(150, 0, 255);
  }

  .G-option-coords {
    color: rgb(100, 150, 255);
  }

  .G-options-M {
    color: rgb(0, 255, 150);
  }

  .G-number-value {
    color: rgb(255, 100, 50);
  }

  .G-comment {
    color: rgb(150, 150, 150);
  }
</style>
