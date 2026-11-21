<script lang="ts">
  import Brand from "$lib/components/brand.svelte";
  import { Button } from "$lib/components/ui/button";
  import { discord, docs, github, sponsor } from "$lib/site";
  import { toggleMode } from "mode-watcher";
  import DiscordLogo from "svelte-radix/DiscordLogo.svelte";
  import GithubLogo from "svelte-radix/GithubLogo.svelte";
  import Heart from "svelte-radix/Heart.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import Sun from "svelte-radix/Sun.svelte";
</script>

<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <Brand />

    <div class="nav-center">
      <a href="#features">Overview</a>
      <a href="#platforms">Platforms</a>
      <a href="#quickstart">Quick start</a>
      <a href="#examples">Examples</a>
    </div>

    <div class="nav-actions">
      <a href={`${docs}/documentation/swiftcrossui/`} class="nav-docs">Docs</a>
      <a
        href={github}
        class="nav-icon"
        aria-label="SwiftCrossUI on GitHub"
        title="GitHub"
      >
        <GithubLogo size="17" ariaLabel="" />
      </a>
      <a
        href={discord}
        class="nav-icon"
        aria-label="SwiftCrossUI Discord server"
        title="Discord"
      >
        <DiscordLogo size="17" ariaLabel="" />
      </a>
      <a
        href={sponsor}
        class="nav-icon nav-sponsor"
        aria-label="Sponsor SwiftCrossUI"
        title="Sponsor SwiftCrossUI"
      >
        <Heart size="17" ariaLabel="" />
      </a>
      <Button
        on:click={toggleMode}
        variant="outline"
        size="icon"
        class="h-9 w-9"
        aria-label="Toggle theme"
      >
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </nav>
</header>
