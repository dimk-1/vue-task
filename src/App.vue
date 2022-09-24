<script setup>
import { RouterView } from "vue-router";
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
</script>

<template>
  <BaseHeader />
  <div class="page-content">
    <RouterView />
  </div>
  <BaseFooter />
</template>

<style lang="scss" scoped>
.page-content {
  padding-bottom: 120px;
}
</style>
