
<template>
  <div>

    <section class="digital-cover pt-12 md:pt-32">

      <PlusCover />

    </section>
    <!-- digital cover -->



    <section id="threeSection" class="-mt-10 relative z-10 h-screen py-48 bg-gradient-to-r from-theme-sky to-theme-purple flex items-center justify-center">

      <div class="theme-container space-y-6">
        <p class="text-3xl md:text-5xl font-semibold text-white text-center">
          <span class="block">Join the waiting list</span>
        </p>

        <form action="" class="newletter-form">
          <div class="flex items-center bg-gradient-to-r from-theme-purple to-theme-sky-dark transition-all duration-700 p-1">
            <input type="text" class="text-gray-900 p-4 w-full focus:outline-none bg-white focus:bg-gray-100">
            <input type="submit" placeholder="your@email.com" class="p-4 bg-theme-sky-dark font-semibold text-white cursor-pointer hover:bg-theme-purple focus:outline-none active:outline-none focus:bg-theme-purple" value="JOIN">
          </div>
        </form>

      </div>

    </section>

  </div>
</template>

<script>
  export default {

    methods: {
      goTo (value) {

      }
    },

  }
</script>
