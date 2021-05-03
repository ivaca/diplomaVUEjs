<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    login: true;
  },
};
</script>
<style>
#nav {
  padding: 15px;
}
#router {
  margin-right: 20px;
}
</style>
