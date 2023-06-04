<template>
  <SsHeader />

  <main>
    <router-view />
  </main>
  <SsContacts />
  <SsFooter />
</template>
<script src="./app.js"></script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/main.scss';
</style>
