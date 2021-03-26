<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
import { provide } from 'vue';
import { post } from '../global';

provide('post', post);

const array = [post, post, post];

// const { t } = useI18n();
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
          v-for="ele in array"
          :key="ele.slug"
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
