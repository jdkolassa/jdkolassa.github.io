<!-- This component will be skills and roles -->
<script setup>
import { hats } from '../data/hats.json';

</script>

<template>
    <h1 class="text-white text-center mx-auto">My Hats</h1>
    <div class="hatContainer w-2/3 md:flex gap-x-1.5 mx-auto my-12">
        <div v-for="hat in hats" class="hat transition-transform ease-in-out md:w-1/3 md:hover:w-2/3 rounded-2xl bg-black text-white border-pink-400 border border-double shadow-lg flex-col my-3 md:mx-1.5 md:my-px  p-2">
            <i class="fas {{hat.logo}} mx-auto"></i>
            <h2 class="heading">{{hat.title}}</h2>
            <div v-if="hat.skills" class="grid grid-cols-6 justify-center items-center mx-auto space-y-2">
                <i v-for="item in hat.skills" class="fab lg:text-2xl sm:text-sm justify-self-center" v-bind:class="`${item}`"></i>
            </div>
            <ul v-for="item in hat.details" class="mt-2">
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hats"
    };   
</script>

<style scoped>
    .hat {
        transition: width 500ms;
    }
</style>