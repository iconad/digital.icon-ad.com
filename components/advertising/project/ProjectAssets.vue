<template>
  <div class="w-full">
    <div class="grid grid-cols-1 gap-8">
      <div :class="`row-span-${asset.row} ${asset.col}`" :key="index" v-for="(asset, index) in assets">
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
