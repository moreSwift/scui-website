<script lang="ts">
  import ButtonLink from "$lib/components/button-link.svelte";
  import CardGrid from "$lib/components/card-grid.svelte";
  import CodeSection from "$lib/components/code-section.svelte";
  import ContentCard from "$lib/components/content-card.svelte";
  import ExampleGrid from "$lib/components/example-grid.svelte";
  import HeroSection from "$lib/components/hero-section.svelte";
  import MobileSection from "$lib/components/mobile-section.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import PlatformIcon from "$lib/components/platform-icon.svelte";
  import QuickStartSection from "$lib/components/quick-start-section.svelte";
  import SectionActions from "$lib/components/section-actions.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import SectionNote from "$lib/components/section-note.svelte";
  import SiteFooter from "$lib/components/site-footer.svelte";
  import SiteHeader from "$lib/components/site-header.svelte";
  import SupportBand from "$lib/components/support-band.svelte";
  import { examples } from "$lib/content/examples";
  import { featureCards } from "$lib/content/features";
  import { platformCards } from "$lib/content/platforms";
  import { docs, github } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
</script>

<svelte:head>
  <title>SwiftCrossUI — Native apps in Swift</title>
  <meta
    name="description"
    content="A SwiftUI-style framework for building native apps in Swift. Write your UI once and run it on macOS, Linux, Windows, iOS, Android and tvOS."
  />
  <meta property="og:title" content="SwiftCrossUI — Native apps in Swift" />
  <meta
    property="og:description"
    content="Write SwiftUI-style apps in Swift and run them natively on macOS, Linux, Windows, iOS, Android and tvOS."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://swiftcrossui.dev/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<SiteHeader />

<main>
  <HeroSection />
  <CodeSection />

  <PageSection id="platforms" muted>
    <SectionHeading eyebrow="Platforms">
      <svelte:fragment slot="title">Six platforms.</svelte:fragment>
      <svelte:fragment slot="lead">
        Each platform has a native backend, so controls and behaviour always
        match the platform.
      </svelte:fragment>
    </SectionHeading>

    <CardGrid className="platform-card-grid">
      {#each platformCards as platform}
        <ContentCard
          href={platform.href}
          title={platform.name}
          description={platform.description}
          tags={[platform.backend]}
          iconColor={platform.color}
        >
          <PlatformIcon slot="icon" name={platform.icon} size={22} />
        </ContentCard>
      {/each}
    </CardGrid>
  </PageSection>

  <MobileSection />

  <PageSection muted>
    <SectionHeading eyebrow="What's included">
      <svelte:fragment slot="title">Fully featured.</svelte:fragment>
    </SectionHeading>

    <CardGrid className="feature-card-grid">
      {#each featureCards as feature}
        <ContentCard
          title={feature.title}
          description={feature.description}
          tags={feature.tags}
          iconColor={feature.color}
        >
          <svelte:component
            this={feature.icon}
            slot="icon"
            size="22"
            ariaLabel=""
          />
        </ContentCard>
      {/each}
    </CardGrid>

    <SectionNote>
      <strong>Platform notes:</strong> tables are currently macOS-only, WebView
      is available on Apple platforms, and hot reloading works on macOS and
      Linux. Core views, controls and layouts work on every backend.
      <a href={`${docs}/documentation/swiftcrossui/built-in-backends`}
        >Read the backend docs →</a
      >
    </SectionNote>
  </PageSection>

  <QuickStartSection />

  <PageSection id="examples" muted>
    <SectionHeading eyebrow="Examples">
      <svelte:fragment slot="title">Browse our examples.</svelte:fragment>
      <svelte:fragment slot="lead">
        The SwiftCrossUI repository contains over 20 example apps.
      </svelte:fragment>
    </SectionHeading>

    <ExampleGrid {examples} />

    <SectionActions>
      <ButtonLink
        href={`${docs}/documentation/swiftcrossui/examples`}
        variant="outline"
      >
        Browse all examples
        <ArrowRight size="16" ariaLabel="" />
      </ButtonLink>
      <a href={`${github}/tree/main/Examples/Sources`} class="text-link">
        <span class="sm:hidden"> View on GitHub </span>
        <span class="hidden sm:inline"> View source on GitHub </span>
      </a>
    </SectionActions>

    <SupportBand />
  </PageSection>
</main>

<SiteFooter />
