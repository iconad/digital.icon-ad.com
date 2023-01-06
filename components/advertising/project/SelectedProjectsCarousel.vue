<template>
  <div>
      <client-only>
        <siema ref="siema" :draggable="true" :autoplay="true" :loop="true" @init="init" :autoplay-duration="15000" @change="onSlideChange()">

            <div v-for="(project, i) in projects" :key="i" class="h-screen-50 lg:h-screen">

              <UtilsProjectImage options="w-full object-cover h-screen-50 lg:h-screen" :mini="project.image_mini" :image="project.cover" />

              <div class="relative slide-info">

                <div class="absolute w-full h-screen-50 lg:h-screen bg-black bg-opacity-60 text-white bottom-0 left-0 z-10 flex items-start items-center">

                  <div class="theme-container w-full mb-16 md:mb-24 lg:mb-32">

                    <div class="w-full">
                      <h1 class="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-3 lg:mb-5 w-full lg:w-1/3" v-html="project.title"></h1>

                      <nuxt-link :to="`/projects${project.slug}`" class="flex items-center space-x-3">
                        <AssetsRightAngleArrowWhite options="w-4 lg:w-6 h-4 lg:w-6" />
                        <span class="text-lg lg:text-2xl font-light">Read Case Study</span>
                      </nuxt-link>

                    </div>

                  </div>


                </div>
                <!-- slide info -->
              </div>

            </div>

        </siema>
      </client-only>

      <div class="absolute w-full bottom-0 lg:bottom-32 lg:left-3 text-white">
        <div class="theme-container">
          <div class="w-full lg:w-1/2">
            <div class="carousel-thumbs lg:mt-16">
              <div class="flex items-center space-x-5">

                <div v-for="(project, i) in projects" :key="i" class="w-full h-24 lg:h-32 flex flex-col cursor-pointer" @click="goToSlide(i)">

                  <div class="h-[2px] lg:h-[3px] w-full bg-gray-400 rounded-full relative mb-4" >
                    <div :class="currentSlide == i && projects.length > 1 ? 'slidebar-current' : ''" class="slidebar absolute left-0 top-0 bg-white h-full rounded-full"></div>
                  </div>
                  <div class="text-sm lg:text-base font-medium uppercase">{{project.client ? project.client : project.custom_client }} </div>
                  <div class="text-xxs lg:text-sm opacity-80 capitalize"> {{ project.title.substring(0, 35) }} </div>

                </div>
                <!-- project -->

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- carousel thumbs -->
  </div>
</template>

<script>


  export default {
    props: ['projects'],
    data() {
      return {
        currentSlide: null
      }
    },
    methods: {
      onSlideChange () {
        this.currentSlide = this.$refs.siema.currentSlide
      },
      goToSlide (i) {
        this.$refs.siema.goTo(i)
        this.currentSlide = this.$refs.siema.currentSlide
      },
      init () {
        console.log('ready')
        this.currentSlide = 0
      }
    },
  }
</script>


<style>

  .slidebar-current {
    animation: loading 15s infinite;
  }

  @keyframes loading {
    0%    { width: 0; }
    100%  { width: 100%; }
  }

</style>
