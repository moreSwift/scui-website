<script lang="ts">
  import { onMount } from "svelte";
  import ButtonLink from "$lib/components/button-link.svelte";
  import CommandBlock from "$lib/components/command-block.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import { docs } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";

  const installPlatforms = [
    {
      id: "unix",
      name: "macOS / Linux",
      command: "curl -fsSL https://sbun.dev/install.sh | sh",
    },
    {
      id: "windows",
      name: "Windows",
      command: 'powershell -c "irm sbun.dev/install.ps1|iex"',
    },
  ] as const;

  type InstallPlatform = (typeof installPlatforms)[number]["id"];

  let installPlatform: InstallPlatform = "unix";

  $: selectedInstall =
    installPlatforms.find((option) => option.id === installPlatform) ??
    installPlatforms[0];

  $: quickStartLines = [
    selectedInstall.command,
    "sbun create HelloWorld --template SwiftCrossUI",
    "cd HelloWorld && sbun run",
  ];

  onMount(() => {
    if (navigator.userAgent.toLowerCase().includes("windows")) {
      installPlatform = "windows";
    }
  });
</script>

<PageSection id="quickstart" className="quickstart quickstart-band">
  <div class="quickstart-grid">
    <div class="quickstart-copy">
      <p class="eyebrow">Quick start</p>
      <h2 class="section-title">Get started in minutes.</h2>
      <p class="section-lead">
        Swift Bundler creates the project, builds it, and runs it. The
        SwiftCrossUI template gives you a working window without any setup.
      </p>
      <ButtonLink href={`${docs}/tutorials/swiftcrossui/quick-start`} size="lg">
        Read the full guide
        <ArrowRight size="18" ariaLabel="" />
      </ButtonLink>
      <p class="quickstart-alt">
        Prefer plain SwiftPM? Add the package and import
        <code>SwiftCrossUI</code> and <code>DefaultBackend</code>.
      </p>
    </div>

    <div class="terminal-card">
      <div class="terminal-titlebar">
        <div class="window-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span>Quick start</span>
        <div
          class="terminal-platforms"
          role="group"
          aria-label="Install platform"
        >
          {#each installPlatforms as option}
            <button
              type="button"
              class:active={installPlatform === option.id}
              aria-pressed={installPlatform === option.id}
              on:click={() => (installPlatform = option.id)}
            >
              {option.name}
            </button>
          {/each}
        </div>
      </div>
      <CommandBlock lines={quickStartLines} />
      <p class="terminal-note">
        Targeting iOS or Android? Use
        <code>sbun run --device &lt;Your device&gt;</code>
      </p>
    </div>
  </div>
</PageSection>
