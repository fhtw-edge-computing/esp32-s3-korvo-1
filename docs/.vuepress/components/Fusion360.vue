<template>
  <p>
    <iframe
      :src="url"
      :width="`${width}%`"
      :height="`${height}px`"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      frameborder="0"
    ></iframe>
  </p>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

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
    default: 600,
  },
});

const { url, width, height } = toRefs(props);

const name = ref("Fusion360");
</script>

<style scoped></style>
