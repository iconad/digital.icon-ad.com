<template>
  <svg
    :class="`${options} fill-current`"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0a12 12 0 00-4 23v-3l1-6v-2c0-2 1-3 2-3l1 2-1 4 2 2c2 0 4-2 4-6 0-2-2-4-5-4s-5 2-5 5v2l1 1a247 247 0 01-1 1c-2 0-3-3-3-4 0-4 3-8 8-8 4 0 8 3 8 7 0 5-3 8-7 8l-2-2-1 3-2 3a12 12 0 0016-11c0-7-5-12-12-12z"/>
  </svg>
</template>

<script>
  export default {
    props: ['options']
  }
</script>
