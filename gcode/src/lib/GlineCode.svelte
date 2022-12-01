<script>
  export let positionsObj;
  export let index;
  export let anim_speed;

  function scrollToThisElement(e) {
    e.target.scrollIntoView({block: 'nearest'});
  }
</script>

<div
  class="flex gap-2"
  style="--line-delay:{anim_speed * index}ms;"
  on:animationend={scrollToThisElement}
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

<style>
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
</style>
