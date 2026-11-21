import CardStack from "svelte-radix/CardStack.svelte";
import Frame from "svelte-radix/Frame.svelte";
import Hand from "svelte-radix/Hand.svelte";
import Layers from "svelte-radix/Layers.svelte";
import LightningBolt from "svelte-radix/LightningBolt.svelte";
import Slider from "svelte-radix/Slider.svelte";

export const featureCards = [
  {
    icon: Slider,
    color: "var(--icon-blue)",
    title: "Native controls",
    description:
      "The standard controls your app needs, rendered using the platform's own widgets.",
    tags: ["Button", "TextField", "Slider", "Toggle", "Picker", "List"],
  },
  {
    icon: LightningBolt,
    color: "var(--icon-amber)",
    title: "Hot reloading",
    description:
      "Reload your app as you edit when paired with Swift Bundler. Codable state persists across reloads. Available on macOS and Linux.",
    tags: ["@HotReloadable", "sbun run --hot"],
  },
  {
    icon: Frame,
    color: "var(--icon-green)",
    title: "Adaptive layout",
    description:
      "Screens composed from built-in views and modifiers adapt to look great everywhere.",
    tags: ["HStack", "VStack", "ZStack", "ScrollView", "GeometryReader"],
  },
  {
    icon: CardStack,
    color: "var(--icon-violet)",
    title: "Navigation",
    description: "Stack navigation and split-view layouts.",
    tags: ["NavigationStack", "NavigationSplitView", "NavigationPath"],
  },
  {
    icon: Layers,
    color: "var(--icon-pink)",
    title: "State and persistence",
    description:
      "Reactive state, bindings, environment values, and persistent storage for Codable values.",
    tags: ["@State", "@Binding", "@Environment", "@AppStorage"],
  },
  {
    icon: Hand,
    color: "var(--icon-cyan)",
    title: "Gestures and focus",
    description:
      "Tap and hover gestures, keyboard focus, text selection and tooltips.",
    tags: ["onTapGesture", "onHover", "focusable", "help"],
  },
];
