<template>
  <div class="main-navbar fixed top-[3rem] bg-white left-0 w-full z-50">
      <div class="theme-container main-navbar relative z-10">
          <div class="flex items-center justify-between h-auto lg:h-16">

              <div class="main-logo text-xxxs tracking-widest space-x-1 flex items-start font-medium">
                  <nuxt-link to="/">
                      <AssetsLogo options="w-16 h-16"/>
                  </nuxt-link>
              </div>
              <!-- Logo -->

              <div class="cursor-pointer block md:hidden" @click="isMenu = !isMenu">
                <AssetsMenu options="w-8 h-8" />
              </div>

              <div v-if="isMenu" class="absolute left-0 top-0 bg-white w-full h-screen p-5 z-20 border-b-2 border-gray-500 md:static md:bg-transparent md:w-auto md:h-auto md:p-0 md:border-0 flex items-center justify-center md:block text-center md:text-left text-4xl md:text-base italic md:not-italic">

                <div class="block md:hidden absolute right-10 top-10 text-gray-500 hover:text-theme-red"  @click="isMenu = !isMenu">
                  <AssetsClose options="w-10 h-10" />
                </div>

                <ul v-if="isMenu" class="main-navbar_navbar_menu md:flex items-center uppercase tracking-wider space-x-0 md:space-x-10 space-y-8 md:space-y-0 text-gray-800 md:text-black">
                    <li class="lg:text-base">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li lg:text-base">
                        <nuxt-link to="/projects">Work</nuxt-link>
                    </li>
                    <li class="main-navbar_navbar_menu_li lg:text-base">
                        <nuxt-link to="/services">Expertise</nuxt-link>
                    </li>
                </ul>
                <!-- navbar menu -->

              </div>
              <!-- menu responsive wrapper -->
          </div>
      </div>
      <!-- main navbar -->
      <UtilsRainbowBar id="UtilsRainbowBar" colors="from-theme-sky via-theme-purple to-theme-pink w-full" />
  </div>
</template>

<script>
import Queries from '~/utils/Queries'

export default {
mounted() {

    const queries = new Queries
    queries.mobile() ? this.isMenu = false : this.isMenu = true

},

computed: {
  isMenu: {
    get() {
      return this.$store.state.isMenu
    },

    set(newValue) {
      this.$store.commit('setIsMenu', newValue)
    }

  }
}
}
</script>
