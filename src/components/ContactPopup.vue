<template>
  <v-dialog v-if="internalPopupState" v-model="internalPopupState" max-width="450px" persistent @click:outside="handleOutsideClick">
    <v-card class="contactPopup" :class="{ closing: isClosing }">
      <v-card-title class="contactPopup_Title">
        Contact Me
        <v-btn icon @click="closePopup" class="contactPopup_CloseBtn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitForm">
          <v-text-field v-model="formData.name" label="Name" :rules="[rules.required]" required/>
          <v-text-field v-model="formData.email" label="Email" type="email" :rules="[rules.required, rules.email]" required/>
          <v-text-field v-model="formData.subject" label="Subject" :rules="[rules.required]" required/>
          <v-textarea v-model="formData.message" label="Message" rows="4" :rules="[rules.required]" required/>
          <v-alert v-if="confirmation" type="success" class="mt-2" text="Thank you for your message. I'll get back to you shortly."/>
          <v-btn type="submit" class="contactPopup_SendBtn" color="primary">Send Message</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, toNative, Watch } from 'vue-facing-decorator';

@Component
class ContactPopup extends Vue {
  @Prop({ type: Boolean, required: true }) isPopupOpen!: boolean;
  
  internalPopupState = this.isPopupOpen;
  isClosing = false;
  confirmation: boolean = false;

  formData = { name: '', email: '', subject: '', message: '' };

  rules = {
    required: (value: string) => !!value || 'This field is required.',
    email: (value: string) =>
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]+$/.test(value) || 'Invalid e-mail format.'
  };

  @Watch('isPopupOpen')
  onPopupOpenChange(newVal: boolean) {
    this.internalPopupState = newVal;
  }

  async submitForm() {
    const form = this.$refs.form as any;
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message || !form.validate()) {
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mvgpjywj', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.formData) });
      if (response.ok) {
        this.confirmation = true;
        this.clearForm();
        setTimeout(() => (this.confirmation = false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  }

  handleOutsideClick() {
    this.closePopup();
  }

  closePopup() {
    this.$emit('update:isPopupOpen', false);
    this.internalPopupState = false;
    this.clearForm();
  }

  clearForm() {
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => {
      (this.$refs.form as any)?.resetValidation();
    }, 100);
  }
}

export default toNative(ContactPopup);
</script>

<style lang="scss" scoped>
.contactPopup {
  padding: 20px;
  background-color: #222;
  color: white;
  width: 100%;
  max-width: 450px;
  margin: auto;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
  border-radius: 15px !important;

  &.closing {
    opacity: 0;
    transform: scale(0.9);
  }

  &_Title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: #ED812F;
  }

  &_SendBtn {
    background-color: #ED812F !important;
    color: white !important;
    margin-top: 10px;
  }

  &_CloseBtn {
    background-color: transparent !important;
    color: white !important;
  }

  &_Confirmation {
    color: #ED812F;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
