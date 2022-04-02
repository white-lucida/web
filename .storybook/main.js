module.exports = {
  "typescript": { reactDocgen: false },
  "stories": '../src/**/*.stories.@(tsx|mdx)',
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}