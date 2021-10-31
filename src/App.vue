<template>
  <div class="a4"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {}
});
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.a4 {
  border: 2px solid white;
  width: 794px;
  height: 1133px;
}
</style>
