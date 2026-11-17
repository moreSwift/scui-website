<script lang="ts">
  import ExampleCard from "$lib/components/example-card.svelte";

  export let examples: {
    name: string;
    description: string;
    image: string;
  }[];
</script>

<div class="example-grid">
  {#each examples as example}
    <ExampleCard {example} />
  {/each}
</div>
