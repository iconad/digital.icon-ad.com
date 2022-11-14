<template>
  <div>

    <div class="h-screen-50 lg:h-screen-85">

      <UtilsProjectImage options="w-full object-cover h-screen-50 lg:h-screen-85" :mini="data.mini" :image="data.image" />

      <div class="relative slide-info">

        <div class="absolute w-full h-screen-50 lg:h-screen-85 bg-black bg-opacity-60 text-white bottom-0 left-0 z-10 flex items-start items-center pt-24">

          <div class="theme-container-lg w-full mb-16 md:mb-24 lg:mb-32 flex flex-col justify-center space-y-12">

            <div class="w-full">
              <h1 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-3 lg:mb-5 w-full lg:w-1/2" v-html="data.title"></h1>
            </div>

            <div class="flex items-center justify-center">

              <div class="w-full text-lg lg:text-xl">
                <div class="font-bold">Client</div>
                <div v-if="data.client" v-html="data.client"></div>
                <div v-else v-html="data.custom_client"></div>
              </div>
              <!-- w-full -->

              <div class="w-full text-lg lg:text-xl">
                <div class="font-bold">Scope of work </div>
                <div v-html="data.services"></div>
              </div>
              <!-- w-full -->

            </div>
            <!-- client section -->

          </div>


        </div>
        <!-- slide info -->
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    props: ['data'],
    data() {
      return {
      }
    },

  }
</script>
