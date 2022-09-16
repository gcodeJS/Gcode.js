<script>
  import Gline from "./Gline.svelte";

  let array = [];

  for (let i = 0; i < 20; i++) {
    array = [
      ...array,
      {
        x: i * 10,
        y: i * 10,
      },
    ];
  }
</script>

<div>
  {#each array as item}
    <Gline x={item.x} y={item.y} />
  {/each}
</div>
