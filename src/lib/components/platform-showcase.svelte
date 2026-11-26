<script lang="ts">
  import PageSection from "$lib/components/page-section.svelte";
  import PlatformIcon from "$lib/components/platform-icon.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { platforms } from "$lib/content/platforms";
  import { docs } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
</script>

<PageSection id="platforms" muted>
  <SectionHeading eyebrow="Platforms">
    <svelte:fragment slot="title">Native widgets everywhere.</svelte:fragment>
    <svelte:fragment slot="lead">
      <p>
        The same MusicPlayerExample, rendered with each platform's own widgets.
        No web view, no lookalike controls. On phones, split views collapse to a
        single column, sheets support detents, and safe areas are handled for
        you.
      </p>
      <a
        class="platform-support-link"
        href={`${docs}/documentation/swiftcrossui/built-in-backends`}
      >
        See platform support
        <ArrowRight size="14" ariaLabel="" />
      </a>
    </svelte:fragment>
  </SectionHeading>

  <div class="platform-wall">
    {#each platforms as platform}
      <a
        class={`platform-tile ${platform.kind}`}
        href={platform.href}
        aria-label={`${platform.name} backend documentation`}
      >
        <div class="platform-media">
          {#if platform.image}
            <img
              src={platform.image}
              alt={platform.alt}
              loading="lazy"
              width={platform.kind === "phone" ? 553 : 1920}
              height={platform.kind === "phone" ? 1200 : 1248}
            />
          {:else}
            <div class="platform-tv">
              <PlatformIcon name={platform.icon} size={38} />
              <span>UIKit on the big screen</span>
            </div>
          {/if}
        </div>

        <div class="platform-meta">
          <span class="platform-name">
            <PlatformIcon name={platform.icon} size={17} />
            {platform.name}
          </span>
          <span class="platform-backend">{platform.backend}</span>
        </div>
      </a>
    {/each}
  </div>
</PageSection>
