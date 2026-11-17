<script lang="ts">
  import ButtonLink from "$lib/components/button-link.svelte";
  import PlatformIcon from "$lib/components/platform-icon.svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import { platforms } from "$lib/content/platforms";
  import { docs, github, sponsor } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
  import GithubLogo from "svelte-radix/GithubLogo.svelte";

  const desktopBackends = [
    { id: "appkitbackend", platform: "macOS" },
    { id: "gtkbackend", platform: "Linux" },
    { id: "winuibackend", platform: "Windows" },
  ] as const;

  type BackendId = (typeof desktopBackends)[number]["id"];
  let selectedBackend: BackendId = "appkitbackend";
  $: selectedPlatform =
    desktopBackends.find((backend) => backend.id === selectedBackend)
      ?.platform ?? "macOS";
</script>

<section class="hero">
  <div class="hero-glow" aria-hidden="true"></div>

  <div class="hero-inner">
    <h1 class="hero-title">
      Native apps in Swift.<br />
      <span class="gradient-text">On six platforms.</span>
    </h1>

    <div class="hero-actions">
      <ButtonLink href={`${docs}/tutorials/swiftcrossui/quick-start`} size="lg">
        Get started
        <ArrowRight size="18" ariaLabel="" />
      </ButtonLink>
      <ButtonLink href={github} variant="outline" size="lg">
        <GithubLogo size="18" ariaLabel="" />
        View on GitHub
      </ButtonLink>
    </div>

    <div class="hero-platforms">
      <span class="hero-platforms-label">Runs on</span>
      {#each platforms as platform}
        <span class="platform-chip">
          <PlatformIcon name={platform.icon} size={15} />
          {platform.name}
        </span>
      {/each}
    </div>

    <p class="hero-support">
      Enjoying SwiftCrossUI?
      <a href={sponsor} class="sponsor-link">
        Sponsor its development
        <ArrowRight size="15" ariaLabel="" />
      </a>
    </p>
  </div>

  <div class="showcase">
    <div class="showcase-toolbar">
      <Tabs.Root bind:value={selectedBackend}>
        <Tabs.List class="tabs showcase-tabs grid grid-cols-3">
          {#each desktopBackends as backend}
            <Tabs.Trigger value={backend.id}>{backend.platform}</Tabs.Trigger>
          {/each}
        </Tabs.List>
      </Tabs.Root>

      <div class="showcase-device-group">
        <span class="showcase-plus" aria-hidden="true">+</span>
        <span class="showcase-device">
          <PlatformIcon name="ios" size={14} />
          iPhone 16 preview
        </span>
      </div>
    </div>

    <div class="showcase-stage">
      <div class="desktop-shot">
        {#each desktopBackends as backend}
          <img
            src={`/images/music-player/${backend.id}-utah.webp`}
            alt={`MusicPlayerExample running on ${backend.platform}`}
            width="1920"
            height="1248"
            class={`desktop-preview ${backend.id === selectedBackend ? "shown" : ""}`}
          />
        {/each}
      </div>

      <div class="phone-shot">
        <img
          src="/images/music-player/iphone.webp"
          alt="MusicPlayerExample running on an iPhone"
          width="553"
          height="1200"
        />
      </div>
    </div>

    <p class="showcase-caption">
      MusicPlayerExample on {selectedPlatform} and iPhone.
    </p>
  </div>
</section>
