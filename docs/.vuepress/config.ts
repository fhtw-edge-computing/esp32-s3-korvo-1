import { defineUserConfig, defaultTheme } from "vuepress";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "en-US",
  theme: defaultTheme({
    logo: "/images/fhtw-logo.svg",
  }),
  locales: {
    "/de/": {
      lang: "de-DE",
      title: "ESP-S3 Korvo-1",
      description: "FH Technikum Wien"
    },
    "/": {
      lang: "en-US",
      title: "ESP-S3 Korvo-1",
      description: "UAS Technikum Vienna"
    }
  },
  extendsMarkdown: (md) => {
    md.use(require("markdown-it-abbr"));
    md.use(require("markdown-it-video"), { youtube: { width: /* 640 */ 740, height: /* 390 */ 451 } });
  },
  plugins: [
    mediumZoomPlugin(),
    searchPlugin(),
  ]
})