import ssModal from '@/components/ss-modal/ss-modal';

<template>
  <SsHeader />
  <main>
    <router-view />
  </main>
  <SsContacts />
  <SsFooter />
  <ssModal v-if="isModalOpen" />
</template>
<script src="./app.js"></script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/main.scss';
</style>
