
<template>
  <div>

    <section class="digital-services-cover lg:pb-24">
      <div class="theme-container h-screen-60 flex items-center justify-center text-center">

        <div class="space-y-5">
          <h1 class="text-3xl lg:text-4xl lg:text-7xl font-bold rainbow-text-purple-red">
            <span class="block">It’s always a world</span>
            <span class="block">with a digital perspective</span>
          </h1>
          <p class="text-xl md:text-2xl lg:text-3xl text-gray-800">And we speak the digital language</p>
        </div>

      </div>
    </section>
    <!-- digital cover -->

     <section class="digital-services-cover pb-24 bg-gradient-to-r from-theme-purple via-theme-pink to-theme-red text-white h-auto lg:h-screen-85 py-32 lg:py-0">
      <div class="theme-container flex items-center justify-center text-center h-full">

        <div class="space-y-24">
          <div class="space-y-12">
            <h1 class="text-3xl lg:text-4xl font-semibold ">How we speak digital?</h1>
            <p class="text-base lg:text-lg text-gray-50 w-full lg:w-4/5 mx-auto">Starting from the ground up, with strategy, management, creative, design, media buying, engagement, and content creation tailored for all types of industries and platforms, working across all channels and proactively keeping up to date with the latest tools, trends and measurable results and performance analysis across all platforms, forming and deploying budgets for paid and organic reach.</p>
          </div>

          <div class="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-16 xl:gap-y-0 gap-x-0 xl:gap-x-16">

            <div class="w-48 md:w-1/2 xl:w-48">
              <div class="flex items-center justify-center">
                <AssetsUpTallArrow options="w-5 h-5 text-white mb-4" />
                <span class="text-4xl font-bold uppercase">98%</span>
              </div>
              <div class="text-sm font-semibold">Achievement Rate</div>
              <div class="text-xs">Driving results and achieving more than expected</div>
            </div>
            <!-- box -->

            <div class="w-48 md:w-1/2 xl:w-48">
              <div class="flex items-center justify-center">
                <AssetsUpTallArrow options="w-5 h-5 text-white mb-4" />
                <span class="text-4xl font-bold uppercase">98%</span>
              </div>
              <div class="text-sm font-semibold">Achievement Rate</div>
              <div class="text-xs">Driving results and achieving more than expected</div>
            </div>
            <!-- box -->

            <div class="w-48 md:w-1/2 xl:w-48">
              <div class="flex items-center justify-center">
                <AssetsUpTallArrow options="w-5 h-5 text-white mb-4" />
                <span class="text-4xl font-bold uppercase">98%</span>
              </div>
              <div class="text-sm font-semibold">Achievement Rate</div>
              <div class="text-xs">Driving results and achieving more than expected</div>
            </div>
            <!-- box -->

            <div class="w-48 md:w-1/2 xl:w-48">
              <div class="flex items-center justify-center">
                <AssetsUpTallArrow options="w-5 h-5 text-white mb-4" />
                <span class="text-4xl font-bold uppercase">98%</span>
              </div>
              <div class="text-sm font-semibold">Achievement Rate</div>
              <div class="text-xs">Driving results and achieving more than expected</div>
            </div>
            <!-- box -->

          </div>
        </div>

      </div>
    </section>
    <!-- digital cover -->


    <section class="digital-expertise">

      <div class="expertise-navbar bg-gray-100 p-3 md:p-5" id="serviesStickyNavbar">
        <div class="theme-container">
          <ul class="font-medium text-xxs md:text-base lg:text-lg flex items-center justify-between w-full">
            <li v-for="(nav, i) in expertise" :key="i">
              <nuxt-link :to="`#${nav.short_title.replace(/\s+/g, '')}`" class="text-gray-900" v-html="nav.short_title"></nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- expertise navbar -->

      <div class="mb-32" id="readout">

        <div class="services-wrapper">

          <div class="service" v-for="(service, i) in expertise" :key="i" :id="`Section${service.short_title.replace(/\s/g, '')}`">

            <template v-if="service.carousel.toLowerCase() !== 'true'">
              <div class="px-5 lg:px-0 max-w-screen-lg mx-auto mb-12" :id="`${service.short_title.replace(/\s+/g, '')}`">
                <div :style="`padding-top: ${service.about_text_height}rem; padding-bottom: ${service.about_text_height}rem;`" class="service-about font-medium text-lg md:text-xl text-center w-full lg:w-1/2 mx-auto" v-html="service.details"></div>
                <!-- service about -->

                <div class="service-blocks space-y-12">

                  <div class="service-block space-y-12" v-for="(content, b) in service.content" :key="b">

                    <!-- ==== One Text One Video "text_image" ==== -->
                    <div v-if="content.layout === 'text_image'" class="flex flex-wrap md:flex-nowrap items-center space-y-10 md:space-y-0 md:space-x-12 space-y-12 space-y-reverse lg:space-y-0"
                    :class="[
                      content.remove_whitespace_in_row.toLowerCase() == 'true' ? 'bg-gray-100 rounded-xl overflow-hidden' : '',
                      content.direction == 'rtl' ? 'md:space-x-reverse' : ''
                    ]">


                      <div class="content-side w-full md:h-screen-70 bg-gray-100 rounded-xl" :class="content.direction == 'rtl' ? 'order-2' : 'order-1'">
                        <div class="p-10 flex flex-col justify-between h-full">

                          <div class="space-y-5">
                            <h3 v-if="content.title" class="text-2xl md:text-3xl font-semibold" v-html="content.title"></h3>
                            <div v-if="content.details" class="text-sm md:text-base space-y-3" v-html="content.details"></div>
                          </div>
                          <!-- top -->

                          <div class="flex items-center space-x-2 group mt-10 md:mt-0" v-if="content.link">
                            <AssetsRightAngleArrowBlack options="w-6 h-6 pb-1" />
                            <nuxt-link :to="content.link" class="text-x group-hover:border-gray-400 pb-1 border-b border-transparent">
                              {{content.link_text}}
                            </nuxt-link>
                          </div>
                          <!-- bottom -->

                        </div>
                      </div>
                      <!-- content side -->

                      <!-- if project assign to the block  -->
                      <div v-if="content.project" :class="content.direction == 'rtl' ? 'order-1' : 'order-2'" class="image-project-side w-full relative h-screen-50 md:h-screen-70 rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center" :style="`background-image: url(https://drupal.icon-ad.com${content.project_image})`">

                      <div class="h-full w-full  flex items-end p-10 bg-gradient-to-b from-transparent to-theme-black-opacity-50">
                        <div class="space-y-5 text-white">

                        <nuxt-link to="/" class="text-2xl md:text-3xl font-medium"> {{content.project_title}} </nuxt-link>

                        <div class="flex items-center space-x-2 group">
                          <AssetsRightAngleArrowBlack options="w-5 md:w-6 h-5 md:h-6 pb-1" />
                          <nuxt-link :to="content.project_link" class="text-base md:text-lg group-hover:border-gray-400 pb-1 border-b border-transparent">Explore our work</nuxt-link>
                        </div>
                      </div>
                      </div>

                      </div>

                      <!-- if project not assigned to block, the block will look for the image -->
                      <div v-else-if="content.image" :class="content.direction == 'rtl' ? 'order-1' : 'order-2'" class="image-project-side w-full relative h-screen-50 md:h-screen-70 rounded-xl overflow-hidden">
                        <UtilsImage :mini="content.image" :image="content.image" options="w-full h-screen-50 md:h-screen-70 object-cover object-bottom" />
                      </div>

                      <!-- if image and project both not provided, the default image place holder will apply -->
                      <div v-else class="image-project-side flex items-center justify-center w-full relative h-screen-50 md:h-screen-70 rounded-xl overflow-hidden bg-gray-100">
                        <AssetsImage options="text-gray-500 w-24 h-24 opacity-50" />
                      </div>
                      <!-- image / project side -->

                    </div>
                    <!-- block end -->

                    <!-- ==== Two Texts ==== -->
                    <div v-if="content.layout === 'only_text_2'" class="flex flex-wrap md:flex-nowrap items-center space-y-10 md:space-y-0 md:space-x-12">

                      <div class="content-side w-full md:h-screen-70 bg-theme-purple text-white rounded-xl">
                        <div class="p-10 flex flex-col justify-center h-full">

                            <div class="space-y-5">

                            <div>
                              <UtilsImage :image="content.icon" options="w-8 md:w-12" />
                            </div>

                            <h3 class="text-2xl md:text-3xl font-semibold" v-html="content.title"></h3>
                            <div class="space-y-3 text-sm md:text-base" v-html="content.details"></div>
                            </div>
                            <!-- top -->


                        </div>
                      </div>
                      <!-- content side -->

                      <div class="content-side w-full md:h-screen-70 bg-gray-100 rounded-xl">
                        <div class="p-10 flex flex-col justify-center h-full">

                            <div class="space-y-5">
                            <div>
                              <UtilsImage :image="content.second_icon" options="w-8 md:w-12" />
                            </div>
                            <h3 class="text-2xl md:text-3xl font-semibold" v-html="content.second_title"></h3>
                              <div class="space-y-3 text-sm md:text-base" v-html="content.second_details"></div>
                            </div>
                            <!-- top -->

                        </div>
                      </div>
                      <!-- content side -->

                    </div>
                    <!-- block end -->

                    <div v-if="content.layout === 'only_image_1'" class="flex flex-wrap md:flex-nowrap items-center space-y-10 md:space-y-0 md:space-x-12">

                      <div class="image-proejct-side w-full relative h-screen md:h-screen-70 rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center" :style="`background-image: url(https://drupal.icon-ad.com${content.image})`">


                      <div class="h-full w-full flex items-end justify-center text-center p-10 bg-gradient-to-b from-transparent to-theme-black-opacity-70">

                          <div class="space-y-5 text-white mb-6">
                          <nuxt-link to="/" class="text-3xl font-medium" v-html="content.title"></nuxt-link>
                          <div class="w-full md:w-3/4 text-sm space-y-3 mx-auto" v-html="content.details"></div>
                          <div class="flex items-center justify-center space-x-2 group w-full mt-10 md:mt-0">
                              <AssetsPlayButtonWhite options="w-5 h-5 pb-1" />
                              <nuxt-link :to="content.link" class="group-hover:border-gray-400 pb-1 border-b border-transparent" v-html="content.link_text"></nuxt-link>
                          </div>
                          </div>

                      </div>
                      </div>
                      <!-- image / project side -->

                  </div>
                  <!-- block end -->


                  </div>
                  <!-- service block -->

                </div>
              </div>
              <!-- service blocks -->
            </template>

            <template v-else>

              <div class="h-screen bg-gradient-to-l from-theme-purple to-theme-pink w-full flex flex-col justify-center content-start space-y-24">

                <div class="theme-container w-full">
                  <div class="service-about font-medium text-xl lg:text-3xl text-center lg:text-left w-full lg:w-1/2">
                    <p v-for="(text, o) in breakText(service.details)" :key="o" v-html="text"></p>
                  </div>
                </div>

                <!-- v-for="(content, b) in service.content" :key="b" -->
                <div class="carousel">

                  <DynamicBlocksCarousel :items="service.content" />

                </div>
                <!-- carousel -->


              </div>

            </template>


          </div>
          <!-- service -->

        </div>
        <!-- services wrapper -->


      </div>
    </section>



  </div>
</template>

<script>

  import stickyScroll from '~/utils/stickyscroll'

  export default {

    methods: {
      goTo (value) {

      },
      breakText (text) {
        return text.split('#');
      }
    },

    mounted() {

      stickyScroll()

    },

    async asyncData({ $axios, store }) {

    const expertise = await $axios.$get(`/digital-expertise`)

      return {
        expertise
      }
    }

  }
</script>
