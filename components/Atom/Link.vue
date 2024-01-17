<template>
  <NuxtLink :to="to">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
