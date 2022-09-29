<script>
  export let x;
  export let y;
  export let index;
  export let anim_speed;

  let bindedThis;
  
  $: if (bindedThis) {
    bindedThis.addEventListener("animationend", () => {
      bindedThis.scrollIntoView()
    })
  }
</script>

<div
  bind:this={bindedThis}
  style="--line-delay:{anim_speed * index}ms;"
>
  N{index} G1 X{x.toFixed(2)} Y{y.toFixed(2)}
</div>

<style>
  div {
    animation: show var(--line-delay);
  }

  @keyframes show {
    from {
      translate: 100%;
    }
    to {
      translate: 0;
    }
  }
</style>
