<script>
  export let x;
  export let y;
  export let index;
</script>

<div style="--line-delay:{50 * index}ms;">
  N{index} G1 X{x.toFixed(2)} Y{y.toFixed(2)}
</div>

<style>
  div {
    animation: show var(--line-delay);
  }

  @keyframes show {
    from {
      opacity: 0;
      scale: 0;
      translate: 0 200%;
    }
    to {
      scale: 1;
      translate: 0;
    }
  }
</style>
