<!-- This component will render a slider of my previous employment history-->
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

import { positions } from '../data/positions.json';
</script>


<template #slides>
<h1 class="text-white text-center mx-auto">My History</h1>

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
  class="md:overflow-visible"
>
  <swiper-slide v-for="position in positions" :key="position" class="job rounded-2xl text-white border-cyan-400 border border-double flex-col mx-2 p-2">
    <h1 class="heading">{{position.title}}</h1>
      <div class="text-center">
        <div class="jobcard text-center">
            <img :src="'/src/assets/' + `${position.logo}` + '.jpeg'" class="mx-auto w-1/4">
            <h4 class="heading">{{position.employer}}</h4>
            <ul class="list-none list-outside">
                <li class="font-sans">{{position.dates}}</li>
                <li class="font-sans">{{position.location}}</li>
            </ul>
        </div>
        <ul class="details list-outside mx-auto w-1/2"><!-- the bullet list of what I did, should wrap around the employer section if long -->
            <li v-for="item in position.details" class="break-normal max-w-md my-2">{{item}}</li>
        </ul>
          
      </div>
      </swiper-slide>
</swiper>


</template>

<style scoped>

.job {
  background: rgba(146,0,117,0.15);
}

.details {
  list-style-image: url("../assets/point_24x24.png");
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