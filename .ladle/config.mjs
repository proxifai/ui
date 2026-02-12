/** @type {import("@ladle/react").UserConfig} */
export default {
  stories: "src/stories/**/*.stories.{tsx,ts}",
  defaultStory: "components--button--default",
  addons: {
    theme: {
      enabled: true,
      defaultState: "dark",
    },
  },
}
