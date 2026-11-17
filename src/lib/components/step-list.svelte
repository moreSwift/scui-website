<script lang="ts">
  import CommandBlock from "$lib/components/command-block.svelte";
  import InstallCommand from "$lib/components/install-command.svelte";

  export let steps: {
    number: string;
    title: string;
    kind?: "install";
    lines?: string[];
  }[];
</script>

<ol class="steps">
  {#each steps as step}
    <li class="step">
      <span class="step-number">{step.number}</span>
      <div>
        <h3>{step.title}</h3>
        {#if step.kind === "install"}
          <InstallCommand />
        {:else}
          <CommandBlock lines={step.lines ?? []} />
        {/if}
      </div>
    </li>
  {/each}
</ol>
