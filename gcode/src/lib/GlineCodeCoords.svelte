<script>
  export let positions;
</script>

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
