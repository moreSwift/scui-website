import { docs } from "$lib/site";

export const platforms = [
  { name: "macOS", icon: "macos" as const },
  { name: "Linux", icon: "linux" as const },
  { name: "Windows", icon: "windows" as const },
  { name: "iOS", icon: "ios" as const },
  { name: "Android", icon: "android" as const },
  { name: "tvOS", icon: "tvos" as const },
];

export const platformCards = [
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
