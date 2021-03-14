<script setup lang="ts">
// import { useI18n } from 'vue-i18n';

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
        <li
          class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3"
        >
          <a href="">
            <div
              class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
              style="height: 400px; background-image: url(../images/beach.jpg)"
            >
              <div
                class="absolute w-full h-full bg-black z-10 opacity-50"
              ></div>
              <div class="relative z-20 text-center p-5">
                <span
                  class="inline-block text-white uppercase text-xs tracking-wide"
                  >Veganism</span
                >
                <h2 class="text-white font-semibold font-serif text-xl my-5">
                  Places to stay in the island on your visit
                </h2>
                <span class="inline-block text-xs text-white font-sans"
                  >Comfort and views</span
                >
              </div>
            </div>
          </a>
        </li>
        <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
          <a href="">
            <div
              class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
              style="height: 400px; background-image: url(../images/beach.jpg)"
            >
              <div
                class="absolute w-full h-full bg-black z-10 opacity-50"
              ></div>
              <div class="relative z-20 text-center p-5">
                <span
                  class="inline-block text-white uppercase text-xs tracking-wide"
                  >Travelling</span
                >
                <h2 class="text-white font-semibold font-serif text-xl my-5">
                  Diving for Sharks, the best experience in the country
                </h2>
                <span class="inline-block text-xs text-white font-sans"
                  >Every day of the week</span
                >
              </div>
            </div>
          </a>
        </li>
        <li class="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
          <a href="">
            <div
              class="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
              style="height: 400px; background-image: url(../images/beach.jpg)"
            >
              <div
                class="absolute w-full h-full bg-black z-10 opacity-50"
              ></div>
              <div class="relative z-20 text-center p-5">
                <span
                  class="inline-block text-white uppercase text-xs tracking-wide"
                  >Zero Waste</span
                >
                <h2 class="text-white font-semibold font-serif text-xl my-5">
                  Take your tastebuds for a ride with these places
                </h2>
                <span class="inline-block text-xs text-white font-sans"
                  >Different cuisine</span
                >
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blog
</route>
