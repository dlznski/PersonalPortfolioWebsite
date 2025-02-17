<template>
  <v-app class="app">
    <div class="app_Wrapper">
      <v-container class="app_Container" :class="{ blurred: isPopupOpen }">
        <ProfileSection name="Amadeusz Dłużniewski" description="Game Developer | Frontend Developer" :socials="socials"/>
        <ContactButtons phone="+48667919274" contact="https://www.linkedin.com/in/dlznski" @togglePopup="togglePopup"/>
        <PortfolioGallery :projects="projects"/>
        <AccordionMenu :items="accordionItems"/>
        <SiteFooter/>
      </v-container>
      <ContactPopup :isPopupOpen="isPopupOpen" @update:isPopupOpen="togglePopup"/>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileSection from '@/components/ProfileSection.vue'
import ContactButtons from '@/components/ContactButtons.vue'
import PortfolioGallery from '@/components/PortfolioGallery.vue'
import AccordionMenu from '@/components/AccordionMenu.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import ContactPopup from '@/components/ContactPopup.vue'

export default defineComponent({
  components: { 
    ProfileSection, 
    ContactButtons, 
    PortfolioGallery, 
    AccordionMenu, 
    SiteFooter, 
    ContactPopup 
  },
  data() {
    return {
      isPopupOpen: false,
      socials: [
        { value: 'mdi-linkedin', route: 'https://www.linkedin.com/in/dlznski' },
        { value: 'mdi-github', route: 'https://github.com/dlznski' }
      ],
      projects: [
        { title: 'Bobi The Slayer', image: '/Bobi.webp', technology: 'Unity', link: 'https://github.com/dlznski/Unity_3D_Project' },
        { title: 'ChronoGate', image: '/Gate.webp', technology: 'Unity', link: 'https://mygame.com/voxelworld' },
        { title: 'This Site', image: '/Site.webp', technology: 'Vue.js 3', link: 'https://mygame.com/voxelworld' }
      ],
      accordionItems: [
        {
          title: 'About me',
          icon: 'mdi-account',
          content: [
            {
              heading: 'About Me',
              paragraphs: [
                'I am a third-year computer science student eager to gain practical experience in the IT industry. Since the beginning of my studies, I have built a strong foundation in C# programming (especially in the context of Unity) and web development (primarily using Vue.js). I continuously expand my knowledge by participating in academic projects, independently seeking new challenges, and undertaking internships to gain experience with commercial projects.'
              ]
            },
            {
              heading: 'Experience in Web Application Development',
              paragraphs: [
                'My interests largely focus on frontend technologies, particularly Vue.js, where I have experience writing responsive web applications. I also place great emphasis on performance optimization and refactoring, ensuring that applications are not only functional but also fast and easy to maintain. I have commercial experience working on a project migrating an application from Vue 2 to Vue 3, including further development. I built the website where you can read more about me using Vue.js as well.'
              ]
            },
            {
              heading: 'Passion for Game Development',
              paragraphs: [
                'In addition to web development, I create and develop games using the Unity and Unreal Engine 5 engines, and I am currently exploring the capabilities of the Godot engine. I am interested in both technical aspects and level design, as I strive to create balanced and engaging experiences for players.',
                'Bobi The Slayer – An FPS game based on finding scrolls on a map that serve as keys to complete the game, with enemies positioned in various locations.',
                'ChronoGate – A 2D platformer featuring two interesting mechanics. The first is time reversal, where the player can set the current phantom position of the character to return to it after a few seconds, with smooth animations required to solve various logic puzzles.',
                'Fishing VR – A fishing game designed for VR headsets. It offers the possibility of catching several species of fish, with a quick time event-based fishing mechanic where the player must stop a moving slider at the right moment to catch a fish.',
                'Omen of Suffering – A game inspired by the Souls-like genre that helped me understand how to create more advanced enemy AI and develop combat patterns. This title involves navigating a dungeon filled with enemies to reach the boss chamber and face the boss to complete the game.'
              ]
            },
            {
              heading: 'Development and Goals',
              paragraphs: [
                'As a determined and continuously knowledge-hungry individual, I believe in the power of teamwork and the mutual exchange of skills. I view participation in projects – both web-based and game development – as the best way to develop both technical abilities and soft skills.'
              ]
            },
            {
              heading: 'Why It’s Worth Collaborating with Me',
              paragraphs: [
                'Practical Approach: I seek opportunities to practically apply the knowledge I have acquired while simultaneously helping the team achieve common goals.',
                'Education and Passion: Through involvement in academic projects and individual initiatives, I always strive to combine theory with practice.',
                'Adaptability: I quickly learn new tools and technologies, eagerly take on unconventional tasks, and am not afraid of challenges.'
              ]
            },
            {
              paragraphs: [
                'My goal is to work on projects that will not only allow me to develop my skills and knowledge, but also contribute to creating valuable and innovative solutions in the IT world.',
              ]
            },
          ]
        },
        {
          title: 'Schedule a Meeting',
          icon: 'mdi-calendar',
          content: '<iframe src="https://calendly.com/dluzniewskiamadeusz/feel-free-to-contact-me?amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=ffbf35" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>'
        },
      ]
    }
  },
  methods: {
    togglePopup(value: boolean) {
      this.isPopupOpen = value;
    }
  }
})
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  background-color: #0b0b0b;
  width: 100vw;

  &_Wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &_Container {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    padding: 0 24px !important;
    transition: filter 0.3s ease-in-out;
  }

  &_Gif {
    position: fixed;
    bottom: 25px;
    left: 30%;
    width: 100px;
  }
}

.blurred {
  filter: blur(12px);
}
</style>
