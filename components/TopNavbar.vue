<template>
  <div id="topnavbar" class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-50">
      <div class="theme-container">
          <div class="flex items-center justify-end lg:justify-between">

            <div class="join-us tracking-widest space-x-3 hidden lg:flex items-start text-sm lg:text-xs 2xl:text-sm">
                <a href="mailto:info@icon-ad.com" class="block theme-link font-medium">info@icon-ad.com</a>
                <!-- <span class="text-gray-400">|</span>
                <a href="tel:+97142636550" class="block theme-link font-medium">+97142636550</a> -->
            </div>
            <!-- join us link -->

              <ul class="remove-last-border flex items-center uppercase text-sm lg:text-xs 2xl:text-sm tracking-wider -ml-3">
                  <li v-for="(item, i) in nav" :key="i">
                       <a :href="item.link" :class="item.active ? 'bg-white text-black' : ''" class="w-full lg:w-auto flex justify-center py-4 px-2 xl:px-3 block font-medium hover:bg-white focus:outline-none focus:text-black focus:bg-white hover:text-black">{{item.name}}</a>
                  </li>
              </ul>
              <!-- navbar list -->

          </div>
      </div>
      <!-- top navbar -->
  </div>
</template>

<script>
export default {
data() {
  return {
    nav:[
    {
      name: 'about',
      link: 'https://icon-ad.com/about',
      active: false,
      external: true
    },
    {
      name: 'advertising',
      link: 'https://advertising.icon-ad.com',
      active: false,
      external: true
    },
    {
      name: 'digital',
      link: 'https://digital.icon-ad.com',
      active: true,
      external: true
    },
    {
      name: 'branding',
      link: 'https://branding.icon-ad.com',
      active: false,
      external: true
    },
    {
      name: 'plus',
      link: 'https://plus.icon-ad.com',
      active: false,
      external: true
    },
    {
      name: 'clients',
      link: 'https://icon-ad.com/clients',
      active: false,
      external: true
    },
    {
      name: 'ideas',
      link: 'https://icon-ad.com/ideas',
      active: false,
      external: true
    },
  ]
  }
},

// mounted() {

//   const showAnim = this.gsap.from('.top-navbar', {
//     yPercent: -110,
//     paused: true,
//     duration: 0.2
//   }).progress(1);

//   this.scrollTrigger.create({
//     start: "top top",
//     end: 99999,
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse()
//     }
//   });

// },
}
</script>


<style>

.remove-last-border li:last-child a {
  border: none!important;
}

</style>
