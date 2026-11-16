<script lang="ts">
  export let lines: string[];
  export let className = "";

  type Token = { text: string; className?: string };

  function tokenize(lines: string[]): Token[] {
    const tokens: Token[] = [];

    lines.forEach((line, lineIndex) => {
      if (lineIndex > 0) tokens.push({ text: "\n" });

      const leading = line.match(/^\s*/)?.[0] ?? "";
      if (leading) tokens.push({ text: leading });

      let rest = line.slice(leading.length);

      if (!leading) {
        const command = rest.match(/^([A-Za-z0-9_-]+)(.*)$/);
        if (command) {
          tokens.push({ text: command[1], className: "cmd" });
          rest = command[2];
        }
      }

      const pattern = /("(?:\\.|[^"])*"|--[A-Za-z0-9-]+)/g;
      let lastIndex = 0;

      for (const match of rest.matchAll(pattern)) {
        const index = match.index ?? 0;
        if (index > lastIndex) {
          tokens.push({ text: rest.slice(lastIndex, index) });
        }

        const text = match[0];
        tokens.push({
          text,
          className: text.startsWith('"') ? "str" : "flag",
        });
        lastIndex = index + text.length;
      }

      if (lastIndex < rest.length) {
        tokens.push({ text: rest.slice(lastIndex) });
      }
    });

    return tokens;
  }
</script>

<pre class={`command-block ${className}`}><code>{#each tokenize(lines) as token}{#if token.className}<span class={token.className}>{token.text}</span>{:else}{token.text}{/if}{/each}</code></pre>
