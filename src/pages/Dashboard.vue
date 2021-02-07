<template>
  <div>
    this will be a secret dashboard page
    <br />
    {{ isLoggedIn ? "You have loggedIn" : "You have not loggedIn" }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  created() {
    if (!this.isLoggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
