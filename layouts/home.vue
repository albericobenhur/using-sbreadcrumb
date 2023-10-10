<template>
  <v-app>
    <v-container class="my-auto">
      <h1>
        <slot name="title"> Home default title </slot>
      </h1>

      <v-card>
        <v-card-title>
          <slot name="cardTitle" />
        </v-card-title>
        <v-card-text>
          <slot />
        </v-card-text>
        <v-card-actions>
          <v-btn variant="outlined" href="/dev"> Page breadcrumb </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>
