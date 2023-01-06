<template>
  <div class="w-full">

    <!-- ignore the below tag its for generating the grid classes -->
    <div class="hidden col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 row-span-1 row-span-2 row-span-3 row-span-4 row-span-5 row-span-6"></div>

    <div class="grid grid-cols-6 gap-2 md:gap-4">
      <div :class="`h-full row-span-${asset.row} ${asset.col}`" :key="index" v-for="(asset, index) in assets">
          <AdvertisingProjectAsset :asset="asset" />
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['assets'],
  }
</script>
