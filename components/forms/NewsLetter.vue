<template>
  <div class="space-y-5">
    <div class="absolute bottom-0 right-0 w-[70%] h-64">
      <AssetsIconPlus options="w-full h-full" />
    </div>

    <div class="text-4xl 3xl:text-6xl text-white font-bold uppercase">
      <span class="block">Join our</span>
      <span class="block">Newsletters</span>
    </div>

    <div class="text-2xl text-white">
      <span class="block-span">Enjoy exclusive industry insights </span>
      <span class="block-span">and so many more!</span>
    </div>

    <div class="w-full md:w-1/2 relative z-1">
      <form action="" class="newletter-form text-black">
        <div class="flex items-center">
          <input type="text" class="text-gray-900 p-4 w-full focus:outline-none bg-white focus:bg-gray-100">
          <input type="submit" placeholder="your@email.com" class="p-4 bg-gray-900 font-semibold text-white cursor-pointer hover:bg-theme-red focus:outline-none active:outline-none focus:bg-theme-red" value="JOIN">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
