<template>
  <NuxtLayout name="default">
    <template #title> Breadcrumb page </template>
    <InfoBlock />
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Inside-0 ÁÀÂÃ",
  breadcrumbTitle: "Inside-bcrumb ÁÀÂÃ",
});

useSeoMeta({
  title: "Inside-2 ÁÀÂÃ",
});

useHead({
  title: "Inside-1 ÁÀÂÃ",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
