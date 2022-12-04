<script>
  export let commandsObj;
  export let index;
</script>

<div class="flex gap-2 order-first">
  <span class="text-slate-700">N{index}</span>
  {#if commandsObj != null}
    {#each Object.entries(commandsObj) as command}
      <span class="text-violet-500 font-bold">
        {command.join("")}
      </span>
    {/each}
  {/if}
</div>
