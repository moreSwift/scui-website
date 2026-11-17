<script lang="ts">
  import ButtonLink from "$lib/components/button-link.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import StepList from "$lib/components/step-list.svelte";
  import { quickStartSteps } from "$lib/content/quick-start";
  import { docs } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
</script>

<PageSection id="quickstart" className="quickstart">
  <div class="quickstart-grid">
    <div class="quickstart-copy">
      <p class="eyebrow">Quick start</p>
      <h2 class="section-title">Run your first app.</h2>
      <p class="section-lead">
        Swift Bundler provides the <code>sbun</code> CLI, which creates the project,
        builds the app bundle and handles device deployment. The SwiftCrossUI template
        gives you a working window in minutes, without creating an Xcode project.
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

    <StepList steps={quickStartSteps} />
  </div>
</PageSection>
