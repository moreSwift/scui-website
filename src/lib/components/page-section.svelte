<script lang="ts">
  export let id: string | undefined = undefined;
  export let muted = false;
  export let className = "";
</script>

<section {id} class={`section ${muted ? "section-muted" : ""} ${className}`}>
  <slot />
</section>
