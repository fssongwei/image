<template>
  <div class="slider" :class="{ close: !open }">
    <button @click="onClose">close</button>
    <ul>
      <li>
        <label>HTML</label><br />
        <input type="text" :value="htmlEmbbedLink" />
      </li>
      <li>
        <label>Markdown</label><br />
        <input type="text" :value="markdowmEmbbedLink" />
      </li>
      <li>
        <label>Link Only</label><br />
        <input type="text" :value="linkOnly" />
      </li>
    </ul>
    <button @click="onDelete">Delete</button>
  </div>
</template>

<script>
import ImageApi from "../utils/ImageApi";

export default {
  props: ["open", "selectedImage"],
  inject: ["reload"],
  computed: {
    fileName() {
      if (!this.selectedImage) return "";
      return this.selectedImage.substring(
        this.selectedImage.lastIndexOf("/") + 1
      );
    },
    htmlEmbbedLink() {
      if (!this.selectedImage) return "";
      return `<a href="${this.selectedImage}" target="_blank"><img src="${this.selectedImage}" ></a>`;
    },
    markdowmEmbbedLink() {
      if (!this.selectedImage) return "";
      return `![${this.fileName}](${this.selectedImage})`;
    },
    linkOnly() {
      if (!this.selectedImage) return "";
      return this.selectedImage;
    },
  },
  methods: {
    onClose() {
      this.$emit("onClose");
    },
    async onDelete() {
      try {
        await ImageApi.delete(`/api/image/${this.fileName}`);
        alert("success");
        this.reload();
      } catch (error) {
        alert(error.response.data);
      }
    },
  },
};
</script>

<style>
.slider {
  width: 500px;
  height: 100vh;
  position: fixed;
  background-color: steelblue;
  right: 0;
  top: 50px;
  z-index: 1;
}

.close {
  display: none;
}
</style>
