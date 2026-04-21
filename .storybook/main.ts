import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-mcp",
    "@chromatic-com/storybook",
  ],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  // next/link reads process.env.* at runtime, but Vite does not define
  // `process` in the browser. Replace the references at build time so the
  // bundle works outside a Next.js app (e.g., in Storybook).
  viteFinal: (config) => ({
    ...config,
    define: {
      ...config.define,
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV ?? "development",
      ),
      "process.env.__NEXT_LINK_NO_TOUCH_START": "false",
    },
  }),
};
export default config;
