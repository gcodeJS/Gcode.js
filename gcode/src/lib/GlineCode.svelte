<script>
  export let x;
  export let y;
  export let index;
  export let anim_speed;

  let thisCodeDiv;

  $: if (thisCodeDiv) {
    thisCodeDiv.addEventListener("animationend", () => {
      thisCodeDiv.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
</script>

<div bind:this={thisCodeDiv} style="--line-delay:{anim_speed * index}ms;">
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
      translate: 100%;
    }
    to {
      translate: 0;
    }
  }
</style>
