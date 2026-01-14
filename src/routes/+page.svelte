<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";

    // Mode toggle
    import Sun from "svelte-radix/Sun.svelte";
    import Moon from "svelte-radix/Moon.svelte";
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import { buttonVariants } from "$lib/components/ui/button";

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
        <a href="https://moreswift.github.io/swift-cross-ui/documentation/swiftcrossui/">Docs</a>
        <a href="https://github.com/moreSwift/swift-cross-ui">GitHub</a>
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

    <div style="display: flex; flex-direction: row; flex-wrap: wrap; margin: auto; width: 100%; align-items: center; justify-content: center; row-gap: 0.5rem;">
        <a href="https://moreswift.github.io/swift-cross-ui/documentation/swiftcrossui/quick-start" class={"w-32 mr-2 " + buttonVariants({ size: "sm" })}>Get started</a>
        <a href="https://github.com/sponsors/stackotter?o=esb" class={"w-32 mr-2 " + buttonVariants({ size: "sm", variant: "outlineProminent" })}>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="mr-1 octicon octicon-heart text-pink-500">
                <path fill="rgb(255, 80, 150)" d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
            </svg>
            Sponsor
        </a>
    </div>

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
