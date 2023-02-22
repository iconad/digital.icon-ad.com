<template>
  <div>

    <h2 class="font-semibold mb-5 tracking-wide">Key Highlights</h2>



    <div class="flex flex-wrap md:flex-nowrap md:space-x-5">
      <div class="w-full">
        <div class="grid grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-5 h-full">
          <!-- ignore the below divs, its for generating classes -->
          <div class="hidden col-span-1 lg:col-span-2"></div>
          <div class="hidden col-span-1 lg:col-span-3"></div>
          <div class="hidden col-span-1 lg:col-span-4"></div>
          <div class="hidden col-span-1 lg:col-span-5"></div>
          <div class="hidden col-span-1 lg:col-span-6"></div>
          <!-- ignore the above divs, its for generating classes -->

          <div id="DigitalNumbers" :class="number.column ? `col-span-1 lg:${number.column}` : 'col-span-3'" class="flex flex-col justify-center bg-gray-100 border-gray-200 border rounded-lg p-5 text-center space-y-10" v-for="(number, i) in numbers" :key="i">
            <div class="w-full">
              <div class="flex items-center justify-center space-x-2 mb-5">
                <span class="w-5 text-gray-500">
                  <UtilsImage :image="number.icon" :mini="number.icon" options="h-5 mb-[2px]" />
                </span>
                <span class="uppercase tracking-wide font-medium" v-html="number.label"> </span>
              </div>
              <span :style="`color:${number.color}`" class="mt-10 leading-none text-5xl sm:text-6xl 3xl:text-7xl text-gray-800 font-bold uppercase text-theme-red scroll-counter" data-counter-time="1500" v-html="number.number"></span>
            </div>
            <div v-if="number.detail" class="font-medium text-sm text-gray-800 bg-gray-200 w-full rounded-lg py-2">
              <div v-html="number.detail"></div>
            </div>
          </div>
          <!-- box -->
          </div>
      </div>
      <div class="w-full md:w-2/3 bg-gray-100 rounded-lg flex items-end overflow-hidden">


        <!-- Phone Start -->

        <section class="iphoneMock">
          <div class="container">
            <div class="iphone arrhe relative">

              <div class="w-full h-full bg-gradient-to-b from-gray-500 via-trasnparent to-trasnparent opacity-[0.5] absolute left-[18%] top-10 rotate-[-10deg] rounded-xl blur"></div>

              <div class="bordeColor">
                <div class="botones">
                  <div class="switch"></div>
                  <div class="vol up"></div>
                  <div class="vol down"></div>
                  <div class="touchID"></div>
                </div>
                <div class="backSide">
                  <div class="camaras">
                    <div class="cam">
                      <div class="lente"></div>
                    </div>
                    <div class="cam">
                      <div class="lente"></div>
                    </div>
                    <div class="cam">
                      <div class="lente"></div>
                    </div>
                    <div class="flash"></div>
                    <div class="sensor"></div>
                  </div>
                  <div class="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                      <path d="M48.334 33.875c-.093-7.593 6.169-11.249 6.45-11.436a13.669 13.669 0 0 0-10.936-5.906c-4.674-.469-9.067 2.718-11.5 2.718-2.337 0-5.982-2.718-9.908-2.625a14.765 14.765 0 0 0-12.339 7.5C4.868 33.313 8.794 47 13.935 54.4c2.524 3.656 5.515 7.78 9.441 7.593 3.832-.187 5.235-2.437 9.815-2.437S39.08 62 43.1 61.9c4.113-.094 6.637-3.75 9.16-7.405a29.782 29.782 0 0 0 4.113-8.53 13.082 13.082 0 0 1-8.039-12.09z"></path>
                      <path d="M40.762 11.565A13.423 13.423 0 0 0 43.847 2a13.194 13.194 0 0 0-8.787 4.5c-1.963 2.25-3.645 5.812-3.178 9.28 3.365.284 6.824-1.68 8.88-4.215z"></path>
                    </svg>
                  </div>
                </div>
                <div class="bordeNegro">
                  <div class="notch">
                    <div class="bocina"></div>
                    <div class="camara"></div>
                  </div>
                  <div class="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                      <path d="M48.334 33.875c-.093-7.593 6.169-11.249 6.45-11.436a13.669 13.669 0 0 0-10.936-5.906c-4.674-.469-9.067 2.718-11.5 2.718-2.337 0-5.982-2.718-9.908-2.625a14.765 14.765 0 0 0-12.339 7.5C4.868 33.313 8.794 47 13.935 54.4c2.524 3.656 5.515 7.78 9.441 7.593 3.832-.187 5.235-2.437 9.815-2.437S39.08 62 43.1 61.9c4.113-.094 6.637-3.75 9.16-7.405a29.782 29.782 0 0 0 4.113-8.53 13.082 13.082 0 0 1-8.039-12.09z"></path>
                      <path d="M40.762 11.565A13.423 13.423 0 0 0 43.847 2a13.194 13.194 0 0 0-8.787 4.5c-1.963 2.25-3.645 5.812-3.178 9.28 3.365.284 6.824-1.68 8.88-4.215z"></path>
                    </svg>
                  </div>
                  <div v-if="image" class="mainScreen blura" :style="`background-image: url(${image})`"></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <!-- Phone End -->


      </div>
    </div>

  </div>
</template>

<script>

  import counter from '~/utils/counter'

  export default {
    props: ['numbers', 'image'],
    data() {
      return {
      }
    },

    watch: {
      $route () {
        console.log('route changed', this.$route)
      }
    },

    mounted() {
      counter()
    },

    methods: {
      startCounting: function() {
        alert ('here i am!')
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>
