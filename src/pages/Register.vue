<template>
  <div id="login_page">
    <div class="login_panel">
      <h1>Register</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </form>

      <button class="submit" @click="onSignUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSignUp() {
      try {
        if (!this.username) throw "Please enter username!";
        if (!this.password) throw "Please enter password!";
        let user = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch("register", user);
        this.$router.push("/dashboard");
      } catch (error) {
        let errMsg = _.get(error, "response.data") || error.toString();
        alert(errMsg);
      }
    },
  },
};
</script>

<style></style>
