<script>
  import Gcanvas from "./lib/Gcanvas.svelte";
  import Gsource from "./lib/Gsource.svelte";

  let array = [];
  const ANIMATION_SPEED = 20;

  function createRandomArray() {
    array = [];
    const maxY = (window.innerHeight / 100 * 40)
    for (let i = 0; i <= 100; i++) {
      array = [
        ...array,
        {
          x: i * 10,
          y: maxY * Math.random(),
        },
      ];
    }
  }
</script>

<main
  class="flex flex-wrap justify-center items-center gap-10 h-full overflow-auto p-10"
>
  <button
    class="bg-sky-500 p-4 rounded-lg text-2xl text-white hover:shadow-lg hover:scale-110 focus:outline hover:shadow-sky-600/30 transition"
    on:click={createRandomArray}>click me</button
  >
  <Gcanvas coordsArray={array} anim_speed={ANIMATION_SPEED} />
  <Gsource coordsArray={array} anim_speed={ANIMATION_SPEED} />
</main>
