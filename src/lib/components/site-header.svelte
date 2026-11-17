<script lang="ts">
  import Brand from "$lib/components/brand.svelte";
  import { Button } from "$lib/components/ui/button";
  import { discord, docs, github, sponsor } from "$lib/site";
  import { toggleMode } from "mode-watcher";
  import Heart from "svelte-radix/Heart.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import Sun from "svelte-radix/Sun.svelte";
</script>

<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <Brand />

    <div class="nav-links">
      <a href="#features" class="nav-secondary">Features</a>
      <a href="#platforms" class="nav-secondary">Platforms</a>
      <a href="#examples" class="nav-secondary">Examples</a>
      <a href={`${docs}/documentation/swiftcrossui/`} class="nav-tertiary"
        >Docs</a
      >
      <a href={github} class="nav-github">GitHub</a>
      <a href={discord} class="nav-tertiary">Discord</a>
      <a
        href={sponsor}
        class="nav-sponsor"
        aria-label="Sponsor SwiftCrossUI"
        title="Sponsor SwiftCrossUI"
      >
        <Heart size="17" ariaLabel="" />
      </a>
      <Button
        on:click={toggleMode}
        variant="outline"
        size="icon"
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
