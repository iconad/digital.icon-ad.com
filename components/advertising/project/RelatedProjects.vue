<template>
  <div>
    <div class="grid grid-cols-2 gap-10">
      <div v-for="(project, i) in projects" :key="i">
        <AdvertisingProject size="small" :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['projects']
  }
</script>
