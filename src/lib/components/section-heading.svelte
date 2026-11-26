<script lang="ts">
  export let eyebrow: string;
</script>

<div class="section-heading">
  <p class="eyebrow">{eyebrow}</p>
  <h2 class="section-title"><slot name="title" /></h2>
  {#if $$slots.lead}
    <div class="section-lead"><slot name="lead" /></div>
  {/if}
</div>
