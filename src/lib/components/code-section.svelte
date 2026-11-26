<script lang="ts">
  import CheckItem from "$lib/components/check-item.svelte";
  import PageSection from "$lib/components/page-section.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { docs } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";

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

<PageSection id="features">
  <SectionHeading eyebrow="Declarative UI">
    <svelte:fragment slot="title">Familiar API.</svelte:fragment>
    <svelte:fragment slot="lead">
      SwiftCrossUI's API is familiar to you and your agents, making it easy to
      adopt.
    </svelte:fragment>
  </SectionHeading>

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
        <span>Swift 5.10+</span>
        <a href={`${docs}/documentation/swiftcrossui/`}>
          Explore the API
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
      <CheckItem as="li" title="Platform integration">
        Sheets, alerts, menus, file pickers, URL handling and multi-window
        scenes are built in.
      </CheckItem>
      <CheckItem as="li" title="Use native views when you need them">
        Make your own native view wrappers, or inspect the native views backing
        built-in views.
      </CheckItem>
    </ul>
  </div>
</PageSection>
