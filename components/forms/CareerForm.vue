<template>
  <div>
      <form action="#" class="form">

        <div class="form-element">
          <input type="text" class="form-input" placeholder="Full Name">
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
        </div>
        <!-- form element -->

       <div class="form-element">
          <input type="text" class="form-input" placeholder="Email">
        </div>
        <!-- form element -->

        <div class="form-element">
          <input type="file" class="form-input" placeholder="Upload Your Resume">
        </div>
        <!-- form element -->

        <div class="form-element">
          <textarea type="text" class="form-input" placeholder="Message" rows="5"></textarea>
        </div>

        <div class="form-element flex justify-center">
          <input type="submit" class="mx-auto form-button rainbow cursor-pointer hover:bg-opacity-100" value="Submit">
        </div>
        <!-- form element -->

      </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          phone: null
        },
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
          phone: ""
        },
        errors: {},
        isSubmitted: false
      }
    },
    methods: {
      onInput(formattedNumber, { number, valid, country }) {
        this.phone.number = number;
        this.phone.valid = valid;
        this.phone.country = country && country.name;
      },
    },
  }
</script>
