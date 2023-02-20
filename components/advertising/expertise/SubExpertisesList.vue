<template>
  <div>
    <div class="sub-experties mt-10">
      <div class="space-y-3">

        <nuxt-link :to="`${link}?open=${expertie.title.replace(/\s+/g, '-').toLowerCase()}`" class="flex items-center space-x-4 px-5 bg-theme-gray-dark rounded-xl h-16" v-for="expertie in list" :key="expertie.id">
          <span class="block w-8">
            <UtilsImage :mini="expertie.image_mini" :image="expertie.image" options="w-full object-cover" />
          </span>
          <h3 class="text-xl text-white font-medium" v-html="expertie.title"> </h3>
        </nuxt-link>
        <!-- expertie -->

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props:['link', 'expertise'],
    computed: {
      list () {
        return JSON.parse(this.expertise)
      }
    }
  }
</script>
