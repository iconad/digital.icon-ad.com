<template>
  <div v-if="project">
    <section class="projects-carousel relative">
      <AdvertisingProjectPageCover
      :data="{
        image: project.cover_original,
        mini: project.cover_image_mini,
        title: project.title,
        client: project.client,
        services: project.services,
        custom_client: project.custom_client
      }" />
    </section>
    <!-- cover -->

    <div class="project-content space-y-8">

      <!-- ===== Project Content ===== -->
      <div class="flex theme-container-lg my-24 " v-if="project && project.detail">
        <div class="w-full space-y-3" v-html="project.detail"></div>
      </div>
      <!-- paragraph -->


      <div class="theme-container-lg space-y-8">
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
        <div class="inner w-full">
          <div class="project image mb-8" v-for="(image, i) in projectsImages" :key="i">

            <a :href="`${storageUrl}${image.big}`" target="_blank" v-if="projectsImages != null">
              <UtilsImage v-if="image.big" options="w-full rounded-3xl overflow-hidden" :mini="image.mini" :image="image.big" />
            </a>

          </div>
        </div>
      </div>


    </div>
    <!-- project-content -->


    <section class="related-projects mt-24 theme-container-lg" v-if="relatedProjects.length != 0">

      <div class="text-bold mb-5">You may like this</div>

      <AdvertisingProjectRelatedProjects :projects="relatedProjects" />

    </section>
    <!-- related projects -->


  </div>
</template>

<script>

import Atos from '~/utils/Atos'


  export default {
    scrollToTop: true,
    data() {
      return {
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

    mounted() {
      const elements = this.gsap.utils.toArray('.atos');
      Atos(this.gsap, elements)
    },

    computed: {
      projectsImages () {

        const bigArray = this.project.project_images.split(',')
        const miniArray = this.project.project_images_mini.split(',')

        let images = []

        bigArray.forEach(element => {

          if(bigArray.length == 0){

            images = null

          }else{

            const data = { big: element, mini: miniArray[0] }
            images.push(data)
            miniArray.shift()
          }

        });

        return images

      },
      storageUrl() {
        return 'https://drupal.icon-ad.com/';
      },
    },

    async asyncData({ $axios, params }) {

    const project = await $axios.$get(`/projects/slug/${params.project}`)
    // const relatedProjects = await $axios.$get(`/projects/${project[0].services_id}/related`)
    const relatedProjects = await $axios.$get(`/projects/related`)


    return {
      project: project[0],
      relatedProjects
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

