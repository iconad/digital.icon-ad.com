<template>
  <div>
    <div @click="video = !video" class="fixed z-50 top-5 right-5">
      <AssetsClose options="w-8 md:w-12 h-8 md:h-12 cursor-pointer text-gray-400 md:text-gray-700 hover:text-theme-red" />
    </div>
    <div class="fixed left-0 top-0 w-full h-screen z-20 flex items-center justify-center bg-black md:bg-transparent">
      <div class="w-full h-auto bg-white box-shadow overflow-hidden">

        <client-only>
          <vimeo-player
            v-cloak
            @ready="onReady"
            ref="player"
            :options="options"
            :video-id="`603712440`"
          ></vimeo-player>
        </client-only>

        <div v-if="isVideoLoading" class="text-center fixed inset-0 flex items-center justify-center">
          Video is loading...
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isVideoLoading: true,
        options: {
          muted: true,
          autoplay:true,
          responsive:true,
          controls:false,
          portrait:false,
          byline:false,
          color:"000000",
          title:false
        },
      }
    },
    computed: {
      video: {
        get: function () {
          return this.$store.state.isCoverVideo
        },
        set: function (value) {
          this.$store.commit('setIsCoverVideo', value)
        }
      }
    },
    methods: {
      onReady () {
        this.isVideoLoading = false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
