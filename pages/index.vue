<template>
  <NuxtLayout name="home">
    <div class="text-subtitle-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo
      laborum consequatur harum accusantium atque nisi iusto ea corrupti,
      repellendus vel ab voluptate deleniti expedita. Consectetur soluta quasi
      corrupti beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Fuga explicabo laborum consequatur harum accusantium atque nisi iusto ea
      corrupti, repellendus vel ab voluptate deleniti expedita. Consectetur
      soluta quasi corrupti beatae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Fuga explicabo laborum consequatur harum accusantium
      atque nisi iusto ea corrupti, repellendus vel ab voluptate deleniti
      expedita. Consectetur soluta quasi corrupti beatae.
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Home-0",
  breadcrumbTitle: "Home-bcrumb",
});

useHead({
  title: "Home-1",
});

useSeoMeta({
  title: "Home-2",
});
</script>
