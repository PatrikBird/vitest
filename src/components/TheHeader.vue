<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { isDark, toggleDark } from '~/logics';

const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <nav class="text-xl mt-6 text-center pb-8 text-gray-700 dark:text-gray-200">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <a
      class="icon-btn mx-2"
      :title="t('button.toggle_dark')"
      @click="toggleDark"
    >
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <a
      class="icon-btn mx-2"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <carbon-language />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <router-link class="icon-btn mx-2" to="/blog" :title="t('button.blog')">
      <carbon-pen-fountain />
    </router-link>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://twitter.com/"
      target="_blank"
      title="Twitter"
    >
      <carbon-logo-twitter />
    </a>
  </nav>
</template>
