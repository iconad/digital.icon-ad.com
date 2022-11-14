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
        <div v-if="!isLoading" class="form-element">
          <input type="submit" class="form-button rainbow w-full cursor-pointer hover:bg-opacity-100" value="Submit">
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

  // import from '~/utils/Atos'

  export default {
    data() {
      return {
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

    methods: {

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
