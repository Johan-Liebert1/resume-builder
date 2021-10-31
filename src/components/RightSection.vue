<template>
  <div class="right-section">
    <Skills />
    <ProjectsAndExperience
      :header="experience"
      :type="experience"
      :list="allExperiences"
    />
  </div>
</template>

<script lang="ts">
import { EXPERIENCE } from "@/constants/constants";
import { defineComponent } from "vue";
import Skills from "./Skills.vue";
import ProjectsAndExperience from "./ProjectsAndExperience.vue";
import allExperiences from "@/constants/experience";

export default defineComponent({
  components: { Skills, ProjectsAndExperience },
  data() {
    return {
      experience: EXPERIENCE,
      allExperiences
    };
  }
});
</script>

<style scoped>
.right-section {
  width: 47.5%;
}
</style>
