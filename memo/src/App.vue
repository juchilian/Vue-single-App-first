<style>
@import "../static/styles.css";
</style>
<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view></router-view>
  </div>
</template>

<script>
import NavLink from "./components/NavLink";
export default {
  name: "App.vue",
  components: {
    NavLink
  }
};
</script>

