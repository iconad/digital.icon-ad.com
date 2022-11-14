<template>
  <div>

    <client-only>
      <hooper :settings="settings" class="my-hooper">


          <slide v-for="project in projects" :key="project.id">
            <div class="px-2">
              <AdvertisingAboutProject :project="project" />
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
    props: ['projects'],

    components: {
      Hooper,
      Slide
    },

    data() {
      return {
        settings: {
          itemsToShow: 1.50,
          centerMode: true,
          autoPlay: true,
          playSpeed: 5000,
          infiniteScroll: true,
          breakpoints: {
            1500: {
              itemsToShow: 6.50
            },
            1300: {
              itemsToShow: 5.50
            },
            1000: {
              itemsToShow: 4.50
            },
            800: {
              itemsToShow: 3.50
            },
            600: {
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
  padding-top: 100px;
  padding-bottom: 100px;
}

.hooper-slide {
  transition: transform 0.3s;
  transform-style: preserve-3d;
}

.hooper-slide:hover {
    transition: transform 0.5s;
    transform: scale(1.1);
    z-index: 11111;
    /* // transform: perspective(600px) rotateY(-40deg); */
  }

</style>
