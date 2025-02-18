<template>
  <v-container class="contactButtons">
    <v-btn block class="mb-2 contactButtons_Btn" :href="'tel:+48667919274'">
      <v-icon left class="contactButtons_Icon">mdi-phone</v-icon>
      Call Me
    </v-btn>
    <v-btn block class="mb-2 contactButtons_Btn" :href="contact" target="_blank">
      <v-icon left class="contactButtons_Icon">mdi-card-account-phone</v-icon> Add Me to Contacts on LinkedIn
    </v-btn>
    <v-btn block class="contactButtons_Btn" @click="showPopup">
      <v-icon left class="contactButtons_Icon">mdi-email-arrow-right</v-icon>
      Get in Touch
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, toNative } from 'vue-facing-decorator'

@Component
class ContactButtons extends Vue {
  @Prop({ type: String, required: true }) phone!: string
  @Prop({ type: String, required: true }) contact!: string

  showPopup() {
    this.$emit('togglePopup', true);
  }
}

export default toNative(ContactButtons)
</script>

<style lang="scss" scoped>
.contactButtons {
  position: relative;
  margin: 0 auto;

  &_Btn {
    background-color: #272727;
    justify-content: left;
    color: #fff;
    padding: 20px;
  }

  &_Icon {
    color: #ED812F;
    margin-right: 8px;
  }

  @media (max-width: 450px) {
    &_Btn {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 400px) {
    &_Btn {
      font-size: 0.7rem;
    }
  }
}
</style>
