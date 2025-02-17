<template>
  <v-container class="siteFooter">
    <v-row justify="center">
      <v-col cols="12">
        <v-img :src="footerImage" />
      </v-col>
      <v-col cols="12" class="siteFooter_Text">
        <p>© {{ new Date().getFullYear() }} Amadeusz Dłużniewski</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, toNative, Prop } from 'vue-facing-decorator'
import myFooter from '@/assets/images/footer.webp';

@Component
class SiteFooter extends Vue {
  @Prop({ type: String, default: myFooter }) footerImage!: string
}

export default toNative(SiteFooter)
</script>

<style lang="scss" scoped>
.siteFooter {
  padding: 20px 0;
  text-align: center;
  margin: 0 auto;
  position: relative;

  &_Text {
    padding-top: 25px;
    color: #ffffff !important;
  }
}
</style>
