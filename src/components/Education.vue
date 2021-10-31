<template>
  <div>
    <SectionHeader :headerText="'Education'" />
    <div class="container">
      <div class="left">
        <p class="bold">Bachelor of Technology</p>
        <p class="blue bold college">Indraprastha University</p>
        <p class="date"><SVG :iconName="iconNames.CALENDAR" /> 2018 - 2022</p>
        <p>Major - Computer Science & Engineering</p>
      </div>
      <div class="right">
        <p>CGPA</p>
        <p><span class="blue bold">9.03</span> / <span class="bold">10.0</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ICON_NAMES } from "@/constants/constants";
import { defineComponent } from "vue";
import SectionHeader from "./SectionHeader.vue";
import SVG from "./SVG.vue";

export default defineComponent({
  components: { SectionHeader, SVG },
  data() {
    return {
      iconNames: ICON_NAMES
    };
  }
});
</script>

<style lang="scss" scoped>
$gray: rgb(55, 66, 70);
$lightGray: rgb(155, 166, 170);

.container {
  color: $gray;
  display: flex;
  text-align: left;
  justify-content: space-between;

  p {
    margin-bottom: 0.3rem;
    font-size: 14px;
  }

  .date {
    font-size: 12px;
    svg {
      margin-right: 1rem;
    }
  }
}

.right {
  padding-left: 1.5rem;
  border-left: 2px solid $lightGray;
}
</style>
