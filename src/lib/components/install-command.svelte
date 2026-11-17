<script lang="ts">
  import CommandBlock from "$lib/components/command-block.svelte";
  import { onMount } from "svelte";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";

  type InstallPlatform = "unix" | "windows";

  const installPlatforms = [
    {
      id: "unix",
      name: "macOS / Linux",
      script: "https://sbun.dev/install.sh",
      command: "curl -fsSL https://sbun.dev/install.sh | sh",
    },
    {
      id: "windows",
      name: "Windows",
      script: "https://sbun.dev/install.ps1",
      command: 'powershell -c "irm sbun.dev/install.ps1|iex"',
    },
  ] as const;

  let platform: InstallPlatform = "unix";

  onMount(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    platform = userAgent.includes("windows") ? "windows" : "unix";
  });

  $: selected =
    installPlatforms.find((option) => option.id === platform) ??
    installPlatforms[0];
</script>

<div class="install-command">
  <CommandBlock className="install-command-block" lines={[selected.command]} />

  <div class="install-meta">
    <div class="install-platforms" role="group" aria-label="Install platform">
      {#each installPlatforms as option}
        <button
          type="button"
          class:active={platform === option.id}
          aria-pressed={platform === option.id}
          on:click={() => (platform = option.id)}
        >
          {option.name}
        </button>
      {/each}
    </div>

    <a
      class="install-script-link"
      href={selected.script}
      target="_blank"
      rel="noreferrer"
    >
      View install script
      <ArrowRight size="14" ariaLabel="" />
    </a>
  </div>
</div>
