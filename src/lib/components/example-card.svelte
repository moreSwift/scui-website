<script lang="ts">
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
  import { github } from "$lib/site";

  export let example: {
    name: string;
    description: string;
    image: string;
  };
</script>

<a
  class="example-card"
  href={`${github}/tree/main/Examples/Sources/${example.name}`}
  aria-label={`View ${example.name} source on GitHub`}
>
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
    <span class="example-card-cta">
      View source
      <ArrowRight size="14" ariaLabel="" />
    </span>
  </div>
</a>
