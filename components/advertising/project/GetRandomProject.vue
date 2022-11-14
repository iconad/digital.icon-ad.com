<template>
    <div class="section-screen-height section-screen-height_90 relative"
    :style="`background: url(http://drupal.icon-ad.com${project.large_thumb}) no-repeat top center / cover`">
        <div class="text-white bg-black bg-opacity-60 absolute inset-0 flex items-center justify-center text-center">
            <div class="theme-container">
                <h2 class="text-4xl lg:text-6xl 3xl:text-7xl font-semibold">{{project.title}}</h2>
                <p class="mt-5 mb-10 text-lg 3xl:text-xl">
                  <template v-if="project.client">
                  {{project.client}}
                  </template>
                  <template v-else>
                  {{project.custom_client}}
                  </template>
                </p>
                <div class="flex items-end justify-center space-x-0 lg: space-x-20 space-y-10 lg:space-y-5 flex">
                    <nuxt-link to="/" class="flex items-center space-x-3 group" v-if="project.video">
                        <AssetsPlayButtonWhite options="w-6 lg:w-10 w-6 lg:h-10 transform hover:scale-110 transition-all duration-300" />
                        <span class="text-lg font-light capitalize theme-link">Watch the video</span>
                    </nuxt-link>
                    <nuxt-link :to="`projects${project.slug}`" class="flex items-center space-x-3 group">
                        <AssetsRightAngleArrowWhite options="w-6 lg:w-10 w-6 lg:h-10 transform hover:scale-110 transition-all duration-300" />
                        <span class="text-lg font-light capitalize theme-link">Read case study</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import _ from "lodash"

export default {

  computed: {
    project () {
      const items = [ ...this.$store.state.project.projects ]
      const item = _.sample(items);
      return item;
    }
  }

}
</script>
