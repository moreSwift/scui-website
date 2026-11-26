<script lang="ts">
  import ButtonLink from "$lib/components/button-link.svelte";
  import CodeSection from "$lib/components/code-section.svelte";
  import ExampleGrid from "$lib/components/example-grid.svelte";
  import HeroSection from "$lib/components/hero-section.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import PlatformShowcase from "$lib/components/platform-showcase.svelte";
  import QuickStartSection from "$lib/components/quick-start-section.svelte";
  import SectionActions from "$lib/components/section-actions.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import SiteFooter from "$lib/components/site-footer.svelte";
  import SiteHeader from "$lib/components/site-header.svelte";
  import SupportBand from "$lib/components/support-band.svelte";
  import { examples } from "$lib/content/examples";
  import { docs, github } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
</script>

<svelte:head>
  <title>SwiftCrossUI — SwiftUI-style native apps for every platform</title>
  <meta
    name="description"
    content="A SwiftUI-style framework for building native apps in Swift. Write your UI once and run it on macOS, Linux, Windows, iOS, Android and tvOS."
  />
  <meta
    property="og:title"
    content="SwiftCrossUI — SwiftUI-style native apps for every platform"
  />
  <meta
    property="og:description"
    content="Write SwiftUI-style apps in Swift and run them natively on macOS, Linux, Windows, iOS, Android and tvOS."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://swiftcrossui.dev/" />
  <meta property="og:image" content="https://swiftcrossui.dev/images/og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://swiftcrossui.dev/images/og.jpg" />
</svelte:head>

<SiteHeader />

<main>
  <HeroSection />
  <CodeSection />
  <PlatformShowcase />
  <QuickStartSection />

  <PageSection id="examples" className="examples-section" muted>
    <SectionHeading eyebrow="Examples">
      <svelte:fragment slot="title">See what you can build.</svelte:fragment>
      <svelte:fragment slot="lead">
        SwiftCrossUI has 20+ example apps. See SwiftCrossUI in action for
        yourself.
      </svelte:fragment>
    </SectionHeading>

    <ExampleGrid {examples} />

    <SectionActions>
      <ButtonLink
        href={`${docs}/documentation/swiftcrossui/examples`}
        variant="outline"
      >
        Browse 20+ examples
        <ArrowRight size="16" ariaLabel="" />
      </ButtonLink>
      <a href={`${github}/tree/main/Examples/Sources`} class="text-link">
        <span class="sm:hidden"> View on GitHub </span>
        <span class="hidden sm:inline"> View source on GitHub </span>
      </a>
    </SectionActions>
  </PageSection>

  <SupportBand />
</main>

<SiteFooter />
