<!-- This component will render a slider of my previous employment history-->
<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { positions } from '../data/positions.json';
</script>


<template #slides>
<h1 class="text-white text-center mx-auto">My History</h1>

<Carousel :itemsToShow="1" :wrapAround="true" :snapAlign="start">
    <Slide v-for="position in positions" :key="position" class="job rounded-2xl text-white border-cyan-400 border border-double flex-col mx-2 p-2">
      <h1 class="heading">{{position.title}}</h1>
      <div>
        <div class="jobcard text-center">
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

.job {
  background: rgba(146,0,117,0.15);
}

.details {
  list-style-image: url("../assets/point_24x24.png");
}
/* .carousel__slide > .carousel__item {
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
} */
</style>



<script>
export default {
  name: "Jobs",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>