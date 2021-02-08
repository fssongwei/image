<template>
  <div>
    <form>
      <input accept="image/*" name="img" id="upload_file" type="file" />
      <button @click="onUpload">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
import ImageApi from "../utils/ImageApi";
import { router } from "../main";

export default {
  methods: {
    async onUpload(e) {
      try {
        e.preventDefault();
        var file = document.getElementById("upload_file").files[0];
        var formData = new FormData(); // 创建form对象
        formData.append("img", file);
        let imageUrl = (await ImageApi.post("/api/image", formData)).data;
        alert("success! " + imageUrl);
        router.push("/");
      } catch (error) {
        let errMsg = _.get(error, "response.data") || error.toString();
        alert(errMsg);
      }
    },
  },
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
