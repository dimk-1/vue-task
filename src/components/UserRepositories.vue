<script setup>
import { computed, onBeforeMount, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { userApi } from "@/api";

import BaseLoader from "@/components/BaseLoader.vue";
import IconWatch from "./icons/IconWatch.vue";
import IconStar from "./icons/IconStar.vue";

const route = useRoute();

const dataLoading = ref(false);
const repos = reactive({
  list: [],
});

const repoList = computed(() => repos.list);

const getUserData = async () => {
  dataLoading.value = true;

  const response = await userApi.getUserRepos(route.params.login);

  if (response.error) {
    console.log("Error");
  } else {
    repos.list = response.data;
  }

  dataLoading.value = false;
};

onBeforeMount(() => {
  getUserData();
});
</script>

<template>
  <BaseLoader v-if="dataLoading" />
  <div v-else class="repo-list">
    <table>
      <tbody>
        <tr v-for="(repo, index) in repoList" :key="`repo-${repo.id}`">
          <td class="name">
            <a :href="repo.html_url" target="_blank"> Repo {{ index + 1 }} </a>
            <span> </span>
          </td>
          <td class="watchers">
            <div>
              <IconWatch class="icon" />
              {{ repo.watchers }}
            </div>
          </td>
          <td class="start">
            <div>
              <IconStar class="icon" />
              {{ repo.stargazers_count }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.repo-list {
  margin-bottom: 60px;
  width: 600px;

  table {
    width: 100%;
    td.name {
      a {
        color: #000000;
        text-decoration: none;

        &:hover {
          color: #54a3ff;
          text-decoration: underline;
        }
      }
    }

    td.watchers,
    td.start {
      width: 100px;
      div {
        display: flex;
        align-items: center;
      }
    }

    .icon {
      width: 23px;
      margin-right: 10px;
    }
  }
}
</style>
