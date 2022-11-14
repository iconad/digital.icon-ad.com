<template>
  <div>
      <section class="about-black-cover bg-black text-white pb-20">
        <div class="cover-map theme-container text-center">
            <div class="pb-10 pt-32 lg:py-32">
              <p class="text-3xl">we are not just a creative agency</p>
              <h1 class="my-12 text-5xl lg:text-6xl italic font-bold">
                <span class="block text-white">We are a creative</span>
                <span class="block rainbow-text-ad">consumers-experience</span>
                <span class="block rainbow-text-ad">agency</span>
              </h1>
            </div>

            <AdvertisingAboutRainbowMap />
            <!-- map -->

            <div class="about-cover-text w-full lg:w-1/2 mx-auto pt-20">
              <h2 class="text-2xl font-medium mb-5">From the UAE to the world</h2>
              <p class="text-sm lg:text-base">
                ICON has worked with some of the biggest mega brands in the world, and we successfully established a very strong relationship between our clients and our team which lasted for more than 15 years of creating, designing, implementing, and innovating a variety of successful projects with our global strategic partners and exclusive marketing tools, that made us one of the leading creative agencies in UAE and MENA Region
              </p>
            </div>

        </div>
        <!-- cover map -->

        <div class="about-featured-projects mt-24">

            <AdvertisingAboutProjects :projects="projects" />

        </div>
        <!-- about featured proejects -->


      </section>
      <!-- about black cover -->

      <section class="icon-reimagined py-32 lg:py-64 text-center">
        <div class="theme-container space-y-10">
          <div class="text-2xl lg:text-5xl font-bold">
            <span class="block">ICON Reimagined</span>
            <span class="block">Creativity & Brand Experience</span>
          </div>
          <p class="text-lg w-full lg:w-2/3 mx-auto">
            by empathizing with the user and placing their context at the center of the work, it is at its core an industry-agnostic approach that’s proving more relevant to creative advertising and branding than ever before.
          </p>
        </div>
      </section>
      <!-- ICON Reimagined  -->


      <section class="icon-reimagined py-32 lg:py-64 text-center bg-gray-100">
        <div class="theme-container space-y-10">
          <div class="text-2xl lg:text-5xl font-bold">
            <span class="block">2022 at a Glance</span>
          </div>
          <p class="text-lg w-full lg:w-2/3 mx-auto">
            our clients and people statics based on the first two quarters of 2022
          </p>
          <div class="glance-boxes">

            <div class="flex flex-wrap lg:flex-nowrap justify-center space-y-8 lg:space-y-0 lg:space-x-8">

              <div class="w-full lg:w-[16rem] bg-black rounded-lg text-white px-5 py-10 space-y-8 text-left">
                <div class="text-5xl leading-none">
                  <span class="block font-semibold rainbow-text-more-red">401+</span>
                  <span class="block font-semibold">MILLION</span>
                  <span class="block font-semibold">PEOPLE</span>
                </div>
                <div class="text-lg uppercase">
                  <span class="block">Reached with our</span>
                  <span class="block">BTL, ATL, & TTL</span>
                  <span class="block">campaigns</span>
                </div>
              </div>
              <!-- glance box -->

              <div class="w-full lg:w-[16rem] bg-black rounded-lg text-white px-5 py-10 space-y-8 text-left">
                <div class="text-5xl leading-none">
                  <span class="block font-semibold rainbow-text-more-red">16+</span>
                  <span class="block font-semibold">GLOBAL</span>
                  <span class="block font-semibold">BRANDS</span>
                </div>
                <div class="text-lg uppercase">
                  <span class="block">Worked with us</span>
                  <span class="block">during the the first</span>
                  <span class="block">two quarters</span>
                </div>
              </div>
              <!-- glance box -->

              <div class="w-full lg:w-[16rem] bg-black rounded-lg text-white px-5 py-10 space-y-8 text-left">
                <div class="text-5xl leading-none">
                  <span class="block font-semibold rainbow-text-more-red">50+</span>
                  <span class="block font-semibold">MILLION</span>
                  <span class="block font-semibold">PEOPLE</span>
                </div>
                <div class="text-lg uppercase">
                  <span class="block">Positively impacted</span>
                  <span class="block">by our CTAs</span>
                </div>
              </div>
              <!-- glance box -->

            </div>
          </div>
        </div>
      </section>
      <!-- ICON Reimagined  -->

      <section class="area-of-experties my-24">

        <div class="theme-container">

          <AdvertisingExpertiseList :title="`Our areas of expertise`" :expertise="expertise" />

        </div>
        <!-- container -->

      </section>
      <!-- area of expertise -->

      <section class="life-at-icon bg-black text-white py-10 lg:py-24">
        <div class="theme-container">
            <div class="flex flex-wrap justify-center lg:space-x-24">
              <div class="w-full lg:w-1/4 space-y-3">
                  <h3 class="text-4xl font-bold rainbow-text-digital">Life at icon</h3>
                  <p class="text-base">We are super talented, strong heroes, who support global and local brands & impact millions of people around the world every year.</p>
              </div>
              <div class="w-full lg:w-1/4">

                <div class="space-y-3 mt-10">
                  <h4 class="text-4xl font-semibold text-theme-sky">23</h4>
                  <p class="text-base">
                    <strong class="block">Unique individual</strong> in our team
                  </p>
                </div>
                <!-- item -->

                <div class="space-y-3 mt-10">
                  <h4 class="text-4xl font-semibold text-theme-sky">7</h4>
                  <p class="text-base">
                    <strong class="block">Different nationality</strong> & vibrant culture
                  </p>
                </div>
                <!-- item -->

                <div class="space-y-3 mt-10">
                  <p class="text-base">
                    We are committed to actively building an inclusive, diverse, and equitable workplace where everyone feels welcomed, appreciated, respected, and heard.
                  </p>
                </div>
                <!-- item -->

                <div class="space-y-3 mt-10">
                  <p class="text-base">
                    Icon is taking full responsibility to farm a safe environment that reflects our greatest asset - our people, we believe that this approach of always putting our people first, inspires growth and delivers outstanding outcomes for everyone as well as the clients and our beloved community around us.
                  </p>
                </div>
                <!-- item -->

              </div>
            </div>
            <!-- flex -->
        </div>
        <!-- container -->
      </section>
      <!-- life at icon -->


      <div class="meet-the-team bg-theme-gray-1 text-white py-10 lg:py-32">
        <div class="theme-container">
          <AdvertisingIconersCarousel :title="`Meet the team`" :iconers="iconers" />
        </div>
        <!-- container -->
      </div>
      <!-- meet the team -->

      <section class="join-the-team py-20 lg:py-32 bg-black text-white">
        <div class="theme-container">
          <div class="flex flex-wrap lg:justify-center lg:flex-nowrap space-y-20 lg:space-y-0 lg:space-x-24">

            <div class="w-full lg:w-1/4 space-y-5">
              <h4 class="text-5xl uppercase font-black rainbow-text-more-red italic">
                <span class="block">join the</span>
                <span class="block">team</span>
              </h4>
              <div class="space-y-3 text-lg">
                <p class="font-semibold text-xl"> We're always looking for talented people to  join our team!</p>
                <p> Submitting your resume is just the first step in forming an exceptional connection - we know that there's more to you than a list of jobs and accomplishments on a document. </p>
              </div>
            </div>
            <!-- column -->

            <div class="w-full lg:w-1/3">
              <FormsCareerForm />
            </div>
            <!-- column -->

          </div>
          <!-- flex -->
        </div>
        <!-- container -->
      </section>
      <!-- join the team -->


  </div>
</template>


<script>

export default {

  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/featured`)
    const iconers = await $axios.$get(`/iconers`)
    const expertise = await $axios.$get(`/expertises`)

    // console.log(expertise)

      return {
        projects,
        iconers,
        expertise
      }
    }

}

</script>

<style scoped>
.carousel-3d-slide  {
  border-radius: 12px;
  background: transparent;
}
</style>
