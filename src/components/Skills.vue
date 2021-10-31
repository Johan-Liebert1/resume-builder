<template>
  <div>
    <SectionHeader :headerText="'Skills'" />

    <div
      v-for="skillObj in allSkills"
      :key="skillObj.type"
      class="skills-container-container"
    >
      <p class="blue bold">{{ skillObj.type }}</p>
      <div class="skills-container">
        <div class="skill" :key="skill" v-for="skill in skillObj.skills">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionHeader from "./SectionHeader.vue";

import allSkills from "@/constants/skills";

export default defineComponent({
  components: { SectionHeader },
  data() {
    return {
      allSkills
    };
  }
});
</script>

<style scoped lang="scss">
$gray: rgb(55, 66, 70);
$lightGray: rgb(155, 166, 170);
$veryLightGray: rgb(200, 200, 200);

.skills-container-container {
  text-align: left;
  color: $gray;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px dotted $veryLightGray;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
}

.skill {
  font-size: 12px;
  margin: 0.25rem 1rem 0.25rem 0;
  padding: 0 0.2rem 0.2rem 0.2rem;
  border-bottom: 2px solid $lightGray;
}
</style>
