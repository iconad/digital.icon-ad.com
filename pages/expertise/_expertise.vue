
<template>
  <div>

    <section class="bg-black py-32">
      <div class="theme-container">

        <div class="flex flex-col justify-between">
          <div class="space-y-5">
            <h3 class="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-white capitalize" v-html="expertise.page_title ? expertise.page_title : expertise.title "> </h3>
            <div class="text-base md:text-lg 2xl:text-xl font-light space-y-3 text-gray-200" v-html="expertise.summary"></div>
          </div>
        </div>
      </div>
      <!-- container -->
    </section>
    <!-- expertise header -->


    <div class="expertie-body theme-container text-gray-900 my-24">
      <div v-html="expertise.body" class="white-bg-content"></div>

    </div>
    <!-- expertie body -->


    <div class="expertie-accordion theme-container text-gray-900 my-24 space-y-3" v-if="expertise.accordion">

      <article class="bg-gray-100 p-3 rounded-lg" v-for="(data, i) in accordionData" :key="i">
        <div>

          <!-- ======= Header ======== -->

          <header class="flex justify-between items-center py-3 cursor-pointer select-none cursor-pointer" @click="accordion(data.id)">
            <h3 class="text-gray-900 font-semibold text-lg" v-html="data.title"></h3>
            <div class="w-7 h-7 flex items-center justify-center">
                <!-- icon by feathericons.com -->
                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
          </header>

          <!-- ======= Header ======== -->

          <!-- ======== Content ======== -->

          <div :ref="`accordionbody${data.id}`" :id="`accordionbody${data.id}`" class="accordionbody pt-5 page-detail myb-5 text-gray-800 space-y-5 service-content text-base white-bg-content hidden">
              <div v-html="data.body"></div>
             <div class="text-right p-3">
              <a href="#ContactSection" class="black-button-sm"> Get Quote </a>
            </div>
          </div>

          

          <!-- ======== Content ======== -->

        </div>
      </article>

    </div>
    <!-- expertie accordion -->

    <section id="ContactSection" class="contact-section text-white">
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

  import Atos from '~/utils/Atos'


    export default {
      head() {
        return {
          title: this.expertise ? `${this.seo.title.replace(/&amp;/g, '&')} | ICON Digital` : "ICON Digital",
          meta: [
            {
              hid: 'twitter:title',
              name: 'twitter:title',
              content: this.seo.title.replace(/&amp;/g, '&')
            },
            {
              hid: 'twitter:description',
              name: 'twitter:description',
              content: this.seo && this.seo.description ? this.seo.description : ""
            },
            // {
            //   hid: 'twitter:image',
            //   name: 'twitter:image',
            //   content: this.expertise.image_mini
            // },
            // {
            //   hid: 'twitter:image:alt',
            //   name: 'twitter:image:alt',
            //   content: this.expertise.page_title.replace(/&amp;/g, '&')
            // },
            {
              hid: 'og:title',
              property: 'og:title',
              content: this.seo.title.replace(/&amp;/g, '&')
            },
            {
              hid: 'og:description',
              property: 'og:description',
              content: this.seo && this.seo.description ? this.seo.description : ""
            },
            // {
            //   hid: 'og:image',
            //   property: 'og:image',
            //   content: this.expertise.image_mini
            // },
            // {
            //   hid: 'og:image:secure_url',
            //   property: 'og:image:secure_url',
            //   content: this.expertise.image_mini
            // },
            // {
            //   hid: 'og:image:alt',
            //   property: 'og:image:alt',
            //   content: this.expertise.page_title.replace(/&amp;/g, '&')
            // },
            { property: "og:site_name", content: "Icon Advertising LLC" },
            {
              hid: "description",
              name: "description",
              content: this.seo && this.seo.description ? this.seo.description : "",
            },
            {
              hid: "keywords",
              name: "keywords",
              content: this.seo && this.seo.keywords ? this.seo.keywords : "",
            },
            {
              hid: "og:url",
              property: "og:url",
              content: this.expertise.slug,
            },
            {
              hid: "og:title",
              property: "og:title",
              content:  this.seo.title.replace(/&amp;/g, '&'),
            },
            {
              hid: "og:description",
              property: "og:description",
              content: this.seo && this.seo.description ? this.seo.description : "",
            },
            // {
            //   hid: "og:image",
            //   property: "og:image",
            //   content: this.expertise.image_mini,
            // },
            // {
            //   hid: "og:image:type",
            //   property: "og:image:type",
            //   content: "image/jpeg",
            // },
            // {
            //   hid: "og:image:width",
            //   property: "og:image:width",
            //   content: "1200",
            // },
            // {
            //   hid: "og:image:height",
            //   property: "og:image:height",
            //   content: "667",
            // },
          ]
        };
      },
      data() {
        return {
          checkOpen: false
        }
      },

      mounted() {


        if (this.$route.query.open) {
          const open = this.$route.query.open.replace(/\s+/g, '-').toLowerCase()

          const id = this.accordionData.filter(el => el.title.replace(/\s+/g, '-').toLowerCase() === open).map(el => el.id)

          if(id.length != 0) {
            this.openAccordionByName(id)          
          }else{
            this.openAccordionByDefault()
          }
        }

      },

      methods: {

        openAccordionByName (id) {
          if (process.client) {

            this.$nextTick(()=>{
              let accordion = document.getElementById(`accordionbody${id}`)
              if(accordion) {
                accordion.classList.remove('hidden')
              }
            });

          }
        },

        openAccordionByDefault () {
          if (process.client) {
            this.$nextTick(()=>{
              let accordionbody = document.querySelector('.accordionbody')
              accordionbody.classList.remove('hidden')
            });

          }
        },


        accordion (id) {

          let selectedAccordion = document.getElementById(`accordionbody${id}`)
          let accordionbody = document.querySelectorAll('.accordionbody')


          if (!selectedAccordion.classList.contains("hidden")) {

            selectedAccordion.classList.add('hidden')

          } else {

            accordionbody.forEach(element => {
              element.classList.add('hidden')
            });

            selectedAccordion.classList.remove('hidden')


          }


        }
      },

      computed: {
        seo () {
          return JSON.parse(this.expertise.seo)[0];
        },
        accordionData() {

           if (this.expertise.accordion) {
            return  JSON.parse(this.expertise.accordion).slice(0);
           }


        },
        storageUrl() {
          return 'https://drupal.icon-ad.com/';
        },
      },

      async asyncData({ $axios, params }) {

      const expertise = await $axios.$get(`/expertise/${params.expertise}`)

      return {
        expertise: expertise[0],
      }

      }

  }
</script>
