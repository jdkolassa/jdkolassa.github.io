<!-- This component will be skills and roles -->
<script setup>
import { hats } from "../data/hats.json";
</script>

<template>
  <h1 class="text-white text-center mx-auto">My Hats</h1>
  <div class="hatContainer w-2/3 mx-auto my-12">
    <ul
      class="text-sm font-medium text-center"
      role="tablist"
      data-tabs-toggle="#hatTabContent"
    >
      <li class="w-full tabButton" role="presentation" v-for="hat in hats">
        <button
          id="{{hat.title}}-tab"
          data-tabs-target="#{{hat.title}}"
          role="tab"
          aria-selected="false"
          class="inline-block p-4 w-full"
        >
          {{ hat.title }}
        </button>
      </li>
    </ul>
    <div id="hatTabContent">
      <div
        v-for="hat in hats"
        class="hidden p-2 border-t-2 border-or_cyan"
        id="{{hat.title}}"
        role="tabpanel"
        aria-labelledby="{{hat.title}}-tab"
      >
        <div class="flex flex-row">
          <div>
            <ul>
              <li v-for="detail in hat.details">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="hatContainer flex flex-col w-2/3 gap-y-5 mx-auto my-12">
        <div v-for="hat in hats" class="hat w-full my-3 md:mx-1.5 md:my-px p-2">
            <i class="fas {{hat.logo}} mx-auto"></i>
            <h2 class="heading">{{hat.title}}</h2>
            <div v-if="hat.skills" class="grid grid-cols-6 justify-center items-center mx-auto gap-y-2">
                <i v-for="item in hat.skills" class="fab lg:text-2xl sm:text-sm md:text-md justify-self-center" v-bind:class="`${item}`"></i>
            </div>
            <ul v-for="item in hat.details" class="mt-2">
                <li>{{item}}</li>
            </ul>
        </div>
    </div> -->
</template>

<script>
export default {
  name: "Hats",
};
</script>

<style scoped>
.hat {
  transition: width 500ms;
  /* From https://css.glass */
  background: rgba(84, 19, 136, 0.42);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  border: 1px solid rgba(84, 19, 136, 1);
  color: white;
}

.hatContainer:nth-child(2) {
  text-align: right;
}
</style>
