<template>
  <div v-if="$store.getters.isLoggedIn">
    <div v-if="loading">loading</div>
    <div v-else>
      <img
        v-for="imageUrl in imageList"
        :src="imageUrl"
        :key="imageUrl"
        @click="onImageSelect(imageUrl)"
      />
    </div>
    <Slider
      :open="sliderOpen"
      @onClose="onClose"
      :selectedImage="selectedImage"
    />
  </div>
  <div v-else>
    this will be a landing page
  </div>
</template>

<script>
import ImageApi from "../utils/ImageApi";
import Slider from "../components/Slider";

export default {
  data() {
    return {
      loading: true,
      imageList: [],
      sliderOpen: false,
      selectedImage: null,
    };
  },
  components: {
    Slider,
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) return;
    try {
      let imageList = (await ImageApi.get("/api/image")).data;
      this.imageList = imageList;
    } catch (error) {
      alert(error.response.data);
    }
    this.loading = false;
  },
  methods: {
    onClose() {
      this.sliderOpen = false;
    },
    onImageSelect(imageUrl) {
      this.selectedImage = imageUrl;
      this.sliderOpen = true;
    },
  },
};
</script>

<style></style>
