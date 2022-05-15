<!-- https://iq.opengenus.org/embed-pdf-in-html/#:~:text=The%20first%20method%20to%20embed,the%20web%20page%2C%20of%20course. -->
<!-- https://pdfjs.express/blog/how-embed-pdf-in-html-website -->
<template>
  <p>
    <span class="container fold">
      <span class="toolbar">
        <button @click="onUnfold">Unfold</button>
        <button @click="onFullscreen">Fullscreen</button>
        <button @click="onNewTab">Open in new Tab</button>
      </span>
      <object
        ref="pdf"
        class="preview"
        :data="url"
        type="application/pdf"
        :width="`${width}%`"
        :height="`${height}px`"
      ></object>
    </span>
  </p>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

const pdf = ref<HTMLElement | null>(null);

const onFullscreen = ref<((event) => void) | undefined>(undefined);
const onUnfold = ref<((event) => void) | undefined>(undefined);
const onNewTab = ref<(() => void) | undefined>(undefined);

const previousHeight = ref<number>();

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 1080,
  },
});

const { url, width, height } = toRefs(props);

onFullscreen.value = (event) => {
  if (window) {
    if (!window.document.fullscreenElement) {
      const size = pdf.value.getBoundingClientRect();
      previousHeight.value = size.height;
      pdf.value.classList.add("fullscreen");
      event.target.textContent = "Exit Fullscreen";
      pdf.value.parentElement.requestFullscreen();
    } else {
      if (window.document.exitFullscreen) {
        pdf.value.classList.remove("fullscreen");
        event.target.textContent = "Fullscreen";
        window.document.exitFullscreen();
      }
    }
  }
};

onUnfold.value = (event) => {
  if (pdf.value.parentElement.classList.contains("fold")) {
    event.target.textContent = "Fold";
    pdf.value.parentElement.classList.remove("fold");
  } else {
    event.target.textContent = "Unfold";
    pdf.value.parentElement.classList.add("fold");
  }
};

onNewTab.value = () => {
  window.open(url.value, "_blank");
};

const name = ref("PDF");
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  background: #323639;
  border: 1px solid #323639;

  .toolbar {
    display: flex;
    flex-flow: row nowrap;

    padding: 0.25rem 0;

    button {
      margin: 0.25rem;
    }
  }

  .preview {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
}

.fullscreen {
  height: 100%;
}

.fold {
  max-height: 400px;
}
</style>
