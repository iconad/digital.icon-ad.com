<template>
  <div>
    <section id="coverSection">
        <AdvertisingFrontCover />
    </section>
    <!-- cover section -->

    <section id="sec  ondSection" class="bg-black text-white">
      <div class="flex items-center theme-container section-screen-height section-screen-height_90 justify-center text-center">
        <div class="space-y-5">
          <h2 class="text-3xl lg:text-4xl uppercase font-semibold">
            <span class="block-span">Building brands for</span>
            <span class="block-span">more than 15 years</span>
          </h2>
          <p class="w-full lg:w-[60%] mx-auto text-lg lg:text-xl font-light">We are a creative user (consumers, human beings) experience agency with 360 marketing services, providing high-end data-driven advertising campaigns, strategies, and storytelling that impact today’s consumers and different target audiences in a great level of understanding across the globe and MENA region.</p>
        </div>
      </div>
    </section>
    <!-- second section -->

    <section id="projectsSection">
      <div class="front-projects theme-container px-0 md:px-5 pt-16 md:pt-48">
          <AdvertisingProjectProjects :from="0" :to="projectsLimit" />
      </div>
      <!-- front projects -->

      <div class="get-front-project py-16 md:py-48">
          <AdvertisingProjectGetRandomProject />
      </div>
      <!-- front projects -->

      <div class="front-projects theme-container pb-16 md:pb-48">
          <AdvertisingProjectProjects :from="6" :to="projectsLimit" />
      </div>
      <!-- front projects -->
    </section>
    <!-- projects section -->



    <section id="creativityUnlock" class="creativity-unlock overflow-hidden relative section-screen-height section-screen-height_100 flex items-center justify-center">
      <img src="~assets/images/rainbowlines.jpg" alt="image" class="w-full absolute inset-0 h-full transform scale-150 lg:scale-100">
      <div class="theme-container unloak-creativity relative z-1 text-white text-center space-y-20">
          <div class="lock-icon flex justify-center">
            <AssetsLock options="w-10 h-10 transform hover:scale-125 transition-all duration-300" />
          </div>
          <!-- icon -->
          <div class="space-y-3">
            <h3 class="text-4xl uppercase font-bold"> Unlock Creattivity </h3>
            <p class="text-lg font-light">
               <span class="block-span">Check more projects, unlock full case studies, and</span>
               <span class="block-span">showcase how we tackle projects</span>
            </p>
          </div>
          <div>
            <nuxt-link to="/projects" class="black-button">
              our work
            </nuxt-link>
          </div>
      </div>
      <!-- unloak the creativity -->

    </section>
    <!-- creativity section end -->


    <section id="Expertises" class="expertises-section bg-theme-gray-dark">
        <AdvertisingExpertiseExpertises :expertises="expertises" />
    </section>
    <!-- expertises section end -->

    <section id="Clients" class="clients-section bg-gradient-to-r from-theme-sky via-theme-purple to-theme-red py-32 3xl:py-64 space-y-16">
        <h3 class="text-3xl lg:text-5xl 3xl:text-6xl uppercase text-white text-center font-bold"> our clients & partners </h3>
        <AdvertisingClientClients :clients="clients" />
    </section>
    <!-- expertises section end -->

    <section id="ContactSection" class="contact-section bg-black text-white py-32">
       <div class="theme-container">
         <FormsContactUs
          :data="{
            title: 'have an',
            title2: 'impact',
            subtitle: 'Join the most powerful',
            subtitle2: 'brands in the world.'
         }"
          />
       </div>
    </section>
    <!-- contact section end -->


    <section id="newletterSection" class="newsletter-section py-20 3xl:py-32 bg-theme-sky-dark relative">

      <div class="theme-container">

      <FormsNewsLetter />

      </div>

    </section>
    <!-- new letter section -->

  </div>
</template>

<script>

import Queries from '~/utils/Queries'

export default {

  data() {
    return {
      projectsLimit: 6
    }
  },

  mounted() {

    const queries = new Queries

    if (queries.tab()) {
      this.projectsLimit = 4
    }else{
      this.projectsLimit = 6
    }
  },

  async asyncData({ $axios, store }) {

    const projects = await $axios.$get(`/projects/featured`)
    const expertises = await $axios.$get(`/home-expertises`)
    const clients = await $axios.$get(`/clients`)

      store.commit('project/setFeaturedProjects', projects)


      return {
        projects,
        expertises,
        clients
      }
    }

}

</script>

