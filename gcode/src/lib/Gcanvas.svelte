<script>
  import Gline from "./Gline.svelte";

  let coordsArray = [];

  for (let i = 0; i < 10; i++) {
    coordsArray = [
      ...coordsArray,
      {
        x: i * 20,
        y: i * 20,
      },
    ];
  }
</script>

<div class="relative bg-white w-40 h-40">
  {#each coordsArray as thisCoords, index}
    {@const prevCoords = coordsArray[index - 1]
      ? coordsArray[index - 1]
      : coordsArray[index]}
    <Gline
      x={thisCoords.x}
      y={thisCoords.y}
      prevX={prevCoords.x}
      prevY={prevCoords.y}
    />
  {/each}
</div>
