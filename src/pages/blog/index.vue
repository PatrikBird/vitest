<script setup lang="ts">
import { blogPosts } from '../../blogPosts';
</script>

<template>
  <div class="text-center">
    <carbon-pen-fountain class="m-auto" />
    <h3>Blog</h3>
  </div>
  <div>
    <div class="max-w-5xl mx-auto pt-10 pb-10">
      <ul class="flex flex-wrap -mx-2 overflow-hidden list-none">
        <blog-element
          v-for="(ele, index) in blogPosts"
          :key="ele.slug + '_' + index"
          :slug="ele.slug"
          :tag="ele.tag"
          :title="ele.title"
          :subTitle="ele.subTitle"
          :img="ele.img"
          :date="ele.date"
        ></blog-element>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
