<script lang="ts">
  import ButtonLink from "$lib/components/button-link.svelte";
  import { sponsor } from "$lib/site";
  import Heart from "svelte-radix/Heart.svelte";
</script>

<section class="support-section">
  <div class="support-band">
    <div class="support-copy">
      <p class="eyebrow">Support the project</p>
      <h2>Help keep SwiftCrossUI moving.</h2>
      <p>
        SwiftCrossUI is maintained by the moreSwift community. Sponsorships fund
        development time, CI and support for new platforms.
      </p>
    </div>
    <ButtonLink
      href={sponsor}
      variant="outline"
      size="lg"
      className="support-button"
    >
      <Heart size="18" ariaLabel="" />
      Sponsor on Open Collective
    </ButtonLink>
  </div>
</section>
