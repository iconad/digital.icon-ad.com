<template>
  <div class="theme-container">

    <div>

      <div class="space-y-12">

        <h3 class="text-3xl lg:text-4xl 3xl:text-5xl uppercase text-black text-center font-bold w-5/6 lg:w-auto mx-auto"> our clients </h3>
        <div class="flex flex-wrap items-center justify-center">

          <div class="w-1/2 sm:w-1/3 lg:w-1/6 rounded overflow-hidden" v-for="client in clients" :key="client.id">
            <UtilsProjectImage options="w-5/6 lg:w-full object-cover mx-auto" :image="client.logo_black" :title="client.title" />
          </div>

        </div>

      </div>

    </div>
  </div>

</template>

<script>

  export default {
    props: ['clients'],
  }
</script>


<style>

.hooper-indicator:hover, .hooper-indicator.is-active {
  background-color: #272727;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.hooper-indicator {
  background-color: #b8b8b8;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}


</style>
