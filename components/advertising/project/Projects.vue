<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div v-for="(project, i) in projects" :key="i" class="w-full">
            <AdvertisingProject :project="project" />
        </div>
    </div>
</template>


<script>

export default {
  props:['from', 'to'],

  computed: {

    projects () {
      return [ ...this.$store.state.project.projects ].splice(this.from, this.to)
    }
  }
}


</script>
