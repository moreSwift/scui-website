<script lang="ts">
  import CommandBlock from "$lib/components/command-block.svelte";

  export let steps: {
    number: string;
    title: string;
    lines: string[];
  }[];
</script>

<ol class="steps">
  {#each steps as step}
    <li class="step">
      <span class="step-number">{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        <CommandBlock lines={step.lines} />
      </div>
    </li>
  {/each}
</ol>
