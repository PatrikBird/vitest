<script setup="props" lang="ts">
import { defineProps } from 'vue';
// import { inject } from 'vue';
// const posts = inject('posts');

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
    <a href="">
      <div
        class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
        :style="{ 'background-image': 'url(images/' + props.img + ')' }"
        style="height: 400px"
      >
        <div class="absolute w-full h-full bg-black z-10 opacity-50"></div>
        <div class="relative z-20 text-center p-5">
          <span class="inline-block text-white uppercase text-xs tracking-wide">{{ props.tag }}</span>
          <h2 class="text-white font-semibold font-serif text-xl my-5">
            {{ props.title }}
          </h2>
          <span class="inline-block text-xs text-white font-sans"> {{ props.subTitle }}</span>
          <span class="block text-xs text-white font-sans">{{ props.date }}</span>
        </div>
      </div>
    </a>
  </li>
</template>
