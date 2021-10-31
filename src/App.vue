<template>
  <div class="a4">
    <Header />
    <SectionContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";
import SectionContainer from "./components/SectionContainer.vue";

export default defineComponent({
  name: "App",
  components: { Header, SectionContainer }
});
</script>

<style lang="scss">
$blue: rgb(0, 139, 255);
$gray: rgb(55, 66, 70);
$lightGray: rgb(155, 166, 170);
$veryLightGray: rgb(200, 200, 200);

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
  padding-bottom: 5rem;
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
  border: 2px solid rgb(80, 80, 80);
  width: 794px;
  height: 1133px;
  padding: 1rem;
}
</style>
