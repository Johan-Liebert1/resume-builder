<template>
  <div class="container">
    <SectionHeader :headerText="header" />
    <div class="list-item" v-for="item in list" :key="item.name">
      <h3>{{ item.name }}</h3>
      <div v-if="item.links" class="links">
        Links: <a :href="item.links.live" v-if="item.links.live" target="_blank">Live</a>
        <a :href="item.links.github" v-if="item.links.github" target="_blank">GitHub</a>
      </div>
      <div class="description">
        <p v-for="(desc, idx) in item.description" :key="idx">• {{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionHeader from "./SectionHeader.vue";

import { ProjectExperience } from "../types/types";

export default defineComponent({
  components: { SectionHeader },
  props: {
    header: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    list: {
      type: Array as PropType<ProjectExperience[]>,
      required: true
    }
  },
  mounted() {
    console.log(this.list);
  }
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  text-align: left;
  color: rgb(55, 66, 70);
}

.list-item {
  margin-bottom: 1rem;
}

.links {
  font-size: 12px;
  margin: 0.25rem 0;

  a {
    text-decoration: none;
    color: inherit;
    text-decoration: underline;
    margin-right: 1rem;
    text-transform: uppercase;
  }
}

.description {
  font-size: 12px;

  p {
    margin: 0.2rem 0;
    text-align: justify;
  }
}
</style>
