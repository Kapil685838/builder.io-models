<template>
    <div>
        <BuilderContent model="page" :path="route.path" />
    </div>
</template>

<script setup>
const route = useRoute();
</script>
