<script setup>
import { defineAsyncComponent, computed, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { userApi } from "@/api";
import { useUserStore } from "@/stores/user";

import BaseAvatar from "@/components/BaseAvatar.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseLoader from "@/components/BaseLoader.vue";

const IconLink = defineAsyncComponent(() =>
  import("@/components/icons/IconLink.vue")
);

const router = useRouter();
const userStore = useUserStore();

const dataLoading = ref(false);

const users = computed(() => {
  if (userStore.userSearch) {
    return userStore.list.filter((user) =>
      user.login.includes(userStore.userSearch)
    );
  }

  return userStore.list;
});

const getUsers = async () => {
  dataLoading.value = true;
  userStore.clearList();

  const response = await userApi.getUsers();

  if (response.error) {
    console.log("Error");
  } else {
    userStore.setList(response.data);
  }

  dataLoading.value = false;
};

const openProfile = (login) => {
  router.push({
    name: "user-details",
    params: { login },
  });
};

onBeforeMount(() => {
  getUsers();
});
</script>

<template>
  <BaseContainer class="content-wrapper">
    <BaseLoader v-if="dataLoading" />
    <div v-else>
      <div class="title">Top Users</div>
      <div v-if="users.length" class="user-list">
        <div v-for="user in users" :key="`user-${user.id}`" class="user">
          <BaseAvatar
            :avatar="user.avatar_url"
            @click="openProfile(user.login)"
          />
          <div class="username">
            {{ user.login }}
          </div>
          <div class="user-link">
            <IconLink class="icon" />
            <a :href="user.html_url" target="_blank">Github</a>
          </div>
        </div>
      </div>
      <div v-else class="not-found">Users not found</div>
    </div>
  </BaseContainer>
</template>

<style scoped lang="scss">
.content-wrapper {
  margin-top: 57px;

  .title {
    font-size: 48px;
    font-weight: 800;
    text-align: center;
  }

  .title {
    margin-bottom: 65px;
  }

  .user-list {
    display: grid;
    gap: 97px;
    grid-template-columns: repeat(4, 140px);
    justify-content: center;

    .user {
      text-align: center;

      ::v-deep(.user-avatar) {
        &:hover {
          cursor: pointer;
        }
      }

      .username {
        font-size: 20px;
        font-weight: 800;
        padding-top: 12px;
        line-height: 24px;
        text-align: center;
      }

      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1px;

        .icon {
          height: 14.67px;
          margin-right: 4.67px;
          color: #54a3ff;
        }

        a {
          font-size: 12px;
          color: #54a3ff;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
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
