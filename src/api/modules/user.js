import { api } from "@/api/axios";

const getUsers = async (amount = 100) => {
  try {
    const response = await api.get("/users", {
      params: { per_page: amount },
    });

    return response;
  } catch (error) {
    return { error };
  }
};

const getUserDetails = async (user) => {
  try {
    const response = await api.get(`/users/${user}`);

    return response;
  } catch (error) {
    return { error };
  }
};

const getUserRepos = async (user) => {
  try {
    const response = await api.get(`/users/${user}/repos`);

    return response;
  } catch (error) {
    return { error };
  }
};

const userApi = {
  getUsers,
  getUserDetails,
  getUserRepos,
};

export { userApi };
