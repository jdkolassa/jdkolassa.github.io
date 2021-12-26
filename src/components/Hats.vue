<!-- This component will be skills and roles -->
<script setup>
import hats from '../data/hats.json';
export default {
    hats: hats
}
</script>

<template>
    <div>
        <div v-for="hat in $options.hats">
            <i class="fas {{hat.icon}}"></i>
            <h2>{{hat.title}}</h2>
            <ul v-for="item in hat.details">
                
            </ul>
        </div>
    </div>
</template>