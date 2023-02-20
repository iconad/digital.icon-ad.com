<template>
  <div v-if="project">
    <section class="projects-carousel relative">
      <AdvertisingProjectPageCover
      :data="{
        image: project.cover_original,
        mini: project.cover_image_mini,
        title: project.title,
        case: project.case,
        client: project.client,
        services: project.services,
        custom_client: project.custom_client
      }" />
    </section>
    <!-- cover -->

    <client-only>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </client-only>

    <div id="DigitalNumbers2" class="theme-container-lg mt-16 sm:mt-32" v-if="project.numbers">
      <AdvertisingProjectDigitalNumbers :numbers="project.numbers" />
    </div>

    <div class="project-content space-y-8">

      <!-- ===== Project Content ===== -->
      <div class="flex theme-container-lg my-16 sm:my-24" v-if="project && project.detail">
        <div class="w-full space-y-3 white-bg-content" v-html="project.detail"></div>
      </div>
      <!-- paragraph -->


      <div class="theme-container-lg space-y-8 mt-24">
        <div class="rounded-2xl overflow-hidden" v-if="project && project.video_1">
          <client-only>
            <vimeo-player
              ref="player"
              :options="options"
              :video-id="`${project.video_1}`"
            ></vimeo-player>
          </client-only>
        </div>
        <!-- video 1 -->

        <div class="rounded-2xl overflow-hidden" v-if="project && project.video_2">
          <client-only>
            <vimeo-player
              ref="player"
              :options="options"
              :video-id="`${project.video_2}`"
            ></vimeo-player>
          </client-only>
        </div>
        <!-- video 2 -->

        <div class="rounded-2xl overflow-hidden" v-if="project && project.video_3">
          <client-only>
            <vimeo-player
              ref="player"
              :options="options"
              :video-id="`${project.video_3}`"
            ></vimeo-player>
          </client-only>
        </div>
        <!-- video 3 -->

        <div class="rounded-2xl overflow-hidden" v-if="project && project.video_4">
          <client-only>
            <vimeo-player
              ref="player"
              :options="options"
              :video-id="`${project.video_4}`"
            ></vimeo-player>
          </client-only>
        </div>
        <!-- video 4 -->


      </div>
      <!-- video -->

      <!-- ===== Project Assets Content ===== -->

      <!-- <div class="projects-grid-warpper mt-2" v-if="project.assets.length > 0"> -->
      <div class="projects-grid-warpper mt-2 theme-container-lg">
       <div class="inner w-full">
          <AdvertisingProjectAssets :assets="project.assets" />
        </div>
      </div>

      <!-- ===== Project Images ===== -->
       <div v-if="projectsImages.length != 0" class="project-images mt-2 theme-container-lg">
        <div class="inner w-full grid grid-cols-6 gap-2 md:gap-4">
          <div class="project image mb-8 h-full" :class="image.class ? image.class : 'col-span-6'" v-for="(image, i) in projectsImages" :key="i">
            <!-- {{ image.hd }} -->
            <div @click="showLightbox(i)" target="_blank" v-if="projectsImages != null">
              <UtilsImage v-if="image.big" options="w-full rounded-3xl overflow-hidden" :mini="image.mini" :image="image.hd" />
            </div>

          </div>
        </div>
      </div>


    </div>
    <!-- project-content -->


    <section class="box related-projects mt-24 theme-container-lg " v-if="relatedProjects.length != 0">

      <div class="font-semibold mb-5 text-lg">You may like this</div>

      <AdvertisingProjectRelatedProjects :projects="relatedProjects" />

    </section>
    <!-- related projects -->


    <section id="ContactSection" class="contact-section text-white mb-10 md:mb-16">
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
    scrollToTop: true,
    head() {
    return {
       title: this.project ? `${this.project.title.replace(/&amp;/g, '&')} | Icon Advertising LLC` : "Icon Advertising LLC.",
       meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.project.title.replace(/&amp;/g, '&')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.seo && this.seo.description ? this.seo.description : ""
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.project.image_mini
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.project.title.replace(/&amp;/g, '&')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.project.title.replace(/&amp;/g, '&')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.seo && this.seo.description ? this.seo.description : ""
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.project.image_mini
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.project.image_mini
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.project.title.replace(/&amp;/g, '&')
        },
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
          content: this.project.slug,
        },
        {
          hid: "og:title",
          property: "og:title",
          content:  this.project.title.replace(/&amp;/g, '&'),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.seo && this.seo.description ? this.seo.description : "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.project.image_mini,
        },
        {
          hid: "og:image:type",
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "1200",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "667",
        },
      ],

      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: this.project ? this.slug : "",
        },
      ]
    };
    },
    data() {
      return {
        imgs: '',
        visible: false,
        index: 0,
        relatedProjects: [],
        options: {
        autoplay:false,
        responsive:true,
        controls:true,
        portrait:false,
        byline:false,
        color:"000000",
        title:false
      },
      playerReady: false,
      }
    },

    methods: {
      showLightbox(index) {

        this.imgs = this.projectsImages.map(e => `https://drupal.icon-ad.com${e.big}` );
        this.index = index
        this.show()
      },
      show() {
        this.visible = true
        document.body.classList.add('overflow-x-auto');
      },
      handleHide() {
        this.visible = false
        // document.body.classList.remove('fixed');
      },
      startCounting () {
        alert('here im aher here')
      },
    },

    mounted() {


      const elements = this.gsap.utils.toArray('.atos');
      Atos(this.gsap, elements)


    },

    computed: {
      seo () {
        return this.project.seo[0];
      },
      projectsImages () {

        const classArray = this.project.project_images_class.split(',')
        const hdArray = this.project.project_images_hd.split(',')
        const bigArray = this.project.project_images.split(',')
        const miniArray = this.project.project_images_mini.split(',')

        let images = []

        bigArray.forEach(element => {

          if(bigArray.length == 0){

            images = null

          }else{

            const data = { big: element, mini: miniArray[0], hd: hdArray[0], class: classArray[0] }
            images.push(data)
            miniArray.shift()
            hdArray.shift()
            classArray.shift()
          }

        });

        return images

      },
      storageUrl() {
        return 'https://drupal.icon-ad.com/';
      },
    },

    async fetch() {
      this.relatedProjects = await fetch(
      `https://drupal.icon-ad.com/api/projects/${this.project.id}/digital-related`
      ).then(res => res.json())
    },

    async asyncData({ $axios, params }) {

    const project = await $axios.$get(`/projects/slug/${params.project}`)

    return {
      project: project[0],
    }






    }

  }
</script>

<style scoped>
.vimeo-thumb-block {
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.4);
}
.vimeo-thumb-block svg {
  transition: 0.3s;
}
.vimeo-thumb-block:hover svg {
  transform: scale(1.2);
}

</style>

