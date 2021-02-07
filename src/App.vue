<template>
  <div id="app" v-if="loading">
    loading ...
  </div>

  <div id="app" v-else>
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header.vue";
import store from "./store";

export default {
  name: "App",
  store,
  data() {
    return { loading: true };
  },
  components: {
    Header,
  },
  computed: {
    ...mapState({ loadingUser: (state) => state.auth.loadingUser }),
  },
  async created() {
    await this.$store.dispatch("validateToken");
    this.loading = false;
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
