<!-- This component will render a slider of my previous employment history-->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

import getSrc from '../composable/useAssets.js';

import { positions } from '../data/positions.json';
</script>


<template #slides>
<h1 class="heading text-white text-center mx-auto">My History</h1>

<swiper
  :effect="'coverflow'"
  :grabCursor="true"
  :centeredSlides="true"
  :slidesPerView="'auto'"
  :coverflowEffect="{
      rotate: 90,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
  :pagination="true"
  class=""
>
  <swiper-slide v-for="position in positions" :key="position" class="w-1/2 job rounded-2xl text-white border-cyan-400 border border-double flex flex-col sm:flex-row mx-2 p-4">
    <div class="text-center">
      <img :src="getSrc(position.logo)" class="">
      <br>
      <h4>{{position.employer}}</h4>
    </div>
    <hr class="my-2.5 mx-1 sm:my-1 sm:mx-2.5 w-11/12 sm:w-4 sm:h-5/6">
    <div>
      <span class="font-sans">{{position.location}}</span>&nbsp;&nbsp;<img src="../assets/point_24x24.png" class="inline">&nbsp;&nbsp;<span class="font-sans">{{position.dates}}</span>
      <h1 class="heading">{{position.title}}</h1>
      <div class="flex flex-row sm:flex-col">
        <i v-for="skill in position.skills" class="fab lg:text-2xl sm:text-sm md:text-md justify-self-center" v-bind:class="`${skill}`" />
      </div>
    </div>
  </swiper-slide>
</swiper>


</template>

<style scoped>

.job {
  background: rgba(146,0,117,0.15);
  transition: background 0.5s ease;
}

.swiper-slide-active{
  background: rgba(146,0,117,0.85);
  
}

.details {
  list-style-image: url("../assets/point_24x24.png");
}

hr {
  border: 5px solid #d40078;
  border-radius: 1rem;
  box-shadow: 0 0 5px #d40078;
}

hr:before{
  content: '';
  position: absolute;
  border: 2px solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 2px #fff;
}
</style>



<script>
export default {
  name: "Jobs",
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {};
  },
  methods: {},
};
</script>