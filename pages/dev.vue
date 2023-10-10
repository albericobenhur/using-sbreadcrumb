<template>
  <NuxtLayout name="default">
    <template #title> Breadcrumb page </template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-radio-group v-model="color" inline>
            <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
            <v-radio
              label="indigo-darken-3"
              color="indigo-darken-3"
              value="indigo-darken-3"
            ></v-radio>
            <v-radio label="primary" color="primary" value="primary"></v-radio>
            <v-radio
              label="secondary"
              color="secondary"
              value="secondary"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
          <v-card class="mx-auto" max-width="344" :color="color">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  {{ variant }}
                </div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
  title: "Inside-0 ÁÀÂÃ",
  breadcrumbTitle: "Inside-bcrumb ÁÀÂÃ",
});

useHead({
  title: "Inside-1 ÁÀÂÃ",
});

useSeoMeta({
  title: "Inside-2 ÁÀÂÃ",
});

const variants = ["elevated", "flat", "tonal", "outlined"];
const color = ref("indigo");
</script>
