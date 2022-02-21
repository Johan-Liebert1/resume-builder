<template>
  <SectionHeader :headerText="header" />

  <div class="list-item" v-for="item in certifications" :key="item.name">
    <div class="flex-header">
      <h3 class="blue bold" :style="{ textAlign: 'left' }">
        {{ item.name }}
      </h3>
    </div>

    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
      <p class="authority bold">{{ item.certificationAuthority }}</p>
      <p v-if="item.certificateLink">
        <a target="_blank" :href="item.certificateLink">
          <SVG :iconName="iconNames.LINK" /> Certificate
        </a>
      </p>
    </div>

    <p class="time"><SVG :iconName="iconNames.CALENDAR" /> {{ item.duration }}</p>

    <div v-if="item.certificationAuthority" class="company-time"></div>
    <div class="description">
      <p v-for="(desc, idx) in item.description" :key="idx">• {{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { CERTIFICATIONS, ICON_NAMES } from "@/constants/constants";
import { defineComponent } from "vue";
import SectionHeader from "./SectionHeader.vue";
import SVG from "./SVG.vue";

export default defineComponent({
  components: { SectionHeader, SVG },
  data() {
    return {
      header: CERTIFICATIONS,
      iconNames: ICON_NAMES,
      certifications: [
        {
          name: "My certification",
          certificationAuthority: "Coursera",
          duration: "6 weeks",
          certificateLink: "google.com",
          description: ["I learnt this", "and this", "and this"]
        },
        {
          name: "My certification",
          certificationAuthority: "Coursera",
          duration: "6 weeks",
          certificateLink: "google.com",
          description: ["I learnt this", "and this", "and this"]
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
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

.flex-header {
  margin-bottom: 8px;
}

.time {
  display: flex;
  align-items: baseline;
  color: $gray;

  svg {
    margin-right: 0.5rem;
  }
}

.company-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.25rem 0;
}

.authority {
  text-align: left;
  margin-bottom: 6px;
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
