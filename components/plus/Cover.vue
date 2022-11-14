<template>
  <div ref="container" class="overflow-hidden">
    <div class="theme-container">

      <div class="h-screen-50 md:h-screen-70 lg:h-screen-80 xl:lg:h-screen 2xl:h-screen-60 relative">
        <h1 ref="notmove" class="page-cove text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold rainbow-text-plus uppercase">
          <span class="block -mt-2">The metaverse </span>
          <span class="block -mt-2">is here</span>
          <span class="block -mt-2">are you </span>
          <span class="block -mt-2">ready?</span>
        </h1>
        <!-- page cover -->

        <div class="self-end page-cover_image absolute bottom-0 right-0 w-[80%] lg:w-[50%] transition-all ease-linear" ref="card">
          <img src="https://drupal.icon-ad.com/sites/default/files/2022-06/ezgif-5-29875921e6.webp" alt="page cover">
        </div>
        <!-- page cover image -->
      </div>

    </div>
  </div>
</template>

<script>

import card from '~/utils/card'

  export default {
    mounted() {

      const element = this.$refs['card']
      const container = this.$refs['container']
      card(container, element )

    },
  }


</script>

<style lang="scss" scoped>

</style>
