<template>
  <div>
      <form @submit.prevent="submitForm" class="form">

        <div class="form-element">
          <input type="text" class="form-input" v-model="form.name" required placeholder="Full Name">
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.name">{{ errors.name }}</span>
        </div>
        <!-- form element -->

        <div class="form-element">
          <client-only>
            <vue-tel-input
              class="form-element"
              :valid-characters-only="true"
              @input="onInput"
              v-bind="bindProps"
              v-model="form.phone"
            ></vue-tel-input>
          </client-only>
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.phone">{{ errors.phone }}</span>
        </div>
        <!-- form element -->

        <div class="form-element">
          <input type="text" v-model="form.email" class="form-input" required placeholder="Email">
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.email">{{ errors.email }}</span>
        </div>
        <!-- form element -->

        <div class="form-element">
          <textarea type="text" v-model="form.message" class="form-input" required placeholder="Message" rows="5"></textarea>
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.message">{{ errors.message }}</span>
        </div>

        <!-- Captcha Start -->
        <div class="select-none transition-all duration-100 focus:outline-none active:outline-none active:border-none group flex flex-wrap items-center h-full">
          <span :class="captcha.status ? 'bg-green-200' : 'bg-gray-300'" class="bg-opacity-75 px-4 py-2 transition-all rounded-xl block mr-3 flex items-center justify-between space-x-2 w-[30%]">
            <span class="block">
              {{captcha.num1}}
              {{captcha.opreator}}
              {{captcha.num2}}
            </span>
            <span>
              =
            </span>
            <span>
              <input type="text" v-model="input" :disabled="captcha.status" @input="checkCaptcha" class="w-10 rounded-full text-center focus:outline-none" :class="captcha.status ? 'select-none bg-green-200' : 'bg-gray-50'" placeholder="?">
            </span>
          </span>
          <div v-if="captcha" class="w-4/6 select-none font-medium right-0 text-sm text-left" :class=" captcha.success ? 'text-green-500' : captcha.error ? 'text-theme-red' : 'text-gray-600'">
            {{captcha.message}}
          </div>
        </div>
        <!-- Captcha End -->
          
        <div v-if="!isLoading" class="form-element">
          <span v-if="captcha && !captcha.status" class="select-none form-button block rainbow-gray w-full cursor-not-allowed hover:bg-opacity-100"> Submit </span>
          <input v-else type="submit" class="form-button rainbow w-full cursor-pointer hover:bg-opacity-100" value="Submit">
        </div>
        <!-- form element -->

        <div v-else>
          <span class="loader">L &nbsp; ading</span>
        </div>
        <!-- loader -->

      </form>
  </div>
</template>

<script>

  import _ from 'lodash'

  export default {
    data() {
      return {
        input: null,
        isLoading: false,
        data: {},
        bindProps: {
          mode: "international",
          defaultCountry: "AE",
          placeholder: "Phone number",
          required: true,
          autocomplete: "on",
          styleClasses:"form-input"
        },
        phone: {
          number: "",
          valid: false,
          country: undefined
        },
        form: {
          name: "",
          email: "",
          message: "",
          subject: 'Icon ad subject',
          phone: null,
          phone: ""
        },
        errors: {},
        isSubmitted: false,
        errors: null
      }
    },

    computed: {
      captcha() {
        return _.cloneDeep(this.$store.state.captcha.captcha)
      }
    },

    mounted() {
      this.$store.commit('captcha/generateCaptcha')
    },

    methods: {

      checkCaptcha () {
        this.$store.dispatch('captcha/checkCaptcha', this.input)
      },

      onInput(formattedNumber, { number, valid, country }) {
        this.phone.number = number;
        this.phone.valid = valid;
        this.phone.country = country && country.name;
      },

      async submitForm() {
        let config = {
          headers: {
            Accept: "json",
            "Content-Type": "application/json"
          }
        };

        this.isLoading = true;

        this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
              webform_id: "contact",
              name: this.form.name,
              email: this.form.email,
              subject: this.form.subject,
              phone: this.form.phone,
              message: this.form.message,
            },
            config
          )
          .then(response => {
            this.isLoading = false;
            if (response.sid) {
              this.form = []
              this.$router.push({
                path: "/thank-you"
              });
            }
          })
          .catch(error => {
            this.errors = error.response.data.error
            this.isLoading = false
          });
      }


    },
  }
</script>


<style>




  .vti__input:focus {
    /* box-shadow: none !important; */
    /* color: white; */
  }

  .vti__input {
    /* color: white!important; */
  }

  .vti__input-exclude {
    /* color: rgba(74, 85, 104, 1)!important; */
  }

  .vue-tel-input {
    border: none !important;
  }

  .vti__dropdown-list, .vti__dropdown.disabled, .vti__dropdown.open {
    border: none!important;
  }

  .vti__dropdown-list, .vti__dropdown.disabled, .vti__dropdown.open::-webkit-scrollbar {
    width: 12px;
  }
  .vti__dropdown-list, .vti__dropdown.disabled, .vti__dropdown.open::-webkit-scrollbar-thumb {
    background-color: rgba(209, 213, 219, 1)!important;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(209, 213, 219, 0.5)!important;;
  }


  .vti__dropdown-item.highlighted {
    background-color: rgba(156, 163, 175, 1)!important;
  }

  .vti__dropdown {
    border-radius: 5px;
  }

  .vti__dropdown:hover, .vti__dropdown:focus, .vti__dropdown:active {
    background-color: rgba(156, 163, 175, 1)!important;
    outline: none;
    box-shadow: none;
  }

  .vue-tel-input:focus-within {
    box-shadow: none!important;
  }
  input.vti__input {
    background: transparent!important;
  }
</style>
