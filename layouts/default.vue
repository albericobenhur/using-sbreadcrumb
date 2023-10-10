<template>
  <v-app>
    <v-container class="my-auto">
      <slot name="navigation">
        <SBreadcrumb />
      </slot>
      <h1>
        <slot name="title">Home default title </slot>
      </h1>

      <v-card variant="outlined">
        <v-card-title>
          <slot name="cardTitle" />
        </v-card-title>
        <v-card-text>
          <slot />
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
