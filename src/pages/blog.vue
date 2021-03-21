<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
interface BlogElement {
  tag: string,
  img: string,
  headline: string,
  subline: string
}
const elements: BlogElement = {
  tag: 'Veganism',
  img: 'beach.jpg',
  headline: 'headline',
  subline: 'subline',
};

const array = [elements, elements, elements];

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
          :key="ele.headline"
          :headline="ele.headline"
          :img="ele.img"
          :subline="ele.subline"
          :tag="ele.tag"
        ></blog-element>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
