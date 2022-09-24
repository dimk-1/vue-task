<script setup>
import { computed, onBeforeMount, reactive, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { userApi } from "@/api";

import BaseAvatar from "@/components/BaseAvatar.vue";
import BaseContainer from "../components/BaseContainer.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import UserRepositories from "@/components/UserRepositories.vue";

import IconBack from "../components/icons/IconBack.vue";

const route = useRoute();

const dataLoading = ref(false);
const user = reactive({
  details: {},
});

const userData = computed(() => user.details);

const getUserData = async () => {
  dataLoading.value = true;

  const response = await userApi.getUserDetails(route.params.login);

  if (response.error) {
    console.log("Error");
  } else {
    Object.assign(user.details, response.data);
  }

  dataLoading.value = false;
};

onBeforeMount(() => {
  getUserData();
});
</script>

<template>
  <BaseContainer class="content-wrapper">
    <BaseLoader v-if="dataLoading" />
    <template v-else>
      <template v-if="userData.id">
        <div class="user-details">
          <BaseAvatar size="lg" :avatar="userData.avatar_url" />
          <div class="username">{{ userData.login }}</div>
          <UserRepositories />
        </div>
      </template>
      <div v-else class="not-found">User not found</div>
      <div class="back">
        <router-link to="/">
          <IconBack />
        </router-link>
      </div>
    </template>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.content-wrapper {
  margin-top: 69px;
  position: relative;

  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .username {
      margin: 34px 0;
      font-size: 40px;
      font-weight: 800;
    }
  }

  .back {
    position: absolute;
    top: 0;

    &:hover {
      cursor: pointer;
    }
  }

  .not-found {
    font-size: 20px;
    font-weight: 700;
    margin-top: 118px;
    text-align: center;
  }
}
</style>
