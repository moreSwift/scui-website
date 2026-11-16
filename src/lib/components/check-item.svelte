<script lang="ts">
  import Check from "svelte-radix/Check.svelte";

  export let title: string;
  export let as: "div" | "li" = "div";
</script>

<svelte:element this={as} class="check-item">
  <span class="point-icon"><Check size="16" ariaLabel="" /></span>
  <div class="check-item-body">
    <h3>{title}</h3>
    <p><slot /></p>
  </div>
</svelte:element>
