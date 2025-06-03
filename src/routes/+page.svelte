<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";

    // Mode toggle
    import Sun from "svelte-radix/Sun.svelte";
    import Moon from "svelte-radix/Moon.svelte";
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";

    const backends = ["appkitbackend", "gtkbackend", "winuibackend"]
    let selectedBackend: "appkitbackend" | "gtkbackend" | "winuibackend" = "appkitbackend";

    function platform(backend: string) {
        if (backend == "appkitbackend") {
            return "macOS";
        } else if (backend == "gtkbackend") {
            return "Linux";
        } else if (backend == "winuibackend") {
            return "Windows";
        }
    }
</script>

<svelte:head>
    <title>SwiftCrossUI</title>
</svelte:head>

<nav class="row">
    <section>
        <a href="/" id="home-tab">SwiftCrossUI</a>
    </section>
    <section>
        <a href="http://stackotter.github.io/swift-cross-ui/documentation/swiftcrossui/">Docs</a>
        <a href="https://github.com/stackotter/swift-cross-ui">GitHub</a>
        <a href="https://discord.gg/fw2trT48ny">Community</a>
        
        <Button on:click={toggleMode} variant="outline" size="icon">
            <Sun
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </section>
</nav>

<section id="main">
    <h1 class="headline">SwiftCrossUI</h1>
    <div class="subheadline">Native UI without the fuss.</div>

    <div class="container">
        <div class="zstack" id="hero-image">
            {#each backends as backend}
                <img src={`images/music-player/${backend}-utah.webp`} alt={`A music player made with SwiftCrossUI running on ${platform(backend)}`} class={`desktop-preview default-hidden ${backend == selectedBackend ? "shown" : ""}`}/>
            {/each}
        </div>

        <div class="row" id="floating-controls">
            <Tabs.Root bind:value={selectedBackend} class="w-[350px]">
              <Tabs.List class="grid m-auto grid-cols-3 tabs">
                <Tabs.Trigger value="appkitbackend">macOS</Tabs.Trigger>
                <Tabs.Trigger value="gtkbackend">Linux</Tabs.Trigger>
                <Tabs.Trigger value="winuibackend">Windows</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
        </div>
    </div>
</section>
