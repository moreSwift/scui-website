<script lang="ts">
  export let columns: 2 | 3 = 3;
  export let className = "";
</script>

<div class={`card-grid card-grid-${columns} ${className}`}>
  <slot />
</div>
