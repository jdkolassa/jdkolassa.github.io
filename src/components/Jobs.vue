<!-- This component will render a slider of my previous employment history-->
<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { positions } from '../data/positions.json';
</script>


<template>

<Carousel :itemsToShow="1.5" :wrapAround="true" class="w-full">
    <Slide v-for="position in positions" :key="position" class="rounded-2xl bg-black text-white border-cyan-400 border border-double shadow-lg flex-col mx-1.5 p-2">
      <h1 class="heading">{{position.title}}</h1>
      <div>
        <div class="jobcard border-2 border-red-900 text-center">
            <img :src="'/src/assets/' + `${position.logo}` + '.jpeg'" class="mx-auto w-1/4">
            <h4 class="heading">{{position.employer}}</h4>
            <ul class="list-none list-outside">
                <li class="font-sans">{{position.dates}}</li>
                <li class="font-sans">{{position.location}}</li>
            </ul>
        </div>
        <ul class="details list-outside"><!-- the bullet list of what I did, should wrap around the employer section if long -->
            <li v-for="item in position.details" class="break-normal max-w-md my-2">{{item}}</li>
        </ul>
        <!-- <a href='https://www.freepik.com/vectors/arrow'>Arrow vector created by pch.vector - www.freepik.com</a> -->
          
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>

.details {
  list-style-image: url("../assets/arrow_smol.png");
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>



<script>
export default {
  name: "Jobs"
};
</script>