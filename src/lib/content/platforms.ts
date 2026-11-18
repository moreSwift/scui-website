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
    description: "AppKit provides a native macOS experience.",
    href: `${docs}/documentation/swiftcrossui/appkitbackend`,
  },
  {
    name: "iOS",
    icon: "ios" as const,
    backend: "UIKitBackend",
    description: "UIKit provides a native iOS experience.",
    href: `${docs}/documentation/swiftcrossui/uikitbackend`,
  },
  {
    name: "Android",
    icon: "android" as const,
    backend: "AndroidBackend",
    description: "Android Views makes apps feel at home on Android.",
    href: `${docs}/documentation/swiftcrossui/androidbackend`,
  },
  {
    name: "Windows",
    icon: "windows" as const,
    backend: "WinUIBackend",
    description: "WinUI 3 makes apps fit in with modern Windows.",
    href: `${docs}/documentation/swiftcrossui/winuibackend`,
  },
  {
    name: "Linux",
    icon: "linux" as const,
    backend: "GtkBackend",
    description: "GTK 4 feels native on GNOME.",
    href: `${docs}/documentation/swiftcrossui/gtkbackend`,
  },
  {
    name: "tvOS",
    icon: "tvos" as const,
    backend: "UIKitBackend",
    description: "UIKit is perfect for the big screen.",
    href: `${docs}/documentation/swiftcrossui/uikitbackend`,
  },
];
