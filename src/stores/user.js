import { defineStore } from "pinia";

const useUserStore = defineStore("users", {
  state: () => ({
    list: false,
    userSearch: "",
  }),
  actions: {
    setList(users) {
      this.list = users;
    },
    clearList() {
      this.showSideBar = [];
    },
    setUserSearch(userLogin) {
      this.userSearch = userLogin;
    },
    clearUserSearch() {
      this.userSearch = "";
    },
  },
});

export { useUserStore };
