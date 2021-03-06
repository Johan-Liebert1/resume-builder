<template>
  <div class="container">
    <SectionHeader :headerText="header" />
    <div class="list-item" v-for="item in list" :key="item.name">
      <h3 :style="{ color: '#130f40' }">{{ item.name }}</h3>
      <div v-if="item.links" class="links">
        Links: <a :href="item.links.live" v-if="item.links.live" target="_blank">Live</a>
        <a :href="item.links.github" v-if="item.links.github" target="_blank">GitHub</a>
      </div>
      <div v-if="item.company" class="company-time">
        <p class="blue bold company">{{ item.company }}</p>
        <p class="time">
          <SVG :iconName="iconNames.CALENDAR" /> {{ item.startDate }} - {{ item.endDate }}
        </p>
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
import SVG from "./SVG.vue";
import { ICON_NAMES } from "@/constants/constants";

export default defineComponent({
  components: { SectionHeader, SVG },
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
  data() {
    return {
      iconNames: ICON_NAMES
    };
  }
});
</script>

<style scoped lang="scss">
$gray: rgb(55, 66, 70);

.container {
  width: 100%;
  text-align: left;
  color: $gray;
}

.list-item {
  margin-bottom: 1rem;
  font-size: 12px;
}

.company-time {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.25rem 0;

  .company {
    margin-right: 1rem;
  }

  .time {
    display: flex;
    align-items: baseline;

    svg {
      margin-right: 0.5rem;
    }
  }
}

.links {
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
  p {
    line-height: 0.97rem;
    margin: 0.2rem 0;
    text-align: justify;
  }
}
</style>
