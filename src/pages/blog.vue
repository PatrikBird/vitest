<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useStore } from 'vuex';
// import { BlogPosts } from '../types';

const store = useStore();
console.log(store);

const blogPosts = computed(() => store.state.blog.posts);

console.log(blogPosts);
// const posts: BlogPost = {
//   // get data from vuex
//   slug: 'my-post',
//   tag: 'vegan',
//   title: 'some-title',
//   subTitle: 'some-sub-title',
//   img: 'beach.jpg',
//   date: '2021-03-21',
// };

// const array = [posts, posts, posts];

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
          v-for="ele in blogPosts"
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
