<script lang="ts">
  import Brand from "$lib/components/brand.svelte";
  import { discord, docs, github, sponsor } from "$lib/site";
  import DiscordLogo from "svelte-radix/DiscordLogo.svelte";
  import Heart from "svelte-radix/Heart.svelte";
</script>

<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <Brand />
      <p>A SwiftUI-style framework for native apps.</p>
      <p class="footer-note">MIT licensed. Built by the moreSwift community.</p>
    </div>

    <div class="footer-links">
      <div>
        <h3>Product</h3>
        <a href="#features">Features</a>
        <a href="#platforms">Platforms</a>
        <a href="#examples">Examples</a>
        <a href="#quickstart">Quick start</a>
      </div>
      <div>
        <h3>Resources</h3>
        <a href={`${docs}/documentation/swiftcrossui/`}>Documentation</a>
        <a href={`${docs}/tutorials/swiftcrossui/quick-start`}>Tutorial</a>
        <a href={github}>GitHub</a>
        <a href={`${github}/blob/main/LICENSE`}>License</a>
      </div>
      <div>
        <h3>Community</h3>
        <a href={discord}><DiscordLogo size="15" ariaLabel="" /> Discord</a>
        <a href={sponsor}><Heart size="15" ariaLabel="" /> Sponsor</a>
        <a href={`${github}/issues`}>Issues</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© {new Date().getFullYear()} SwiftCrossUI contributors</span>
    <span>
      Swift and SwiftUI are trademarks of Apple Inc. moreSwift is not affiliated
      with Apple.
    </span>
  </div>
</footer>
