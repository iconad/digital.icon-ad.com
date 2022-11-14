<template>
  <div class="cursor-pointer">
    <!-- <img :src="`https://drupal.icon-ad.com${image}`" :class="options" alt="image" /> -->
    <client-only>
      <v-lazy-image
        :class="options"
        :src="`https://drupal.icon-ad.com${image}`"
        :src-placeholder="`https://drupal.icon-ad.com${mini}`"
        alt="project image"
      />
    </client-only>
  </div>
</template>

<script>
  export default {
    props: ['options', 'image', 'mini']
  }
</script>

