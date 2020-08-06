<template>
  <div id="app">
    <ShoppingBag />
  </div>
</template>

<script>
import ShoppingBag from "./components/ShoppingBag.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";

Vue.use(BootstrapVue);

export default {
  name: "App",
  components: {
    ShoppingBag,
  },
};
</script>

<style>
#app {
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 100px;
}
</style>
