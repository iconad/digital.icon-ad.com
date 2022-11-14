<template>
  <div>

    <client-only>
      <hooper :settings="settings" class="my-hooper">


          <slide v-for="item in items" :key="item.id">
            <div class="px-5">
              <div class="bg-white p-6 py-12 rounded-2xl space-y-5 md:space-y-10 h-screen-50 md:h-96">
                <h3 v-html="item.title" class="font-medium text-gray-800 leading-snug text-xl"></h3>
                <div v-html="item.details" class="text-xs md:text-sm space-y-3"></div>
              </div>
            </div>
          </slide>

      </hooper>
    </client-only>

  </div>
</template>

<script>

import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

  export default {
    props: ['items'],

    components: {
      Hooper,
      Slide
    },

    data() {
      return {
        settings: {
          itemsToShow: 1.25,
          centerMode: true,
          autoPlay: true,
          playSpeed: 5000,
          infiniteScroll: true,
          breakpoints: {
            1500: {
              itemsToShow: 5.50
            },
            1300: {
              itemsToShow: 4.50
            },
            1000: {
              itemsToShow: 3.50
            },
            800: {
              itemsToShow: 2.50
            }
          }
        }
      }
    },

  }
</script>

<style scoped>
.hooper {
  height: auto;
}

.hooper-list {
  /* padding-top: 100px;
  padding-bottom: 100px; */
}

.hooper-slide {
  /* transition: transform 0.3s;
  transform-style: preserve-3d; */
}

.hooper-slide:hover {
    /* transition: transform 0.5s;
    transform: scale(1.1);
    z-index: 11111; */
    /* // transform: perspective(600px) rotateY(-40deg); */
  }

</style>
