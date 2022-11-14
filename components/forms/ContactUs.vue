<template>
  <div class="text-center text-gray-900">
      <div class="title space-y-16">
        <div class="space-y-6">
          <h3 class="text-5xl md:text-7xl uppercase font-black italic rainbow-text-ad">
              <span class="block"> {{data.title}} {{data.title2}} </span>
            </h3>
            <p class="text-lg md:text-xl lg:text-[1.8rem] font-semibold">
              <span class="block"> {{ data.subtitle }} {{ data.subtitle2 }} </span>
            </p>
        </div>

        <div class="w-full lg:w-1/2 mx-auto">
          <FormsForm />
        </div>

      </div>

  </div>
</template>


<script>


  export default {

    props: ['data'],

  }
</script>
