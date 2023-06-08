<template>
  <SsSectionHeader>Выберите Ваш будущий проект</SsSectionHeader>
  <SsLoader v-if="loading" />
  <div class="ss-projects__items" v-if="!loading">
    <SsProject
      v-for="(project, key) in getProjects"
      :key="key"
      :project="project"
    />
  </div>
</template>
<script src="./ss-projects.js"></script>
