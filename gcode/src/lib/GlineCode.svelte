<script>
  export let positionsObj;
  export let index;

  // function scrollToThisElement(e) {
  //   e.target.scrollIntoView();
  // }
</script>

<div
  class="flex gap-2"
>
  <span>N{index}</span>
  <span>G1</span>

  <div class="flex gap-2">
    {#each Object.entries(positionsObj) as positions}
      <div class="flex">
        {#each positions as pos, index}
          <span>
            {#if index === 0}
              {pos.toUpperCase()}
            {:else}
              {pos.toFixed(2)}
            {/if}
          </span>
        {/each}
      </div>
    {/each}
  </div>
</div>

<!-- <style>
  div {
    animation: show var(--line-delay);
  }

  @keyframes show {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }
</style> -->
