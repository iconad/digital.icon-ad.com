<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
      <div v-for="(project, i) in projects" :key="i">
        <AdvertisingProject size="small" height="h-96" :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['projects']
  }
</script>
