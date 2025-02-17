<template>
  <v-container class="accordionMenu">
    <v-expansion-panels>
      <v-expansion-panel v-for="item in items" :key="item.title" class="accordionMenu_Panel">
        <v-expansion-panel-title>
          <v-icon class="accordionMenu_Icon">{{ item.icon }}</v-icon> {{ item.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-if="Array.isArray(item.content)">
            <div v-for="(section, index) in item.content" :key="index" class="accordionMenu_section">
              <h4 v-if="section.heading" class="accordionMenu_sectionHeading">{{ section.heading }}</h4>
              <div v-for="(para, idx) in section.paragraphs" :key="idx" class="accordionMenu_sectionText">
                <p>{{ para }}</p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="accordionMenu_Iframe" v-html="item.content"></div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, toNative } from 'vue-facing-decorator';

interface AccordionSection {
  heading?: string;
  paragraphs: string[];
}

interface AccordionItem {
  title: string;
  icon: string;
  content: string | AccordionSection[];
}

@Component
class AccordionMenu extends Vue {
  @Prop({ type: Array, required: true }) items!: AccordionItem[];
}

export default toNative(AccordionMenu);
</script>

<style lang="scss" scoped>
.accordionMenu {
  position: relative;
  margin: 0 auto;

  &_Panel {
    background-color: #272727;
    color: #fff;
    margin: 5px;
  }

  &_Icon {
    color: #ED812F;
    margin-right: 8px;
  }

  &_section {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    text-align: justify;
  }

  &_sectionHeading {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    color: #ED812F;
    padding-top: 10px;
  }

  &_sectionText {
    font-size: 0.95rem;
    margin: 0;
    padding-bottom: 10px;
  }

  &_Iframe {
    height: 850px;
  }
}
</style>
