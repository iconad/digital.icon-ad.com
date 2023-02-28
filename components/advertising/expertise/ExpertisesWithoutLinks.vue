<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-1 border-4 border-l-0 border-r-0 border-black">
    <div v-for="(item, i) in expertises" :key="item.id" class="expertises-grid h-auto md:h-screen-70 lg:h-screen-60 bg-white group flex items-center justify-center transition-all relative">

        <div :class='`block py-10 lg:pt-0 hover:bg-black hover:text-theme-${colors[i]} space-y-10 h-full w-full flex flex-col justify-center select-none`'>
          <h3 class="text-3xl md:text-4xl 3xl:text-5xl font-bold text-center transition-all">
            <span class="block mx-auto w-5/6 xl:w-4/5 3xl:w-1/2">
              <span class="block" v-for="(text, i) in breakText(item.name)" :key="i" v-html="text"> </span>
            </span>
            <span class="hover:text-theme-red hover:text-theme-sky hover:text-theme-pink hover:text-theme-purple hover:text-theme-sky-dark hover:text-theme-purple"></span>
          </h3>
          <p class="w-2/3 mx-auto text-center" v-html="item.description"></p>
          
        </div>

        
    </div>
    <!-- item -->
  </div>
</template>

<script>

import _ from "lodash"

  export default {
    props: ['expertises'],
    data() {
      return {
        colors: ['red', 'sky', 'pink', 'purple', 'sky-dark', 'purple']
      }
    },
    methods: {
      breakText (text) {
        return text.split('#');
      },
    },
  }
</script>
