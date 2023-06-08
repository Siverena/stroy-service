import ssModal from '@/components/ss-modal/ss-modal';

<template>
  <SsHeader />
  <main>
    <SsBtn @click="this.$store.commit('openModal')" class="ss-btn--callback-mob"
      >Заказать звонок +7 777 777 77 77</SsBtn
    >
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
