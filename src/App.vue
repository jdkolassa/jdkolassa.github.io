<script setup>
// This starter template is using Vue 3 <script setup> SFCs;
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup;
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
  <Description></Description>
  <hr>
  <Hats></Hats>
  <hr>
  <Jobs></Jobs>
  <hr>
  <Contact></Contact>
</template>

<style scoped>
hr {
  margin: 10px 0;
}
</style>
