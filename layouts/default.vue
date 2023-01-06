<template>
  <div>

      <!-- <div class="this-navbar"> -->
      <TopNavbar class="top-navbar-1 hidden md:block" />
      <AdvertisingMainNavbar class="top-navbar-2 hidden md:block" />
      <AdvertisingMobileMegaMenu class="block md:hidden" />
      <!-- </div> -->

      <div class="mt-16">
        <Nuxt />
      </div>

      <footer id="FooterSection" class="footer-section bg-theme-gray pt-16 pb-8 3xl:pt-32 pb-10">
        <div class="theme-container">
          <Footer />
        </div>
      </footer>
  </div>
</template>


<script>

export default {
  mounted() {


    const showAnim = this.gsap.from('.top-navbar-1', {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    const showAnim2 = this.gsap.from('.top-navbar-2', {
      yPercent: -80,
      paused: true,
      duration: 0.2
    }).progress(1);

    this.scrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
        self.direction === -1 ? showAnim2.play() : showAnim2.reverse()
      }
    });

  },
}
</script>
