<script lang="ts">
  export let title: string;
  export let description: string;
  export let tags: string[] = [];
  export let href: string | undefined = undefined;
</script>

<svelte:element
  this={href ? "a" : "article"}
  class="content-card"
  {...href ? { href } : {}}
>
  <div class="card-top">
    <span class="card-icon"><slot name="icon" /></span>
    <h3>{title}</h3>
  </div>
  <p>{description}</p>
  {#if tags.length > 0}
    <div class="card-tags">
      {#each tags as tag}
        <code>{tag}</code>
      {/each}
    </div>
  {/if}
</svelte:element>
