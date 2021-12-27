<!-- This component will be skills and roles -->
<script setup>
import hats from '../data/hats.json';
export default {
    hats: hats
}
</script>

<template>
    <div>
        <div v-for="hat in $options.hats" class="w-1/3 hover:w-2/3 rounded-lg">
            <i class="fas {{hat.icon}}"></i>
            <h2>{{hat.title}}</h2>
            <ul v-for="item in hat.details" class>
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>