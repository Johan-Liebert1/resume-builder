<template>
  <div class="left-section">
    <ProjectsAndExperience :header="project" :type="project" :list="allProjects" />
    <Education />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsAndExperience from "./ProjectsAndExperience.vue";
import { EXPERIENCE, PROJECT } from "@/constants/constants";
import allProjects from "@/constants/projects";
import allExperiences from "@/constants/experience";
import Education from "./Education.vue";

export default defineComponent({
  components: { ProjectsAndExperience, Education },
  data() {
    return {
      project: PROJECT,
      experience: EXPERIENCE,
      allProjects,
      allExperiences
    };
  }
});
</script>

<style scoped>
.left-section {
  width: 47.5%;
}
</style>
