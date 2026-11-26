<script lang="ts">
  import Brand from "$lib/components/brand.svelte";
  import { Button } from "$lib/components/ui/button";
  import { docs, github } from "$lib/site";
  import { toggleMode } from "mode-watcher";
  import GithubLogo from "svelte-radix/GithubLogo.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import Sun from "svelte-radix/Sun.svelte";
</script>

<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <Brand />

    <div class="nav-center">
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
      <Button
        on:click={toggleMode}
        variant="outline"
        size="icon"
        class="nav-theme h-9 w-9"
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
      <a
        href="#quickstart"
        class="nav-start">Get started</a
      >
    </div>
  </nav>
</header>

