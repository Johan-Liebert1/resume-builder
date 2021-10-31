<template>
  <div class="section-container">
    <LeftSection />
    <RightSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSection from "./LeftSection.vue";
import RightSection from "./RightSection.vue";

export default defineComponent({
  components: { LeftSection, RightSection },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.section-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
