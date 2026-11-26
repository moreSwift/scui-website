<script lang="ts">
  import PageSection from "$lib/components/page-section.svelte";
  import SectionHeading from "$lib/components/section-heading.svelte";
  import { docs } from "$lib/site";
  import ArrowRight from "svelte-radix/ArrowRight.svelte";

  const counterSource = String.raw`import SwiftCrossUI
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
}`;

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
  <SectionHeading eyebrow="SwiftUI-style">
    <svelte:fragment slot="title"
      >If you know SwiftUI,<br />you know SwiftCrossUI.</svelte:fragment
    >
    <svelte:fragment slot="lead">
      <p>
        Same <code>App</code>, <code>Scene</code> and <code>View</code>
        structure. Same state, layout and presentation patterns. SwiftCrossUI
        isn't a drop-in replacement, but there's very little new to learn.
      </p>
    </svelte:fragment>
  </SectionHeading>

  <div class="code-feature">
    <div class="code-window">
      <div class="code-titlebar">
        <div class="window-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span class="code-file">CounterApp.swift</span>
      </div>

      <pre class="code-body active"><code>{@html highlightSwift(counterSource)}</code></pre>

      <div class="code-footer">
        <span>Swift 5.10+</span>
        <a href={`${docs}/documentation/swiftcrossui/`}>
          Explore the API
          <ArrowRight size="14" ariaLabel="" />
        </a>
      </div>
    </div>

    <div class="code-notes">
      <ol class="code-annotations">
        <li class="code-annotation">
          <span class="annotation-number">1</span>
          <div>
            <h3>Same structure</h3>
            <p>
              <code>App</code>, <code>Scene</code>, <code>View</code> and
              <code>ViewBuilder</code> follow the same structure you already
              use.
            </p>
          </div>
        </li>
        <li class="code-annotation">
          <span class="annotation-number">2</span>
          <div>
            <h3>Same state model</h3>
            <p>
              <code>@State</code>, <code>@Binding</code>,
              <code>@Environment</code> and <code>@AppStorage</code> work the
              way you expect.
            </p>
          </div>
        </li>
        <li class="code-annotation">
          <span class="annotation-number">3</span>
          <div>
            <h3>Same layout and presentation</h3>
            <p>
              <code>VStack</code>, <code>HStack</code>, modifiers,
              <code>NavigationStack</code> and sheets are all familiar.
            </p>
          </div>
        </li>
      </ol>

      <p class="code-caveat">
        Not every SwiftUI API carries over, but the core patterns do.
      </p>
    </div>
  </div>
</PageSection>
