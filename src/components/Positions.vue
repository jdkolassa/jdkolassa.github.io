<!-- This component will render a slider of my previous employment history-->
<script setup>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import positions from '../data/positions.json';
</script>

<template>

<carousel-3d :count="positions.length" class="mx-auto w-full flex">
    <slide v-for="(position, i) in positions" :index="i" class="rounded-2xl bg-pink-100 shadow-lg">
      <h1>{{position.title}}</h1>
      <div class="md:container mx-auto">
        <div class="jobcard float-left">
            <img src={{position.logo}} class="">
            <h4 class="font-serif">{{position.employer}}</h4>
            <ul class="list-none list-outside">
                <li class="font-sans">{{position.dates}}</li>
                <li class="font-sans">{{position.location}}</li>
            </ul>
        </div>
        <ul class="list-disc list-outside"><!-- the bullet list of what I did, should wrap around the employer section if long -->
            <li v-for="item in position.details">{{item}}</li>
        </ul>
          
      </div>
    </slide>
  </carousel-3d>


</template>