<script setup>
// This starter template is using Vue 3 <script setup> SFCs;
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup;
import IntroLogo from './components/IntroLogo.vue';
import Contact from './components/Contact.vue';
import Description from './components/Description.vue';
import Hats from './components/Hats.vue';
import Jobs from './components/Jobs.vue';
</script>

<script>
  export default {
    name: "App",
    components: {
      Contact, Description, Hats, Jobs,
    }
};
</script>

<template>
  <IntroLogo></IntroLogo>
  <Description class="my-12"></Description>
  <Hats class="my-12"></Hats>
  <Jobs class="my-12"></Jobs>
  <Contact class="my-12"></Contact>
</template>

<style scoped>
#app {
  background-image: none;
  background-color: transparent;
}

hr {
  margin: 10px 0;
}
</style>
