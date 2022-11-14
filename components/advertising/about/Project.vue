<template>
  <div>
    <UtilsProjectImage options="select-none h-64 lg:h-[30rem] w-full object-cover rounded-xl overflow-hidden" :image="project.large_thumb" />
  </div>
</template>

<script>
  export default {
    props: ['project']
  }
</script>

<style lang="scss" scoped>


</style>
