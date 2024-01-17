<template>
  <div>
    <div v-if="content || isPreviewing()">
      <RenderContent
        :model="model"
        :content="content"
        :api-key="config.public.builderApiKey"
      />
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

const { data: content } = await useAsyncData("builderData", () =>
  getContent({
    model: props.model,
    apiKey: config.public.builderApiKey,
    userAttributes: {
      urlPath: props.path,
    },
  })
);
</script>
