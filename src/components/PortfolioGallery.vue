<template>
  <v-container class="portfolioGallery">
    <h3 class="portfolioGallery_H3">MY PROJECTS</h3>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" sm="6">
        <v-card class="portfolioGallery_GameCard">
          <v-img :src="project.image" height="200px" contain/>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>{{ project.technology }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" :href="project.link" target="_blank">See More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, toNative } from 'vue-facing-decorator'

@Component
class PortfolioGallery extends Vue {
  @Prop({ type: Array, required: true }) projects!: { title: string; image: string; technology: string; link: string }[]
}

export default toNative(PortfolioGallery)
</script>

<style lang="scss" scoped>
.portfolioGallery {
  position: relative;
  margin: 0 auto;

  &_H3 {
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;
  }

  &_GameCard {
    background-color: #121212;
    color: #ffffff;
    border-radius: 10px;
  }
}
</style>
