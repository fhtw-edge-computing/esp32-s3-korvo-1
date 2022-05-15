import { defineClientConfig } from '@vuepress/client'

import PDF from "./components/PDF.vue";
import Fusion360 from "./components/Fusion360.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("PDF", PDF);
    app.component("Fusion360", Fusion360);
  },
})