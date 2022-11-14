<template>
  <div class="bg-gray-200 rounded-3xl overflow-hidden">
    <!-- <div class="hidden">{{asset.type}}</div> -->
    <template v-if="asset.type.toLowerCase() == 'video'">
      <client-only>
        <vimeo-player
          ref="player"
          :options="options"
          :video-id="asset.video"
        ></vimeo-player>
      </client-only>
    </template>
    <div v-else>
      <a :href="`${storageUrl}${asset.image_original}`" target="_blank">
        <UtilsImage options="w-full atos" :mini="asset.image_mini" :image="asset.image_original" />
    </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['asset'],
    data() {
      return {
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
