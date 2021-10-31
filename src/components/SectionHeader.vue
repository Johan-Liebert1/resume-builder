<template>
  <div class="section-header">
    <h2>{{ headerText }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    headerText: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  width: 100%;
  border-bottom: 3px solid black;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;

  h2 {
    text-transform: uppercase;
    font-weight: 900;
  }
}
</style>
