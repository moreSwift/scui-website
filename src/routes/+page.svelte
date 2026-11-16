<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { toggleMode } from "mode-watcher";

  import Sun from "svelte-radix/Sun.svelte";
  import Moon from "svelte-radix/Moon.svelte";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";
  import GithubLogo from "svelte-radix/GithubLogo.svelte";
  import DiscordLogo from "svelte-radix/DiscordLogo.svelte";
  import Heart from "svelte-radix/Heart.svelte";
  import Check from "svelte-radix/Check.svelte";
  import Slider from "svelte-radix/Slider.svelte";
  import Frame from "svelte-radix/Frame.svelte";
  import CardStack from "svelte-radix/CardStack.svelte";
  import Layers from "svelte-radix/Layers.svelte";
  import OpenInNewWindow from "svelte-radix/OpenInNewWindow.svelte";
  import Component1 from "svelte-radix/Component1.svelte";
  import CursorArrow from "svelte-radix/CursorArrow.svelte";
  import LightningBolt from "svelte-radix/LightningBolt.svelte";
  import Table from "svelte-radix/Table.svelte";
  import Globe from "svelte-radix/Globe.svelte";
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

  const stats = [
    { value: "6", label: "platforms" },
    { value: "5", label: "native toolkits" },
    { value: "40+", label: "views & modifiers" },
    { value: "20+", label: "runnable examples" },
    { value: "MIT", label: "open source" },
  ];

  const platformCards = [
    {
      name: "macOS",
      icon: "macos" as const,
      backend: "AppKitBackend",
      accent: "blue",
      description:
        "Native windows, menus and controls, with the most complete backend in the project.",
      points: [
        "Multi-window apps",
        "Native menus & file dialogs",
        "Full feature coverage",
      ],
      href: `${docs}/documentation/swiftcrossui/appkitbackend`,
    },
    {
      name: "iOS",
      icon: "ios" as const,
      backend: "UIKitBackend",
      accent: "violet",
      description:
        "Touch-first layouts, native navigation and sheets that feel at home on iPhone.",
      points: [
        "Adaptive split views",
        "Sheets with detents",
        "Keyboard-aware scrolling",
      ],
      href: `${docs}/documentation/swiftcrossui/uikitbackend`,
    },
    {
      name: "Android",
      icon: "android" as const,
      backend: "AndroidBackend",
      accent: "green",
      description:
        "Native Android views and touch input, from the same Swift codebase as every other platform.",
      points: [
        "Native widgets",
        "Tap & hover gestures",
        "Devices and emulators",
      ],
      href: `${docs}/documentation/swiftcrossui/androidbackend`,
    },
    {
      name: "Windows",
      icon: "windows" as const,
      backend: "WinUIBackend",
      accent: "sky",
      description:
        "WinUI 3 controls and Windows app packaging, driven by the same cross-platform views.",
      points: [
        "Native WinUI 3 controls",
        "Windows app bundles",
        "Most features supported",
      ],
      href: `${docs}/documentation/swiftcrossui/winuibackend`,
    },
    {
      name: "Linux",
      icon: "linux" as const,
      backend: "GtkBackend",
      accent: "amber",
      description:
        "GTK 4 widgets for modern Linux desktops, plus a GTK 3 backend for older distributions.",
      points: [
        "GTK 4 and GTK 3",
        "Native Linux look",
        "Works on macOS & Windows too",
      ],
      href: `${docs}/documentation/swiftcrossui/gtkbackend`,
    },
    {
      name: "tvOS",
      icon: "tvos" as const,
      backend: "UIKitBackend",
      accent: "pink",
      description:
        "Take the same app to the biggest screen with the shared UIKit backend.",
      points: [
        "Shared UIKit code",
        "Focus-friendly controls",
        "Native tvOS presentation",
      ],
      href: `${docs}/documentation/swiftcrossui/uikitbackend`,
    },
  ];

  const featureCards = [
    {
      icon: Slider,
      accent: "blue",
      title: "Native controls",
      description:
        "Buttons, text fields, secure fields, text editors, sliders, toggles, pickers, date pickers, menus and lists — all backed by the platform's own widgets.",
      tags: ["Button", "TextField", "Slider", "Toggle", "Picker", "List"],
    },
    {
      icon: Frame,
      accent: "violet",
      title: "Adaptive layout",
      description:
        "Compose screens with HStack, VStack and ZStack. Constrain them with frames and padding, then let ScrollView and GeometryReader handle the rest.",
      tags: ["HStack", "VStack", "ZStack", "ScrollView", "GeometryReader"],
    },
    {
      icon: CardStack,
      accent: "sky",
      title: "Real navigation",
      description:
        "Stack-based navigation and full split-view hierarchies, with typed destinations that collapse naturally on smaller screens.",
      tags: ["NavigationStack", "NavigationSplitView", "NavigationPath"],
    },
    {
      icon: Layers,
      accent: "green",
      title: "State that flows",
      description:
        "Reactive state, mutable bindings, environment values, observable objects, and AppStorage for the small things that need to survive a relaunch.",
      tags: ["@State", "@Binding", "@Environment", "@AppStorage"],
    },
    {
      icon: OpenInNewWindow,
      accent: "amber",
      title: "Windows & modals",
      description:
        "Build multi-window apps with WindowGroup and Window, then present native alerts, sheets with detents, and file open and save dialogs.",
      tags: ["WindowGroup", "sheet", "alert", "file dialogs"],
    },
    {
      icon: Component1,
      accent: "pink",
      title: "Styling & graphics",
      description:
        "Fonts, colours, light and dark mode, corner radii, linear, radial and angular gradients, shapes, and custom Path drawing.",
      tags: ["Color", "Gradient", "Shape", "Path", "Font"],
    },
    {
      icon: CursorArrow,
      accent: "teal",
      title: "Gestures & focus",
      description:
        "Tap and hover gestures, keyboard focus and focus effects, text selection, tooltips, and disabled states.",
      tags: ["onTapGesture", "onHover", "focusable", "help"],
    },
    {
      icon: Table,
      accent: "indigo",
      title: "Data-heavy UI",
      description:
        "Selectable lists, typed table columns, ForEach, and row content that scales from a short menu to a full spreadsheet.",
      tags: ["List", "Table", "TableColumn", "ForEach"],
    },
    {
      icon: LightningBolt,
      accent: "orange",
      title: "Hot reloading",
      description:
        "Pair SwiftCrossUI with Swift Bundler and iterate without restarting on macOS and Linux. Codable state can survive a reload.",
      tags: ["@HotReloadable", "swift-bundler run --hot"],
    },
    {
      icon: Globe,
      accent: "lime",
      title: "Native escape hatches",
      description:
        "Open URLs, receive deep links, reveal files, show web content on Apple platforms, and inspect the underlying native views when you need to go deeper.",
      tags: ["WebView", "openURL", "revealFile", "Inspect"],
    },
  ];

  const examples = [
    {
      name: "MusicPlayerExample",
      description:
        "Playlists, audio playback, persistence, split views and sheets.",
    },
    {
      name: "InstagramExample",
      description:
        "A scrolling feed with images, gradients, stories and a tab bar.",
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
      description: "Every supported gradient, rendered live.",
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
  <title>SwiftCrossUI — Native apps in Swift, everywhere</title>
  <meta
    name="description"
    content="A SwiftUI-style framework for building native apps in Swift on macOS, Linux, Windows, iOS, Android and tvOS. Write your UI once, run it natively everywhere."
  />
  <meta
    property="og:title"
    content="SwiftCrossUI — Native apps in Swift, everywhere"
  />
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
    <a href="/" class="brand" aria-label="SwiftCrossUI home">
      <img src="/images/brand/icon.png" alt="" class="brand-mark" />
      <span>SwiftCrossUI</span>
    </a>

    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#platforms">Platforms</a>
      <a href="#examples">Examples</a>
      <a href={`${docs}/documentation/swiftcrossui/`}>Docs</a>
      <a href={github}>GitHub</a>
      <a href={discord}>Discord</a>
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
      <a class="eyebrow" href={github}>
        <span class="eyebrow-dot"></span>
        Open source · MIT licensed · Built in Swift
        <ArrowRight size="14" ariaLabel="" />
      </a>

      <h1 class="hero-title">
        Native apps in Swift.<br />
        <span class="gradient-text">Everywhere.</span>
      </h1>

      <p class="hero-lead">
        SwiftCrossUI is a SwiftUI-style framework for building native apps on
        macOS, Linux, Windows, iOS, Android and tvOS — from a single Swift
        codebase, with real native controls and no web views.
      </p>

      <div class="hero-actions">
        <a
          href={`${docs}/tutorials/swiftcrossui/quick-start`}
          class={`btn btn-primary ${buttonVariants({ size: "lg" })}`}
        >
          Get started
          <ArrowRight size="18" ariaLabel="" />
        </a>
        <a
          href={github}
          class={`btn btn-outline ${buttonVariants({ size: "lg", variant: "outline" })}`}
        >
          <GithubLogo size="18" ariaLabel="" />
          View on GitHub
        </a>
        <a href={sponsor} class="sponsor-link">
          <Heart size="16" ariaLabel="" />
          Sponsor
        </a>
      </div>

      <div class="hero-platforms">
        <span class="hero-platforms-label">Native on</span>
        {#each platforms as platform}
          <span class="platform-chip">
            <PlatformIcon name={platform.icon} size={15} />
            {platform.name}
          </span>
        {/each}
      </div>
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
        The same MusicPlayerExample on {selectedPlatform} and iPhone — one codebase,
        native everywhere.
      </p>
    </div>
  </section>

  <section class="stats-band" aria-label="SwiftCrossUI at a glance">
    {#each stats as stat}
      <div class="stat">
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
    {/each}
  </section>

  <section id="features" class="section">
    <div class="section-heading">
      <p class="eyebrow">A familiar API</p>
      <h2>Feels like SwiftUI.<br />Runs where SwiftUI can't.</h2>
      <p>
        If you know SwiftUI, you already know most of SwiftCrossUI. Apps are
        built from the same <code>App</code>, <code>Scene</code> and
        <code>View</code> concepts, with the same declarative view builder and a
        familiar set of modifiers.
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

        <pre class="code-body"><code
            >{@html highlightSwift(codeSamples[codeTab].source)}</code
          ></pre>

        <div class="code-footer">
          <span>Swift 5.10+ · DefaultBackend</span>
          <a href={`${docs}/tutorials/swiftcrossui/quick-start`}>
            Read the quick start
            <ArrowRight size="14" ariaLabel="" />
          </a>
        </div>
      </div>

      <div class="code-points">
        <div class="point">
          <span class="point-icon accent-blue"
            ><Check size="16" ariaLabel="" /></span
          >
          <div>
            <h3>The same shapes</h3>
            <p>
              <code>App</code>, <code>Scene</code>, <code>View</code> and
              <code>ViewBuilder</code> map directly to the concepts you already use.
            </p>
          </div>
        </div>
        <div class="point">
          <span class="point-icon accent-violet"
            ><Check size="16" ariaLabel="" /></span
          >
          <div>
            <h3>State that just works</h3>
            <p>
              <code>@State</code>, <code>@Binding</code>,
              <code>@Environment</code>
              and
              <code>@AppStorage</code> drive updates without manual observers.
            </p>
          </div>
        </div>
        <div class="point">
          <span class="point-icon accent-green"
            ><Check size="16" ariaLabel="" /></span
          >
          <div>
            <h3>Real platform features</h3>
            <p>
              Sheets, alerts, menus, file pickers, URL handling and multi-window
              scenes are part of the framework, not an afterthought.
            </p>
          </div>
        </div>
        <div class="point">
          <span class="point-icon accent-amber"
            ><Check size="16" ariaLabel="" /></span
          >
          <div>
            <h3>An escape hatch when you need it</h3>
            <p>
              Drop down to the underlying native views, or extend a backend with
              the exact platform feature your app needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="platforms" class="section section-muted">
    <div class="section-heading">
      <p class="eyebrow">Native on every platform</p>
      <h2>One framework.<br />Six places to run.</h2>
      <p>
        SwiftCrossUI doesn't ship a bundled browser. Each backend talks directly
        to the platform's UI toolkit, so your app gets native controls, native
        text rendering and native behaviour wherever it runs.
      </p>
    </div>

    <div class="platform-grid">
      {#each platformCards as platform}
        <a class="platform-card" href={platform.href}>
          <div class="platform-card-top">
            <span class={`platform-icon accent-${platform.accent}`}>
              <PlatformIcon name={platform.icon} size={22} />
            </span>
            <span class="backend-badge">{platform.backend}</span>
          </div>
          <h3>{platform.name}</h3>
          <p>{platform.description}</p>
          <ul class="check-list">
            {#each platform.points as point}
              <li><Check size="13" ariaLabel="" /> {point}</li>
            {/each}
          </ul>
        </a>
      {/each}
    </div>

    <div class="callout">
      <div class="callout-copy">
        <span class="callout-kicker">DefaultBackend</span>
        <h3>One import. The right backend.</h3>
        <p>
          Import <code>DefaultBackend</code> and SwiftCrossUI selects AppKit,
          UIKit, Android, WinUI 3 or GTK at compile time. Need to force a
          specific backend while testing? Set <code>SCUI_DEFAULT_BACKEND</code>.
        </p>
      </div>
      <pre class="callout-code"><code
          >SCUI_DEFAULT_BACKEND=GtkBackend \
  swift-bundler run</code
        ></pre>
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
        <p class="eyebrow">Mobile, for real</p>
        <h2>Built for touch, not just resized windows.</h2>
        <p class="mobile-lead">
          Mobile isn't a separate target bolted on later. iOS, tvOS and Android
          are backed by native frameworks, and SwiftCrossUI exposes the details
          that touch apps actually need.
        </p>

        <ul class="feature-list">
          <li>
            <Check size="16" ariaLabel="" />
            <div>
              <strong>Adaptive navigation.</strong>
              <code>NavigationSplitView</code> collapses into a phone-friendly
              flow, while <code>NavigationStack</code> keeps its native back behaviour.
            </div>
          </li>
          <li>
            <Check size="16" ariaLabel="" />
            <div>
              <strong>Native sheets and alerts.</strong>
              Present sheets with detents, drag indicators and corner radii, plus
              alerts and confirmation actions.
            </div>
          </li>
          <li>
            <Check size="16" ariaLabel="" />
            <div>
              <strong>Mobile-aware environment.</strong>
              Read <code>deviceClass</code>, <code>layoutOrientation</code> and
              <code>scrollDismissesKeyboardMode</code> to adapt to the device in
              front of you.
            </div>
          </li>
          <li>
            <Check size="16" ariaLabel="" />
            <div>
              <strong>Simulator and device workflow.</strong>
              Run on an iPhone or Android emulator straight from Swift Bundler with
              the same project you use on desktop.
            </div>
          </li>
        </ul>

        <div class="mobile-run">
          <code>swift-bundler run --simulator "iPhone 16"</code>
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
      <p class="eyebrow">What's in the box</p>
      <h2>Everything you need to ship.</h2>
      <p>
        From the first window to the final sheet, SwiftCrossUI covers the pieces
        real apps need — with APIs that stay close to the SwiftUI you already
        know.
      </p>
    </div>

    <div class="feature-grid">
      {#each featureCards as feature}
        <article class="feature-card">
          <span class={`feature-icon accent-${feature.accent}`}>
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
  </section>

  <section class="section backend-section">
    <div class="section-heading">
      <p class="eyebrow">Backends, your way</p>
      <h2>Native by default.<br />Flexible by design.</h2>
      <p>
        SwiftCrossUI is split into backends, and backends are split into small
        feature protocols. Use the defaults, pick a specific toolkit, or
        implement only the features your platform actually has.
      </p>
    </div>

    <div
      class="backend-diagram"
      role="img"
      aria-label="Your Swift app uses SwiftCrossUI, which talks to native backends"
    >
      <div class="backend-node">
        <span>Your app</span>
        <code>Swift</code>
      </div>
      <span class="backend-arrow" aria-hidden="true">→</span>
      <div class="backend-node backend-node-accent">
        <span>SwiftCrossUI</span>
        <code>Views · state · navigation</code>
      </div>
      <span class="backend-arrow" aria-hidden="true">→</span>
      <div class="backend-targets">
        <span>AppKit</span>
        <span>UIKit</span>
        <span>Android</span>
        <span>WinUI 3</span>
        <span>GTK</span>
      </div>
    </div>

    <div class="backend-grid">
      <article class="info-card">
        <h3>DefaultBackend</h3>
        <p>
          Zero configuration. SwiftCrossUI picks the native backend for your
          target, and you can still override it at compile time when you need to
          test another platform.
        </p>
      </article>
      <article class="info-card">
        <h3>Pick a backend</h3>
        <p>
          Use <code>AppKitBackend</code>, <code>UIKitBackend</code>,
          <code>AndroidBackend</code>, <code>WinUIBackend</code>,
          <code>GtkBackend</code> or <code>Gtk3Backend</code> directly for full control
          over dependencies.
        </p>
      </article>
      <article class="info-card">
        <h3>Write your own</h3>
        <p>
          Backends implement only the feature protocols they support. Missing
          optional features fall back gracefully — and you can even add a
          missing feature in your own app code.
        </p>
      </article>
    </div>

    <p class="platform-note">
      <strong>Platform notes:</strong> feature coverage varies slightly by
      backend. Tables are currently macOS-only, WebView is available on Apple
      platforms, and hot reloading is supported on macOS and Linux. Core views,
      controls and layouts work across every backend.
      <a href={`${docs}/documentation/swiftcrossui/built-in-backends`}
        >Read the backend docs →</a
      >
    </p>
  </section>

  <section id="examples" class="section section-muted">
    <div class="section-heading">
      <p class="eyebrow">See it in action</p>
      <h2>Real apps, not just screenshots.</h2>
      <p>
        The repository ships with more than 20 runnable examples. Start with the
        music player, then dig into navigation, tables, windows, gradients,
        gestures and more.
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
        <div class="example-card">
          <strong>{example.name}</strong>
          <span>{example.description}</span>
        </div>
      {/each}
    </div>

    <div class="section-actions">
      <a
        href={`${docs}/documentation/swiftcrossui/examples`}
        class={`btn btn-outline ${buttonVariants({ size: "default", variant: "outline" })}`}
      >
        Browse all examples
        <ArrowRight size="16" ariaLabel="" />
      </a>
      <a href={`${github}/tree/main/Examples/Sources`} class="text-link">
        View the source on GitHub
      </a>
    </div>
  </section>

  <section id="quickstart" class="section quickstart">
    <div class="quickstart-grid">
      <div class="quickstart-copy">
        <p class="eyebrow">Quick start</p>
        <h2>From zero to a running app.</h2>
        <p>
          Swift Bundler handles the project template, app bundles and device
          deployment. The SwiftCrossUI template gets you a working window in
          minutes — no Xcode project required.
        </p>
        <a
          href={`${docs}/tutorials/swiftcrossui/quick-start`}
          class={`btn btn-primary ${buttonVariants({ size: "lg" })}`}
        >
          Read the full guide
          <ArrowRight size="18" ariaLabel="" />
        </a>
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
            <pre><code>mint install moreSwift/swift-bundler@main</code></pre>
          </div>
        </li>
        <li class="step">
          <span class="step-number">2</span>
          <div>
            <h3>Create a project</h3>
            <pre><code
                >swift-bundler templates update
swift-bundler create HelloWorld \
  --template SwiftCrossUI</code
              ></pre>
          </div>
        </li>
        <li class="step">
          <span class="step-number">3</span>
          <div>
            <h3>Run it anywhere</h3>
            <pre><code
                >cd HelloWorld
swift-bundler run
swift-bundler run --simulator "iPhone 16"</code
              ></pre>
          </div>
        </li>
      </ol>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="brand" aria-label="SwiftCrossUI home">
        <img src="/images/brand/icon.png" alt="" class="brand-mark" />
        <span>SwiftCrossUI</span>
      </a>
      <p>Native UI without the fuss.</p>
      <p class="footer-note">
        MIT licensed. Built by the moreSwift community and contributors around
        the world.
      </p>
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
