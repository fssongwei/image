import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Landing from "./pages/Landing.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Upload from "./pages/Upload.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/upload", component: Upload },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
