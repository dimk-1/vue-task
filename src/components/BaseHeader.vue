<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import IconGit from "./icons/IconGit.vue";
import BaseContainer from "../components/BaseContainer.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const searchValue = computed({
  get: () => userStore.searchValue,
  set: (val) => userStore.setUserSearch(val),
});
</script>

<template>
  <div class="header">
    <BaseContainer>
      <div class="header-content">
        <div class="left-side">
          <router-link to="/">
            <IconGit class="icon" />
          </router-link>
          |
          <div class="title">Github Userboard</div>
        </div>
        <div class="right-side">
          <input type="text" v-model="searchValue" />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #24292f;
  height: 80px;
  width: 100%;

  ::v-deep(.container) {
    height: 100%;
  }

  .header-content {
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left-side {
      height: 100%;
      display: flex;
      align-items: center;
      .icon {
        height: 100%;
      }

      .title {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        margin-left: 16px;
      }
    }

    .right-side {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>
