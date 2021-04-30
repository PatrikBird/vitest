<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { blogPosts } from '~/blogPosts';

let posts = reactive(blogPosts);
let filterBy = ref('');
let filteredPosts = computed(() => {
  if (filterBy.value === '') return posts;
  else return blogPosts.filter((ele) => ele.tag === filterBy.value);
});

function filterByTag(tag: string) {
  filterBy.value = tag;
}
</script>

<template>
  <div class="text-center">
    <carbon-pen-fountain class="m-auto" />
    <h3 class="title font-xl">Blog</h3>

    <div class="card bg-white py-3 px-5 rounded-xl flex flex-col mb-5">
      <div class="title font-medium">Filter by Category</div>
      <div class="w-full py-3">
        <div class="flex inline-flex mr-2" role="group">
          <button
            @click="filterByTag('')"
            type="button"
            class="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 rounded-l-md hover:bg-blue-600 hover:shadow-lg"
          >
            Reset
          </button>
          <button
            @click="filterByTag('Veganism')"
            type="button"
            class="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 rounded-l-md hover:bg-blue-600 hover:shadow-lg"
          >
            Veganism
          </button>
          <button
            @click="filterByTag('Environmentalism')"
            type="button"
            class="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          >
            Environmentalism
          </button>
          <button
            @click="filterByTag('Future')"
            type="button"
            class="focus:outline-none text-white text-sm py-2.5 px-5 bg-blue-500 rounded-r-md hover:bg-blue-600 hover:shadow-lg"
          >
            Future
          </button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="max-w-5xl mx-auto pt-10 pb-10">
      <ul class="flex flex-wrap -mx-2 overflow-hidden list-none">
        <blog-element
          v-for="(ele, index) in filteredPosts"
          :key="index"
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
