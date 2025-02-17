<template>
  <v-container class="profileSection">
    <div class="profileSection_ImageWrapper">
      <v-img :src="image" class="profileSection_Image"/>
      <v-row class="profileSection_Socials">
        <v-col cols="auto" v-for="social in socials" :key="social.value">
          <v-btn class="profileSection_Socials_Btn" :icon="social.value" :href="social.route" target="_blank" rel="noopener noreferrer" rounded="circle"/>
        </v-col>
      </v-row>
    </div>
    <v-row class="profileSection_Name">
      <v-col cols="auto">
        <h2>{{ name }}</h2>
      </v-col>
      <v-col cols="auto">
        <v-icon class="profileSection_Name_Icon">mdi-code-block-tags</v-icon>
      </v-col>
    </v-row>
    <p class="profileSection_Subtitle">{{ description }}</p>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, toNative } from 'vue-facing-decorator'
import myImage from '@/assets/images/me.webp';

@Component
class ProfileSection extends Vue {
  @Prop({ type: String, required: true }) name!: string
  @Prop({ type: String, required: true }) description!: string
  @Prop({ type: String, default: myImage }) image!: string
  @Prop({ type: Array, required: true }) socials!: { value: string; route: string }[]
}

export default toNative(ProfileSection)
</script>

<style lang="scss" scoped>
.profileSection {
  position: relative;
  text-align: center;
  margin: 0 auto;
  padding: 0 !important;

  &_Image {
    width: 100%;
    height: auto;
  }

  &_Name {
    margin-top: 1rem;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    &_Icon {
      color: #ED812F;
    }
  }

  &_Subtitle {
    font-style: italic;
    color: #ccc;
  }

  &_ImageWrapper {
    position: relative;
  }

  &_Socials {
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);

    &_Btn {
      background-color: transparent;
      transition: 0.3s;
      color: #fff;
      box-shadow: none;

      &:hover {
        transform: scale3d(1.2, 1.2, 1.2);
        background-color: #ED812Faa !important;
        box-shadow: 0 2px 10px rgba(255, 165, 0, 0.3);
      }
    }
  }

  .v-col {
    padding: 8px !important;
  }
}
</style>
