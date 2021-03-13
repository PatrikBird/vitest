<script setup lang="ts">
import { useHead } from '@vueuse/head';

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitest',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
});
</script>

<template>
  <nav class="text-center pb-8 text-gray-700 dark:text-gray-200">
    <the-header />
  </nav>
  <router-view />
</template>
