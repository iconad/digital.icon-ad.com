<template>
  <div>

    <h2 class="font-semibold mb-5 tracking-wide">Key Highlights</h2>

    <div class="grid grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-5">

      <!-- ignore the below divs, its for generating classes -->
      <div class="hidden col-span-1 lg:col-span-2"></div>
      <div class="hidden col-span-1 lg:col-span-3"></div>
      <div class="hidden col-span-1 lg:col-span-4"></div>
      <div class="hidden col-span-1 lg:col-span-5"></div>
      <div class="hidden col-span-1 lg:col-span-6"></div>
      <!-- ignore the above divs, its for generating classes -->


      <div id="DigitalNumbers" :class="number.column ? `col-span-1 lg:${number.column}` : 'col-span-3'" class="border-gray-200 border rounded-lg p-5 text-center space-y-3" v-for="(number, i) in numbers" :key="i">
        <div class="w-full">
          <span class="leading-none text-2xl sm:text-4xl lg:text-5xl 3xl:text-6xl text-gray-800 sm:font-thin uppercase">
            {{number.number}}
          </span>
        </div>
        <div class="font-medium text-sm sm:text-base text-gray-800 tracking-wide capitalize">{{ number.label }}</div>
      </div>
      <!-- box -->
    </div>
  </div>
</template>

<script>


  export default {
    props: ['numbers'],
    data() {
      return {
      }
    },

    methods: {
      startCounting: function() {
        alert ('here i am!')
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>
