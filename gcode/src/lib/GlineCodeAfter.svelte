<script>
  export let optionsObj;
</script>

<div class="flex order-last">
  {#if optionsObj != null}
    <span class="text-slate-400">
      ; {optionsObj.comment}
    </span>
  {/if}
</div>