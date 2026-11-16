<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { Button } from "$lib/components/ui/button";
  import { toggleMode } from "mode-watcher";

  import Sun from "svelte-radix/Sun.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
  import GithubLogo from "svelte-radix/GithubLogo.svelte";
  import DiscordLogo from "svelte-radix/DiscordLogo.svelte";
  import Heart from "svelte-radix/Heart.svelte";
  import Slider from "svelte-radix/Slider.svelte";
  import Frame from "svelte-radix/Frame.svelte";
  import CardStack from "svelte-radix/CardStack.svelte";
  import Layers from "svelte-radix/Layers.svelte";
  import CursorArrow from "svelte-radix/CursorArrow.svelte";
  import LightningBolt from "svelte-radix/LightningBolt.svelte";
  import Brand from "$lib/components/brand.svelte";
  import ButtonLink from "$lib/components/button-link.svelte";
  import CheckItem from "$lib/components/check-item.svelte";
  import CommandBlock from "$lib/components/command-block.svelte";
  import PlatformIcon from "$lib/components/platform-icon.svelte";

  const docs = "https://docs.swiftcrossui.dev";
  const github = "https://github.com/moreSwift/swift-cross-ui";
  const discord = "https://moreswift.dev/discord";
  const sponsor = "https://opencollective.com/moreswift";

  const desktopBackends = [
    { id: "appkitbackend", platform: "macOS", backend: "AppKitBackend" },
    { id: "gtkbackend", platform: "Linux", backend: "GtkBackend" },
    { id: "winuibackend", platform: "Windows", backend: "WinUIBackend" },
  ] as const;

  type BackendId = (typeof desktopBackends)[number]["id"];
  let selectedBackend: BackendId = "appkitbackend";
  $: selectedPlatform =
    desktopBackends.find((backend) => backend.id === selectedBackend)
      ?.platform ?? "macOS";

  const platforms = [
    { name: "macOS", icon: "macos" as const },
    { name: "Linux", icon: "linux" as const },
    { name: "Windows", icon: "windows" as const },
    { name: "iOS", icon: "ios" as const },
    { name: "Android", icon: "android" as const },
    { name: "tvOS", icon: "tvos" as const },
  ];

  const platformCards = [
    {
      name: "macOS",
      icon: "macos" as const,
      backend: "AppKitBackend",
      description: "App windows, menus and controls.",
      href: `${docs}/documentation/swiftcrossui/appkitbackend`,
    },
    {
      name: "iOS",
      icon: "ios" as const,
      backend: "UIKitBackend",
      description: "Touch navigation, sheets and controls.",
      href: `${docs}/documentation/swiftcrossui/uikitbackend`,
    },
    {
      name: "Android",
      icon: "android" as const,
      backend: "AndroidBackend",
      description: "Widgets and touch input.",
      href: `${docs}/documentation/swiftcrossui/androidbackend`,
    },
    {
      name: "Windows",
      icon: "windows" as const,
      backend: "WinUIBackend",
      description: "WinUI 3 controls and app packaging.",
      href: `${docs}/documentation/swiftcrossui/winuibackend`,
    },
    {
      name: "Linux",
      icon: "linux" as const,
      backend: "GtkBackend",
      description: "GTK 4 widgets, plus GTK 3 for older distributions.",
      href: `${docs}/documentation/swiftcrossui/gtkbackend`,
    },
    {
      name: "tvOS",
      icon: "tvos" as const,
      backend: "UIKitBackend",
      description: "UIKit on the big screen, with focus-friendly controls.",
      href: `${docs}/documentation/swiftcrossui/uikitbackend`,
    },
  ];

  const featureCards = [
    {
      icon: Slider,
      title: "Native controls",
      description:
        "The standard controls your app needs, rendered by the platform's own widgets.",
      tags: ["Button", "TextField", "Slider", "Toggle", "Picker", "List"],
    },
    {
      icon: Frame,
      title: "Adaptive layout",
      description:
        "Build screens with stacks, frames and padding, and scroll when the content grows.",
      tags: ["HStack", "VStack", "ZStack", "ScrollView", "GeometryReader"],
    },
    {
      icon: CardStack,
      title: "Navigation",
      description:
        "Stack navigation and split-view layouts with typed destinations.",
      tags: ["NavigationStack", "NavigationSplitView", "NavigationPath"],
    },
    {
      icon: Layers,
      title: "State and persistence",
      description:
        "Reactive state, bindings and environment values, plus storage for small persisted values.",
      tags: ["@State", "@Binding", "@Environment", "@AppStorage"],
    },
    {
      icon: CursorArrow,
      title: "Gestures and focus",
      description:
        "Tap and hover gestures, keyboard focus, text selection and tooltips.",
      tags: ["onTapGesture", "onHover", "focusable", "help"],
    },
    {
      icon: LightningBolt,
      title: "Hot reloading",
      description:
        "Reload your app as you edit when paired with Swift Bundler. Codable state can persist across reloads.",
      tags: ["@HotReloadable", "sbun run --hot"],
    },
  ];

  const examples = [
    {
      name: "MusicPlayerExample",
      description:
        "Playlists, audio playback, persistence, split views and sheets.",
    },
    {
      name: "PathsExample",
      description: "Custom shapes and paths drawn with SwiftCrossUI.",
    },
    {
      name: "NotesExample",
      description: "List/detail navigation and multi-line text editing.",
    },
    {
      name: "SpreadsheetExample",
      description: "Native tables, typed columns and cell selection.",
    },
    {
      name: "NavigationExample",
      description:
        "Stack navigation with typed destinations and a navigation path.",
    },
    {
      name: "SplitExample",
      description: "Two- and three-column split-view layouts.",
    },
    {
      name: "WindowingExample",
      description: "Multiple windows, alerts, sheets and file dialogs.",
    },
    {
      name: "GradientsExample",
      description: "The supported gradient types.",
    },
  ];

  const codeSamples = {
    counter: {
      file: "CounterApp.swift",
      source: String.raw`import SwiftCrossUI
import DefaultBackend

@main
struct CounterApp: App {
    @State var count = 0

    var body: some Scene {
        WindowGroup("Counter") {
            VStack(spacing: 16) {
                Text("Count: \(count)")
                    .font(.title)

                HStack(spacing: 12) {
                    Button("-") { count -= 1 }
                    Button("+") { count += 1 }
                }
            }
            .padding(32)
        }
    }
}`,
    },
    navigation: {
      file: "LibraryApp.swift",
      source: String.raw`import SwiftCrossUI
import DefaultBackend

@main
struct LibraryApp: App {
    @State var path = NavigationPath()

    var body: some Scene {
        WindowGroup("Library") {
            NavigationStack(path: $path) {
                NavigationLink("Physics", value: Topic.physics, path: $path)
                NavigationLink("Chemistry", value: Topic.chemistry, path: $path)
            }
            .navigationDestination(for: Topic.self) { topic in
                TopicDetail(topic: topic)
            }
        }
    }
}`,
    },
    state: {
      file: "ProfileView.swift",
      source: String.raw`import SwiftCrossUI

struct ProfileView: View {
    @State var name = ""
    @AppStorage("hasSeenWelcome") var hasSeenWelcome = false

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            TextField("Your name", text: $name)

            Text("Hello, \(name)!")
                .font(.title2)

            Toggle("Show welcome", isOn: $hasSeenWelcome)
        }
        .padding()
    }
}`,
    },
  };

  type CodeTab = keyof typeof codeSamples;
  let codeTab: CodeTab = "counter";
  const codeTabIds = Object.keys(codeSamples) as CodeTab[];

  const swiftKeywords = new Set([
    "import",
    "struct",
    "var",
    "let",
    "body",
    "some",
    "Scene",
    "App",
    "View",
    "true",
    "false",
    "return",
    "if",
    "else",
    "for",
    "in",
    "switch",
    "case",
    "func",
    "init",
    "self",
    "nil",
    "private",
    "public",
    "final",
  ]);

  function escapeHtml(value: string) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function highlightSwift(source: string) {
    const pattern =
      /(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|(@[A-Za-z_][A-Za-z0-9_]*)|\b([A-Z][A-Za-z0-9_]*)\b|\b([a-z_][A-Za-z0-9_]*)\b|(\b\d+(?:\.\d+)?\b)/g;

    let result = "";
    let lastIndex = 0;

    for (const match of source.matchAll(pattern)) {
      const index = match.index ?? 0;
      result += escapeHtml(source.slice(lastIndex, index));

      const [token, comment, string, attribute, type, identifier, number] =
        match;
      if (comment) {
        result += `<span class="tok-comment">${escapeHtml(token)}</span>`;
      } else if (string) {
        result += `<span class="tok-string">${escapeHtml(token)}</span>`;
      } else if (attribute) {
        result += `<span class="tok-attribute">${escapeHtml(token)}</span>`;
      } else if (type) {
        result += `<span class="tok-type">${escapeHtml(token)}</span>`;
      } else if (identifier) {
        const keyword = swiftKeywords.has(identifier);
        result += `<span class="${keyword ? "tok-keyword" : "tok-identifier"}">${escapeHtml(token)}</span>`;
      } else if (number) {
        result += `<span class="tok-number">${escapeHtml(token)}</span>`;
      } else {
        result += escapeHtml(token);
      }

      lastIndex = index + token.length;
    }

    result += escapeHtml(source.slice(lastIndex));
    return result;
  }
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

<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">
    <Brand />

    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#platforms">Platforms</a>
      <a href="#examples">Examples</a>
      <a href={`${docs}/documentation/swiftcrossui/`}>Docs</a>
      <a href={github}>GitHub</a>
      <a href={discord}>Discord</a>
      <a
        href={sponsor}
        class="nav-sponsor"
        aria-label="Sponsor SwiftCrossUI"
        title="Sponsor SwiftCrossUI"
      >
        <Heart size="17" ariaLabel="" />
      </a>
      <Button
        on:click={toggleMode}
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
      >
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </nav>
</header>

<main>
  <section class="hero">
    <div class="hero-glow" aria-hidden="true"></div>

    <div class="hero-inner">
      <h1 class="hero-title">
        Native apps in Swift.<br />
        <span class="gradient-text">On six platforms.</span>
      </h1>

      <div class="hero-actions">
        <ButtonLink
          href={`${docs}/tutorials/swiftcrossui/quick-start`}
          size="lg"
        >
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

        <span class="showcase-device">
          <PlatformIcon name="ios" size={14} />
          iPhone 16 · iOS
        </span>
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

  <section id="features" class="section">
    <div class="section-heading">
      <p class="eyebrow">Declarative UI</p>
      <h2 class="section-title">Feels like SwiftUI.<br />Runs where SwiftUI can't.</h2>
      <p>
        Apps are built from <code>App</code>, <code>Scene</code> and
        <code>View</code>, with view builders and modifiers that work the way
        you expect.
      </p>
    </div>

    <div class="code-feature">
      <div class="code-window">
        <div class="code-titlebar">
          <div class="window-dots" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="code-tabs" role="tablist" aria-label="Code examples">
            <button
              class:active={codeTab === "counter"}
              role="tab"
              aria-selected={codeTab === "counter"}
              on:click={() => (codeTab = "counter")}
            >
              Counter
            </button>
            <button
              class:active={codeTab === "navigation"}
              role="tab"
              aria-selected={codeTab === "navigation"}
              on:click={() => (codeTab = "navigation")}
            >
              Navigation
            </button>
            <button
              class:active={codeTab === "state"}
              role="tab"
              aria-selected={codeTab === "state"}
              on:click={() => (codeTab = "state")}
            >
              State
            </button>
          </div>
          <span class="code-file">{codeSamples[codeTab].file}</span>
        </div>

        <div class="code-stack">
          {#each codeTabIds as tab}
            <pre
              class="code-body"
              class:active={codeTab === tab}
              aria-hidden={codeTab !== tab}><code
                >{@html highlightSwift(codeSamples[tab].source)}</code
              ></pre>
          {/each}
        </div>

        <div class="code-footer">
          <span>Swift 5.10+ · DefaultBackend</span>
          <a href={`${docs}/tutorials/swiftcrossui/quick-start`}>
            Read the quick start
            <ArrowRight size="14" ariaLabel="" />
          </a>
        </div>
      </div>

      <ul class="code-points">
        <CheckItem as="li" title="The same structure">
          <code>App</code>, <code>Scene</code>, <code>View</code> and
          <code>ViewBuilder</code> work the way they do in SwiftUI.
        </CheckItem>
        <CheckItem as="li" title="State and bindings">
          <code>@State</code>, <code>@Binding</code>, <code>@Environment</code>
          and <code>@AppStorage</code> update views automatically.
        </CheckItem>
        <CheckItem as="li" title="Platform features">
          Sheets, alerts, menus, file pickers, URL handling and multi-window
          scenes are built in.
        </CheckItem>
        <CheckItem as="li" title="Native views when you need them">
          Use the underlying native views, or add a platform feature your app
          needs.
        </CheckItem>
      </ul>
    </div>
  </section>

  <section id="platforms" class="section section-muted">
    <div class="section-heading">
      <p class="eyebrow">Platforms</p>
      <h2 class="section-title">Six platforms.</h2>
      <p>
        Each platform has its own backend, so controls and behaviour match the
        platform.
      </p>
    </div>

    <div class="platform-grid">
      {#each platformCards as platform}
        <a class="platform-card" href={platform.href}>
          <div class="platform-card-top">
            <span class="platform-icon">
              <PlatformIcon name={platform.icon} size={22} />
            </span>
            <h3>{platform.name}</h3>
          </div>
          <p>{platform.description}</p>
          <span class="backend-badge">{platform.backend}</span>
        </a>
      {/each}
    </div>
  </section>

  <section class="section mobile-band">
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
        <p class="mobile-lead">
          The same views and state work across desktop and mobile, with extra
          APIs for touch.
        </p>

        <ul class="feature-list">
          <CheckItem as="li" title="Adaptive navigation.">
            <code>NavigationSplitView</code> becomes a single-column layout on
            phones, while <code>NavigationStack</code> keeps native back behaviour.
          </CheckItem>
          <CheckItem as="li" title="Sheets and alerts.">
            Sheets support detents, and alerts support action buttons.
          </CheckItem>
          <CheckItem as="li" title="Device-aware layout.">
            Read the device class and orientation, and dismiss the keyboard while
            scrolling.
          </CheckItem>
          <CheckItem as="li" title="Simulator and device workflow.">
            Run on an iPhone or Android emulator from the same project with Swift
            Bundler.
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
  </section>

  <section class="section section-muted">
    <div class="section-heading">
      <p class="eyebrow">What's included</p>
      <h2 class="section-title">The building blocks.</h2>
    </div>

    <div class="feature-grid">
      {#each featureCards as feature}
        <article class="feature-card">
          <span class="feature-icon">
            <svelte:component this={feature.icon} size="21" ariaLabel="" />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <div class="tags">
            {#each feature.tags as tag}
              <code>{tag}</code>
            {/each}
          </div>
        </article>
      {/each}
    </div>

    <div class="section-note">
      <p class="platform-note">
        <strong>Platform notes:</strong> tables are currently macOS-only,
        WebView is available on Apple platforms, and hot reloading works on
        macOS and Linux. Core views, controls and layouts work on every backend.
        <a href={`${docs}/documentation/swiftcrossui/built-in-backends`}
          >Read the backend docs →</a
        >
      </p>
    </div>
  </section>

  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Backends</p>
      <h2 class="section-title">Native by default.</h2>
      <p>
        Each platform has a backend that connects SwiftCrossUI to its native UI
        toolkit. Use a built-in backend, or write your own.
      </p>
    </div>

    <div class="backend-grid">
      <article class="info-card">
        <h3>Pick a backend</h3>
        <p>
          Use <code>AppKitBackend</code>, <code>UIKitBackend</code>,
          <code>AndroidBackend</code>, <code>WinUIBackend</code>,
          <code>GtkBackend</code> or <code>Gtk3Backend</code> directly.
        </p>
      </article>
      <article class="info-card">
        <h3>Write your own</h3>
        <p>
          Backends implement the features they support. If you need a missing
          feature, you can add it in your app code.
        </p>
      </article>
    </div>
  </section>

  <section id="examples" class="section section-muted">
    <div class="section-heading">
      <p class="eyebrow">Examples</p>
      <h2 class="section-title">See it in action</h2>
      <p>
        The SwiftCrossUI repository contains over 20 example apps, from a simple
        counter to a music player.
      </p>
    </div>

    <div class="screenshot-grid">
      {#each desktopBackends as backend}
        <figure class="screenshot-card">
          <img
            src={`/images/music-player/${backend.id}-utah.webp`}
            alt={`MusicPlayerExample on ${backend.platform}`}
            width="1920"
            height="1248"
            loading="lazy"
          />
          <figcaption>
            <span>{backend.platform}</span>
            <code>{backend.backend}</code>
          </figcaption>
        </figure>
      {/each}
    </div>

    <div class="example-grid">
      {#each examples as example}
        <a
          class="example-card"
          href={`${github}/tree/main/Examples/Sources/${example.name}`}
        >
          <div class="example-card-head">
            <strong>{example.name}</strong>
            <ArrowRight size="14" ariaLabel="" />
          </div>
          <span>{example.description}</span>
        </a>
      {/each}
    </div>

    <div class="section-actions">
      <ButtonLink
        href={`${docs}/documentation/swiftcrossui/examples`}
        variant="outline"
      >
        Browse all examples
        <ArrowRight size="16" ariaLabel="" />
      </ButtonLink>
      <a href={`${github}/tree/main/Examples/Sources`} class="text-link">
        View the source on GitHub
      </a>
    </div>
  </section>

  <section id="quickstart" class="section quickstart">
    <div class="quickstart-grid">
      <div class="quickstart-copy">
        <p class="eyebrow">Quick start</p>
        <h2 class="section-title">Run your first app.</h2>
        <p class="quickstart-lead">
          Swift Bundler provides the <code>sbun</code> CLI, which creates the project,
          builds the app bundle and handles device deployment. The SwiftCrossUI template
          gives you a working window in minutes, without creating an Xcode project.
        </p>
        <ButtonLink
          href={`${docs}/tutorials/swiftcrossui/quick-start`}
          size="lg"
        >
          Read the full guide
          <ArrowRight size="18" ariaLabel="" />
        </ButtonLink>
        <p class="quickstart-alt">
          Prefer plain SwiftPM? Add the package and import
          <code>SwiftCrossUI</code> and <code>DefaultBackend</code>.
        </p>
      </div>

      <ol class="steps">
        <li class="step">
          <span class="step-number">1</span>
          <div>
            <h3>Install Swift Bundler</h3>
            <CommandBlock
              lines={["mint install moreSwift/swift-bundler@main"]}
            />
          </div>
        </li>
        <li class="step">
          <span class="step-number">2</span>
          <div>
            <h3>Create a project</h3>
            <CommandBlock
              lines={[
                "sbun templates update",
                "sbun create HelloWorld \\",
                "  --template SwiftCrossUI",
              ]}
            />
          </div>
        </li>
        <li class="step">
          <span class="step-number">3</span>
          <div>
            <h3>Run it</h3>
            <CommandBlock
              lines={["cd HelloWorld", "sbun run", 'sbun run --simulator "iPhone 16"']}
            />
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section class="support-section">
    <div class="support-band">
      <div class="support-copy">
        <p class="eyebrow">Support the project</p>
        <h2>Help keep SwiftCrossUI moving.</h2>
        <p>
          SwiftCrossUI is maintained by the moreSwift community. Sponsorships
          fund development time, CI and support for new platforms.
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
</main>

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
      Swift and SwiftUI are trademarks of Apple Inc. SwiftCrossUI is not
      affiliated with Apple.
    </span>
  </div>
</footer>
