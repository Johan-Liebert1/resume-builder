<template>
  <div class="header">
    <h1 class="name">Pragyan Poudyal</h1>
    <div class="jobname blue bold">Software Engineer</div>
    <div class="info">
      <div class="phone flex"><SVG :iconName="iconNames.PHONE" /> +919818868755</div>
      <div class="email flex">
        <SVG :iconName="iconNames.EMAIL" />pragyanpoudyal41999@gmail.com
      </div>
      <div class="email flex">
        <SVG :iconName="iconNames.GITHUB" /> <a>https://www.github.com/Johan-Liebert1</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ICON_NAMES } from "@/constants/constants";
import { defineComponent } from "vue";
import SVG from "./SVG.vue";

export default defineComponent({
  components: { SVG },
  data() {
    return {
      iconNames: ICON_NAMES
    };
  }
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.name {
  font-family: Arial, serif;
  font-size: 24.1px;
  font-weight: bold;
}

.jobname {
  margin: 0.5rem 0;
}

.info {
  width: 100%;
  font-size: 12px;
  color: rgb(55, 66, 70);
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  .flex svg {
    margin-right: 0.5rem;
  }
}
</style>
