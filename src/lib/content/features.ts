import CardStack from "svelte-radix/CardStack.svelte";
import Frame from "svelte-radix/Frame.svelte";
import Hand from "svelte-radix/Hand.svelte";
import Layers from "svelte-radix/Layers.svelte";
import LightningBolt from "svelte-radix/LightningBolt.svelte";
import Slider from "svelte-radix/Slider.svelte";

export const featureCards = [
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
    icon: Hand,
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
