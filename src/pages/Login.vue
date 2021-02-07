<template>
  <div id="login_page">
    <div class="login_panel">
      <h1>Login</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </form>

      <button class="submit" @click="onSignIn">Sign In</button>
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
    async onSignIn() {
      try {
        if (!this.username) throw "Please enter username!";
        if (!this.password) throw "Please enter password!";
        let user = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch("login", user);
        this.$router.push("/dashboard");
      } catch (error) {
        let errMsg = _.get(error, "response.data") || error.toString();
        alert(errMsg);
      }
    },
  },
};
</script>

<style scoped>
/* #login_page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_panel {
  width: 95%;
  max-width: 600px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 2em;
}

.login_panel label {
  display: block;
  line-height: 200%;
  font-size: 2em;
}

.login_panel input {
  width: 100%;
  height: 3em;
}

.button {
  background-color: steelblue;
  border: none;
  border-radius: 5px;
  color: white;
  line-height: 300%;
  padding: 0 1em;
  font-size: 1.2em;
  margin-top: 1em;
} */
</style>
