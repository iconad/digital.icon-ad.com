<template>
  <div>
    <h3 class="text-4xl font-bold text-center mb-32">{{title}}</h3>
    <div class="flex flex-wrap lg:flex-nowrap space-y-10 lg:space-y-0 lg:space-x-32">
      <div class="w-full">
        <client-only>

          <carousel-3d :space="150" :display="5" height="500" @after-slide-change="onAfterSlideChange">
              <slide v-for="(iconer, i) in iconers" :index="i" :key="i">
                  <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <div class="bg-theme-gray-dark absolute inset-0" :class="isCurrent ? 'opacity-100' : 'opacity-50' ">

                        <UtilsProjectImage options="w-full object-cover h-full" :image="iconer.image" />

                      <div class="member-info hidden">
                        <input type="hidden" class="data-name" :class="isCurrent ? 'current-member' :'' " :value="`${iconer.name}`">
                        <input type="hidden" class="data-desg" :class="isCurrent ? 'current-member' :'' " :value="`${iconer.designation}`">
                        <input type="hidden" class="data-about" :class="isCurrent ? 'current-member' :'' " :value="`${iconer.about}`">
                      </div>
                    </div>

                  </template>
              </slide>
          </carousel-3d>

        </client-only>
      </div>
      <!-- column -->
      <div class="w-1/2 space-y-5">
        <div>
          <h4 class="text-2xl font-medium">{{this.member.name}}</h4>
          <p v-html="this.member.desg"></p>
        </div>
        <div v-html="this.member.about" class="space-y-3 text-sm">
        </div>
      </div>

    </div>
    <!-- flex -->
  </div>
</template>

<script>
  export default {
    props: ['title', 'iconers'],

    data() {
      return {
        member : {
          index: null,
          name: null,
          desg: null,
          about: null,
          social: null,
        }
      }
    },

    mounted() {

      this.member.name = this.iconers[0].name
      this.member.desg = this.iconers[0].designation
      this.member.about = this.iconers[0].about

    },

    methods: {

      onAfterSlideChange (index) {

        this.member.name = index;
        this.member.name = document.querySelector('.data-name.current-member').value;
        this.member.desg = document.querySelector('.data-desg.current-member').value;
        this.member.about = document.querySelector('.data-about.current-member').value;

        console.log(this.member.name)
      }
    },

  }
</script>
