<template>
  <div>
    <h3 class="text-2xl lg:text-3xl font-semibold text-center">{{title}}</h3>
    <ul class="my-10 w-full lg:w-2/3 mx-auto">

      <li v-for="(expertie, i) in expertise" :key="i" class="group">

        <AdvertisingExpertiseListItem :item="expertie" />

    </li>

    </ul>
  </div>
</template>

<script>
  export default {
    props: ['title', 'expertise'],
  }
</script>
