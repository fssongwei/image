<template>
  <div class="header">
    <div class="header-title" @click="onLanding">
      Image
    </div>
    <div v-if="isLoggedIn" class="header-buttons">
      <span class="header-button" @click="onUpload">Upload</span>
      <span class="header-button" @click="onSignOut">Sign out</span>
    </div>
    <div v-else class="header-buttons">
      <span class="header-button" @click="onSignIn">Sign in</span>
      <span class="header-button" @click="onSignUp">Sign up</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    onSignIn() {
      this.$router.push("/login");
    },
    onSignUp() {
      this.$router.push("/register");
    },
    onLanding() {
      this.$router.push("/");
    },
    onUpload() {
      this.$router.push("/upload");
    },
    async onSignOut() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 50px;
  color: white;
  background-color: steelblue;
  display: flex;
  justify-content: space-between;
}

.header-title {
  padding: 0 1em;
  line-height: 50px;
  font-size: 20px;
}

.header-buttons {
  line-height: 50px;
  padding: 0 1em;
}

.header-button {
  padding: 0 1em;
}

.header-button:hover {
  background-color: cornflowerblue;
  display: inline-block;
}
</style>
