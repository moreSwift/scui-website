<script lang="ts">
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
  import { github } from "$lib/site";

  export let example: {
    name: string;
    description: string;
    image: string;
  };
</script>

<article class="example-card">
  <div class="example-card-image">
    <img
      src={example.image}
      alt={`${example.name} running on macOS`}
      width="560"
      height="560"
      loading="lazy"
    />
  </div>
  <div class="example-card-content">
    <strong>{example.name}</strong>
    <span>{example.description}</span>
    <a
      class="example-card-link"
      href={`${github}/tree/main/Examples/Sources/${example.name}`}
    >
      View the source
      <ArrowRight size="14" ariaLabel="" />
    </a>
  </div>
</article>
