<template>
  <div>
    <div class="sub-experties mt-10">
      <div class="space-y-3">

        <div class="flex items-center space-x-4 px-5 bg-theme-gray-dark rounded-xl h-16" v-for="expertie in list" :key="expertie.id">
          <div class="w-8">
            <UtilsImage :mini="expertie.image_mini" :image="expertie.image" options="w-full object-cover" />
          </div>
          <h3 class="text-xl text-white font-medium" v-html="expertie.title"> </h3>
        </div>
        <!-- expertie -->

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props:['expertise'],
    computed: {
      list () {
        return JSON.parse(this.expertise)
      }
    }
  }
</script>
