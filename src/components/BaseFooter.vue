<script setup>
import { computed } from "vue";
import IconGit from "./icons/IconGit.vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <div class="footer">
    <div>
      <a href="https://github.com/" target="_blank">
        <IconGit class="icon" />
      </a>
    </div>
    <div class="copyright">© All rights reserved, {{ currentYear }}</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #24292f;
  bottom: 0;
  position: fixed;
  text-align: center;
  height: 120px;
  width: 100%;

  .icon {
    margin-top: 20px;
    width: 40px;
  }

  .copyright {
    color: #fff;
    font-size: 10px;
    margin-top: 21px;
  }
}
</style>
