<script>
  export let x;
  export let y;
  export let index;
  export let anim_speed;

  function scrollToThisElement(e) {
    e.target.scrollIntoView();
  }
</script>

<div
  style="--line-delay:{anim_speed * index}ms;"
  on:animationend={scrollToThisElement}
>
  <span>N{index}</span>
  <span>G1</span>
  <span>X{x.toFixed(2)}</span>
  <span>Y{y.toFixed(2)}</span>
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
