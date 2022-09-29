<script>
  export let x;
  export let y;
  export let index;
  export let anim_speed = 20;
</script>

<div style="--line-delay:{anim_speed * index}ms;">
  N{index} G1 X{x.toFixed(2)} Y{y.toFixed(2)}
</div>

<style>
  div {
    animation: show var(--line-delay);
  }

  @keyframes show {
    from {
      scale: 0;
      translate: -100%;
    }
    to {
      scale: 1;
      translate: 0;
    }
  }
</style>
