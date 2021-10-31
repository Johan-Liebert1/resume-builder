<template>
  <div class="a4">
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: { Header }
});
</script>

<style lang="scss">
$blue: rgb(0, 139, 255);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.blue {
  color: $blue;
}

.bold {
  font-weight: bold;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.a4 {
  border: 2px solid black;
  width: 794px;
  height: 1133px;
  padding: 1rem;
}
</style>
