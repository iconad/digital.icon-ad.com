<template>
  <div>

    <canvas id="hero-lightpass" class="-ml-5 lg:mx-auto" />
    <!-- map -->
  </div>
</template>

<script>

  import sequence from '~/utils/sequence'


  export default {

    mounted() {

      // (Frames, Top Scroll Margin, scrollAnimationSpeed 1 to 5 )
      sequence(48, 0, 10)

    },

  }
</script>

<style scoped>


canvas {
  max-width: 100vw;
  max-height: auto;
}

</style>
