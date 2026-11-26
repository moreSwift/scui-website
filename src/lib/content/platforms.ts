import { docs } from "$lib/site";

export type Platform = {
  name: string;
  icon: "macos" | "ios" | "tvos" | "android" | "windows" | "linux";
  backend: string;
  kind: "desktop" | "phone" | "tv";
  image?: string;
  alt?: string;
  href: string;
};

export const platforms: Platform[] = [
  {
    name: "macOS",
    icon: "macos" as const,
    backend: "AppKit",
    kind: "desktop" as const,
    image: "/images/music-player/appkitbackend-utah.webp",
    alt: "MusicPlayerExample running on macOS",
    href: `${docs}/documentation/swiftcrossui/appkitbackend`,
  },
  {
    name: "Windows",
    icon: "windows" as const,
    backend: "WinUI 3",
    kind: "desktop" as const,
    image: "/images/music-player/winuibackend-utah.webp",
    alt: "MusicPlayerExample running on Windows",
    href: `${docs}/documentation/swiftcrossui/winuibackend`,
  },
  {
    name: "Linux",
    icon: "linux" as const,
    backend: "GTK 4",
    kind: "desktop" as const,
    image: "/images/music-player/gtkbackend-utah.webp",
    alt: "MusicPlayerExample running on Linux",
    href: `${docs}/documentation/swiftcrossui/gtkbackend`,
  },
  {
    name: "iOS",
    icon: "ios" as const,
    backend: "UIKit",
    kind: "phone" as const,
    image: "/images/music-player/iphone.webp",
    alt: "MusicPlayerExample running on an iPhone",
    href: `${docs}/documentation/swiftcrossui/uikitbackend`,
  },
  {
    name: "Android",
    icon: "android" as const,
    backend: "Android Views",
    kind: "phone" as const,
    image: "/images/music-player/android.webp",
    alt: "MusicPlayerExample running on an Android phone",
    href: `${docs}/documentation/swiftcrossui/androidbackend`,
  },
];
