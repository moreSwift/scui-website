<script lang="ts">
  export let columns: 2 | 3 = 3;
</script>

<div class={`card-grid card-grid-${columns}`}>
  <slot />
</div>
