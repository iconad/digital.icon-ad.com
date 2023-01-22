<template>
  <div :class="[
    asset.type.toLowerCase() != 'text' ? 'rounded-xl md:rounded-3xl overflow-hidden' : '',
    asset.background_color && asset.background_color == 'on' ? 'bg-gray-200 ' : '',
  ]">
    <!-- <div class="hidden">{{asset.type}}</div> -->
    <client-only>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </client-only>

    <template v-if="asset.type.toLowerCase() == 'video'">
      <client-only>
        <vimeo-player
          ref="player"
          :options="options"
          :video-id="asset.video"
        ></vimeo-player>
      </client-only>
    </template>
    <div v-else-if="asset.type.toLowerCase() == 'text'" class="my-5 px-1">
      <h3 v-html="asset.title" class="capitalize font-semibold my-3"></h3>
      <div v-html="asset.details"></div>
    </div>
    <div v-else>
      <div @click="showLightbox(`${storageUrl}${asset.image_hd}`)" target="_blank" class="cursor-pointer">
        <UtilsImage options="w-full atos" :mini="asset.image_mini" :image="asset.image_hd" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['asset'],
    data() {
      return {
        imgs: '',
        visible: false,
        index: 0,
        options: {
          autoplay: true,
          muted: true,
          autopause: false,
          responsive: true,
          controls: false,
          portrait: false,
          byline: false,
          color: "000000",
          title: false
        },
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
      }
    },
    computed: {
      autoplay() {
        if (this.asset.autoplay == 1) {
          this.options.controls = false
          this.options.autoplay = true
          this.options.muted = true
        }else{
          this.options.controls = true
          this.options.autoplay = false
          this.options.muted = false
        }
      },
      storageUrl() {
        return 'https://drupal.icon-ad.com/';
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
