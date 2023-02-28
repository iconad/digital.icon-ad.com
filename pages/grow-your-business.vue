<template>
    <div class="bg-gray-50">
  
        <div class="w-full h-[70vh] sm:h-[70vh] lg:h-screen 3xl:h-[80vh] w-full flex items-center font-black relative text-center md:text-left">
      <div class="px-5 w-full space-y-10 lg:space-y-20">

            <div class="theme-container">
              <div class="space-y-5 lg:space-y-10">

                <h1 class="text-[2rem] sm:text-[3rem] lg:text-[2.5rem] items-center w-full leading-tight italic lg:not-italic md:leading-none">
                    <span class="inline md:block">  Revolutionize Your Business'
                      <br class="hidden lg:block">Online Presence with Our <br class="hidden lg:block"></span>
                      <span class="inline md:inline-block">
                      <span class="rainbow-text-digital font-icon "> Data-Driven Digital Marketing Strategies.</span>
                    </span>
                </h1>

                <p class="hidden md:block text-sm md:text-base font-medium w-4/5">At Icon, we believe that creativity and strategy go hand in hand to deliver powerful results in digital marketing domain. With a deep understanding of the digital landscape and a passion for delivering sustained positive results, we're eager to partner with you on your marketing journey. Let's bring your brand's story to life and create a lasting impact in the ever-evolving world of digital marketing.</p>

            </div>

          </div>

      </div>

  </div>
  <!-- screen height -->
  
  
      <section class="digital-projects theme-container">
  
        <client-only>
          <masonry :cols="{default: 2, 920: 1}" :gutter="{default: '25px'}" >
  
            <div v-for="(content, i) in page[0].content" :key="i">
              <div
              
              :class="[
                content.rainbow_bg === 'default' ? 'bg-gradient-to-r from-theme-purple via-theme-pink to-theme-red' : '',
                content.title ? 'bg-gray-100 group overflow-hidden rounded-xl' : 'hidden lg:block'
              ]"
              :style="`height: ${content.height}rem`"
              class="relative mb-6">
                <div
                  :class="[
                    content.white.toLowerCase() == 'yes' ? 'text-white' : '',
                    content.image ? 'left-0 top-20 h-12 md:h-48 flex items-between justify-center' : 'inset-0 p-5 lg:p-10 h-full',
                  ]"
                  class="p-info absolute w-full z-10">
                  <div class="w-full lg:w-3/4 space-y-5" :class="content.image ? '' : 'flex flex-col justify-around lg:justify-between h-full'">
  
                    <div class="space-y-5">
                      <h2 :class="content.image ? 'text-center' : 'text-left'" class="text-2xl lg:text-4xl uppercase font-semibold text-shadow-1">
                        {{content.title}}
                      </h2>
                      <div class="leading-snug" v-if="content.details">
                        <p class="text-lg" v-for="(text, i) in breakText(content.details)" :key="i"> {{text}} </p>
                      </div>
                    </div>
    
                  </div>
                </div>
                <div class="img transform hover:scale-105 transition-all duration-700" v-if="content.image">
                  <UtilsImage options="w-full h-full object-cover" :style="`height: ${content.height}rem`" :mini="content.image_mini" :image="content.image" />
                </div>
              </div>
  
              <!-- item -->
            </div>
  
          </masonry>
        </client-only>
  
      </section>
      <!-- digital projects -->
  
      <section id="ourResult" class="theme-container mt-16 lg:mt-0 pb-64">
  
        <div class="text-center space-y-10">
  
          <h3 class="text-4xl font-semibold">{{pageText[1]}}</h3>
          <p v-html="pageText[2]" class="lg:text-lg"> </p>
  
        </div>
  
        <div class="three-boxes text-white sm:flex items-center justify-center mt-20 space-y-10 sm:space-y-0 sm:space-x-10">
  
            <div class="w-full sm:w-64 h-64 sm:h-auto flex flex-col justify-center bg-black p-5 rounded-lg text-left space-y-6">
              <div>
                <div class="text-5xl sm:text-5xl font-bold uppercase rainbow-text-purple-red"> +18% </div>
                <div class="text-4xl sm:text-2xl font-bold uppercase"> GROWTH </div>
                <div class="text-4xl sm:text-2xl font-bold uppercase -mt-2"> RATE </div>
              </div>
            </div>
            <!-- black box -->
            <div class="w-full sm:w-64 h-64 sm:h-auto flex flex-col justify-center bg-black p-5 rounded-lg text-left space-y-6">
              <div>
                <div class="text-5xl sm:text-5xl font-bold uppercase rainbow-text-purple-red"> +25% </div>
                <div class="text-4xl sm:text-2xl font-bold uppercase"> CONVERSION </div>
                <div class="text-4xl sm:text-2xl font-bold uppercase -mt-2"> RATE </div>
              </div>
            </div>
            <!-- black box -->
            <div class="w-full sm:w-64 h-64 sm:h-auto flex flex-col justify-center bg-black p-5 rounded-lg text-left space-y-6">
              <div>
                <div class="text-5xl sm:text-5xl font-bold uppercase rainbow-text-purple-red"> 8% <small class="text-lg">LESS</small> </div>
                <div class="text-4xl sm:text-2xl font-bold uppercase"> COST PER </div>
                <div class="text-4xl sm:text-2xl font-bold uppercase -mt-2"> LEAD </div>
              </div>
            </div>
            <!-- black box -->
  
        </div>
        <!-- three boxes -->
      </section>
      <!-- our result -->
  
      <section id="digitalExperie" class="bg-black">
        <AdvertisingExpertiseExpertisesWithoutLinks :expertises="expertise" />
      </section>
      <!-- our digital experience -->
  
  
      <section id="Clients" class="clients-section py-32 3xl:py-64 space-y-16">
  
          <AdvertisingClientClientsWithoutLinks :clients="clients" />
  
      </section>
      <!-- expertises section end -->
  
      <section id="ContactSection" class="contact-section text-white pb-32">
         <div class="theme-container">
           <div class="bg-gray-100 rounded-2xl overflow-hidden px-10 lg:px-0 py-32">
            <FormsContactUs
              :data="{
                title: 'have an',
                title2: 'impact',
                subtitle: 'Join the most powerful',
                subtitle2: 'brands in the world.'
            }"
              />
           </div>
         </div>
      </section>
      <!-- contact section end -->
  
  
  
    </div>
  </template>
  
  <script>
    export default {
      name: 'home',
  
      methods: {
  
        goTo (value) {
          this.$router.push({path: `${value}`});
        },
  
        breakText (text) {
          return text.split('#');
        }
  
      },
  
      computed: {
        pageText () {
          return this.page[0].page_text.split('#');
        }
      },
  
      async asyncData({ $axios, store }) {
  
      const page = await $axios.$get(`/pages/digital-home`)
      const expertise = await $axios.$get(`/home-digital-expertises`)
      const clients = await $axios.$get(`/clients-digital`)
  
        return {
          page,
          expertise,
          clients
        }
      }
  
    }
  </script>
  
  <style>
    .social-columns-grid {
      columns: 2;
    }
  </style>
  