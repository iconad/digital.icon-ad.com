<template>
  <div id="topnavbar" class="bg-black text-white top-navbar fixed w-full left-0 top-0 z-50">
      <div class="theme-container">
          <div class="flex items-center justify-center md:justify-between">

            <div class="join-us tracking-widest space-x-1 hidden lg:flex items-start">
                <a href="mailto:info@icon-ad.com" class="block theme-link font-medium">info@icon-ad.com</a>
            </div>
            <!-- join us link -->

              <ul class="remove-last-bordder flex items-center uppercase text-sm lg:text-xs 2xl:text-sm tracking-wider -ml-3 overflow-x-auto">
                  <li v-for="(item, i) in nav" :key="i">
                       <a :href="item.link" :class="item.active ? 'bg-white text-black' : ''" class="w-[150px] lg:w-auto flex justify-center border-r border-gray-600 lg:border-0 py-4 px-2 xl:px-3 block font-semibold lg:font-medium hover:bg-white focus:outline-none focus:text-black focus:bg-white hover:text-black">{{item.name}}</a>
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
      link: '/about',
      active: false,
      external: false
    },
    {
      name: 'advertising',
      link: 'https://advertising.icon-ad.com',
      active: false,
      external: false
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
      link: '/clients',
      active: false,
      external: false
    },
    {
      name: 'ideas',
      link: '/ideas',
      active: false,
      external: false
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

.remove-last-bordder li:last-child a {
  border: none!important;
}

</style>
