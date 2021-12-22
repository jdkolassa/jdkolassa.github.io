<!-- This component will render a slider of my previous employment history-->
<script setup>
import { Carousel3d, Slide } from 'vue-carousel-3d';
</script>

<template>

<carousel-3d :count="slides.length">
    <slide v-for="(slide, i) in slides" :index="i" class="rounded-2xl bg-pink-100">
      <h1>{{slide.title}}</h1>
      <div class="md:container mx-auto">
        <div class="jobcard float-left">
            <img src={{slide.logo}} class="">
            <h4 class="font-serif">{{slide.employer}}</h4>
            <ul class="list-none list-outside">
                <li class="font-sans">{{slide.dates}}</li>
                <li class="font-sans">{{slide.location}}</li>
            </ul>
        </div>
        <p>{{slide.details}}</p> <!-- the bullet list of what I did, should wrap around the employer section if long -->
          
      </div>
    </slide>
  </carousel-3d>


</template>