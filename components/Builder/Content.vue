<template>
  <div>
    <div v-if="content || isPreviewing()">
      <RenderContent :model="model" :content="content" :api-key="builderApiKey" />
    </div>
    <div v-else>Content not Found</div>
  </div>
</template>

<script setup>
import { RenderContent, getContent, isPreviewing } from "@builder.io/sdk-vue/vue3";

const props = defineProps({
  model: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const config = useRuntimeConfig();

const builderApiKey = config.builderApiKey;

const { data: content } = await useAsyncData("builderData", () =>
  getContent({
    model: props.model,
    apiKey: builderApiKey,
    userAttributes: {
      urlPath: props.path,
    },
  })
);
</script>
