export const quickStartSteps = [
  {
    number: "1",
    title: "Install Swift Bundler",
    lines: ["mint install moreSwift/swift-bundler@main"],
  },
  {
    number: "2",
    title: "Create a project",
    lines: [
      "sbun templates update",
      "sbun create HelloWorld \\",
      "  --template SwiftCrossUI",
    ],
  },
  {
    number: "3",
    title: "Run it",
    lines: ["cd HelloWorld", "sbun run", 'sbun run --simulator "iPhone 16"'],
  },
];
