<!-- This component will be skills and roles -->
<script setup>
import { hats } from '../data/hats.json';

</script>

<template>
    <div class="hatContainer w-full flex gap-x-1.5">
        <div v-for="hat in hats" class="hat transition-transform ease-in-out w-1/3 hover:w-2/3 rounded-2xl bg-black text-white border-pink-400 border border-double shadow-lg flex-col mx-1.5 p-2">
            <i class="fas {{hat.logo}} mx-auto"></i>
            <h2 class="heading">{{hat.title}}</h2>
            <div v-if="hat.skills" class="grid grid-cols-4 justify-center items-center mx-auto space-y-2">
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