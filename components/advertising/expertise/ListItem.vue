<template>
  <div class="py-5 border-b-2 border-gray-700 text-lg lg:text-xl font-medium flex items-center justify-between pr-0">
    <!-- <a href="" class="list-link" v-html="item.name"> </a> -->
    <nuxt-link :to="item.slug" class="list-link" v-html="item.name"></nuxt-link>

      <span class="lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:group-hover:mr-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 lg:h-6 w-5 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </div>
</template>

<script>
  export default {
    props:['item'],
  }
</script>

<style lang="scss" scoped>

</style>
