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

  const mobilePlatforms = [
    {
      id: "ios",
      name: "iOS",
      image: "/images/music-player/iphone.webp",
      alt: "MusicPlayerExample running on an iPhone",
      width: 553,
      height: 1200,
    },
    {
      id: "android",
      name: "Android",
      image: "/images/music-player/android.webp",
      alt: "MusicPlayerExample running on an Android phone",
      width: 553,
      height: 1229,
    },
  ] as const;

  type BackendId = (typeof desktopBackends)[number]["id"];
  type MobilePlatformId = (typeof mobilePlatforms)[number]["id"];
  type MobileView = "mobile" | "desktop";

  let selectedBackend: BackendId = "appkitbackend";
  let selectedMobilePlatform: MobilePlatformId = "ios";
  let mobileView: MobileView = "mobile";

  $: selectedPlatform =
    desktopBackends.find((backend) => backend.id === selectedBackend)
      ?.platform ?? "macOS";
  $: selectedMobile =
    mobilePlatforms.find(
      (platform) => platform.id === selectedMobilePlatform,
    ) ?? mobilePlatforms[0];
</script>

<section class="hero">
  <div class="hero-glow" aria-hidden="true"></div>

  <div class="hero-inner">
    <h1 class="hero-title">
      Native Swift apps.<br />
      <span class="gradient-text">Everywhere.</span>
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
      <Tabs.Root class="showcase-desktop-tabs" bind:value={selectedBackend}>
        <Tabs.List class="tabs showcase-tabs grid grid-cols-3">
          {#each desktopBackends as backend}
            <Tabs.Trigger value={backend.id}>{backend.platform}</Tabs.Trigger>
          {/each}
        </Tabs.List>
      </Tabs.Root>

      <div class="showcase-device-group">
        <span class="showcase-plus" aria-hidden="true">+</span>
        <Tabs.Root bind:value={selectedMobilePlatform}>
          <Tabs.List
            class="tabs showcase-tabs showcase-mobile-tabs grid grid-cols-2"
            aria-label="Mobile platform"
          >
            {#each mobilePlatforms as platform}
              <Tabs.Trigger value={platform.id}>{platform.name}</Tabs.Trigger>
            {/each}
          </Tabs.List>
        </Tabs.Root>
      </div>

      <div
        class="showcase-mobile-toggle"
        role="group"
        aria-label="Preview device"
      >
        <button
          type="button"
          class:active={mobileView === "mobile"}
          aria-pressed={mobileView === "mobile"}
          on:click={() => (mobileView = "mobile")}
        >
          Mobile
        </button>
        <button
          type="button"
          class:active={mobileView === "desktop"}
          aria-pressed={mobileView === "desktop"}
          on:click={() => (mobileView = "desktop")}
        >
          Desktop
        </button>
      </div>
    </div>

    <div
      class="showcase-stage"
      class:show-mobile={mobileView === "mobile"}
      class:show-desktop={mobileView === "desktop"}
    >
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

      <div
        class="phone-shot desktop-phone"
        class:phone-android={selectedMobile.id === "android"}
      >
        <img
          src={selectedMobile.image}
          alt={selectedMobile.alt}
          width={selectedMobile.width}
          height={selectedMobile.height}
        />
      </div>

      <div class="mobile-phones">
        {#each mobilePlatforms as platform}
          <div class="mobile-phone-preview">
            <div
              class="phone-shot"
              class:phone-android={platform.id === "android"}
            >
              <img
                src={platform.image}
                alt={platform.alt}
                width={platform.width}
                height={platform.height}
              />
            </div>
            <span class="mobile-phone-label">{platform.name}</span>
          </div>
        {/each}
      </div>
    </div>

    <p class="showcase-caption">
      <span class="caption-wide">
        MusicPlayerExample on {selectedPlatform} and {selectedMobile.name}.
      </span>
      <span class="caption-mobile">
        {mobileView === "mobile"
          ? "MusicPlayerExample on iOS and Android."
          : `MusicPlayerExample on ${selectedPlatform}.`}
      </span>
    </p>
  </div>
</section>
