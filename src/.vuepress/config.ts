import { defineUserConfig } from "vuepress";
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/cosmjs-examples/",
  lang: "en-US",
  title: "CosmJs examples",
  description: "A docs demo for vuepress-theme-hope ",

  theme,
  plugins: [
    registerComponentsPlugin({
      components: {
        test: path.resolve(__dirname, './components/test.vue'),
        simpleSign: path.resolve(__dirname, './components/simpleSign.vue'),
        simpleConnect: path.resolve(__dirname, './components/simpleConnect.vue'),
      },
    }),
  ]
});
