import axios from "axios";

const auth = {
  state: {
    token: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    async login({ commit }, user) {
      let token = (await axios.post("/api/auth", user)).data;
      commit("setToken", token);
      window.sessionStorage.setItem("token", token);
    },
    async register({ commit }, user) {
      let token = (await axios.post("/api/register", user)).data;
      commit("setToken", token);
      window.sessionStorage.setItem("token", token);
    },
    async validateToken({ state, commit }) {
      try {
        let token = state.token || window.sessionStorage.getItem("token");
        if (!token) throw "no token";
        await axios.get("/api/auth", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        commit("setToken", token);
        window.sessionStorage.setItem("token", token);
      } catch (error) {
        commit("setToken", null);
        window.sessionStorage.removeItem("token");
      }
    },
    logout({ commit }) {
      commit("setToken", null);
      window.sessionStorage.removeItem("token");
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
};

export default auth;
