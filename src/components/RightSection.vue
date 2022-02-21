<template>
  <div class="right-section">
    <Skills />
    <ProjectsAndExperience
      :style="{ display: 'none' }"
      :header="experience"
      :type="experience"
      :list="allExperiences"
    />
    <CertificationSection />
  </div>
</template>

<script lang="ts">
import { EXPERIENCE } from "@/constants/constants";
import { defineComponent } from "vue";
import Skills from "./Skills.vue";
import ProjectsAndExperience from "./ProjectsAndExperience.vue";
import CertificationSection from "./CertificationSection.vue";
import allExperiences from "@/constants/experience";

export default defineComponent({
  components: { Skills, ProjectsAndExperience, CertificationSection },
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
