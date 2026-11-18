<script lang="ts">
  import CheckItem from "$lib/components/check-item.svelte";
  import CommandBlock from "$lib/components/command-block.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import { docs } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
</script>

<PageSection className="mobile-band">
  <div class="mobile-grid">
    <div class="phone-large">
      <img
        src="/images/instagram/iphone.webp"
        alt="InstagramExample on an iPhone, showing a scrolling feed and tab bar"
        width="553"
        height="1200"
      />
      <span class="phone-caption">InstagramExample · iPhone 16</span>
    </div>

    <div class="mobile-copy">
      <p class="eyebrow">Mobile</p>
      <h2 class="section-title">The same app, built for touch.</h2>
      <p class="section-lead">
        The same views and state work across desktop and mobile, with additional
        APIs for touch.
      </p>

      <ul class="feature-list">
        <CheckItem as="li" title="Adaptive navigation.">
          <code>NavigationSplitView</code> becomes a single-column layout on
          phones, while <code>NavigationStack</code> keeps native back behaviour.
        </CheckItem>
        <CheckItem as="li" title="Fluid sheets.">
          Sheets support detents, and interactive dismissal.
        </CheckItem>
        <CheckItem as="li" title="Device-aware layout.">
          Branch on device class to make sure that your app always looks great.
        </CheckItem>
        <CheckItem as="li" title="Simulator and device workflow.">
          Run on iOS and Android simulators and devices from one project with
          Swift Bundler.
        </CheckItem>
      </ul>

      <div class="mobile-run">
        <CommandBlock
          className="mobile-command"
          lines={['sbun run --simulator "iPhone 16"']}
        />
        <a href={`${docs}/tutorials/swiftcrossui/quick-start`}>
          Try it
          <ArrowRight size="15" ariaLabel="" />
        </a>
      </div>
    </div>
  </div>
</PageSection>
