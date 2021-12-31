<!-- This component will be skills and roles -->
<script setup>
import hats from '../data/hats.json';
</script>

<template>
    <div class="hats">
        <div v-for="hat in hats" class="w-1/3 hover:w-2/3 rounded-lg bg-pink-100 shadow-lg">
            <i class="fas {{hat.icon}} mx-auto"></i>
            <h2 class="heading">{{hat.title}}</h2>
            <ul v-for="item in hat.details" class>
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>