<script lang="ts">
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { docs } from "$lib/site";
</script>

<PageSection muted>
  <SectionHeading eyebrow="What's included">
    <svelte:fragment slot="title"
      >Everything you need for everyday apps.</svelte:fragment
    >
  </SectionHeading>

  <div class="feature-bento">
    <article class="bento-card bento-large">
      <div class="bento-copy">
        <h3>Native controls</h3>
        <p>
          Lists, sliders, buttons and text fields are rendered with the
          platform's own widgets.
        </p>
      </div>
      <div class="bento-shot">
        <img
          src="/images/bento/music-player-window.webp"
          alt="MusicPlayerExample showing playlist controls and buttons"
          width="1600"
          height="878"
          loading="lazy"
        />
      </div>
    </article>

    <article class="bento-card bento-hot">
      <div class="bento-copy">
        <h3>Hot reloading</h3>
        <p>
          See changes as you edit when paired with Swift Bundler. Codable state
          persists across reloads.
        </p>
      </div>
      <div class="hot-window" aria-hidden="true">
        <div class="hot-titlebar">
          <span></span><span></span><span></span>
          <em>sbun run --hot</em>
        </div>
        <pre><code>@HotReloadable
struct PlaylistView: View &#123;
    @State var songs = loadSongs()

    var body: some View &#123;
        List(songs) &#123; SongRow($0) &#125;
    &#125;
&#125;</code></pre>
        <span class="hot-badge">State preserved</span>
      </div>
      <p class="bento-note">Available on macOS and Linux.</p>
    </article>

    <article class="bento-card bento-adaptive">
      <div class="bento-copy">
        <h3>Adaptive layout</h3>
        <p>
          Built-in views and modifiers adapt from a desktop window to a phone.
        </p>
      </div>
      <div class="adaptive-frames" aria-hidden="true">
        <img
          class="adaptive-desktop"
          src="/images/bento/music-player-window.webp"
          alt=""
          width="1600"
          height="878"
          loading="lazy"
        />
        <img
          class="adaptive-phone"
          src="/images/music-player/iphone.webp"
          alt=""
          width="553"
          height="1200"
          loading="lazy"
        />
      </div>
    </article>

    <article class="bento-card bento-wide">
      <div class="bento-copy">
        <h3>Navigation, state and sheets</h3>
        <p>
          Stack navigation, split views, <code>@State</code>,
          <code>@Environment</code> and <code>@AppStorage</code> are built in.
        </p>
      </div>
      <div class="bento-shot bento-nav-shot">
        <img
          src="/images/examples/navigation.webp"
          alt="NavigationExample showing a stack of subject choices"
          width="560"
          height="560"
          loading="lazy"
        />
      </div>
    </article>
  </div>

  <div class="bento-footer">
    <p>Some features are platform-specific.</p>
    <div>
      <a href={`${docs}/documentation/swiftcrossui/built-in-backends`}>
        See platform support
        <ArrowRight size="14" ariaLabel="" />
      </a>
      <a href={`${docs}/documentation/swiftcrossui/`}>
        Explore the API
        <ArrowRight size="14" ariaLabel="" />
      </a>
    </div>
  </div>
</PageSection>
