<template>
  <div class="component-wrap">
    still doing..
    <form v-on:submit.prevent="simulateLogin()">
      <my-input label-name="Login"
                @blur="$v.email.$touch()"
                :labelValid= "$v.email.$error"
                v-model="email"></my-input>
      <my-input label-name="Password"
                @blur="$v.password.$touch()"
                :labelValid= "$v.password.$error"
                v-model="password"></my-input>
      <my-input label-name="Confirm password"
                @blur="$v.confirm_pass.$touch()"
                :labelValid= "$v.confirm_pass.$error"
                v-model="confirm_pass"></my-input>
      <button> Simulate Login
      </button>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'VuexVuelidate',
  data: () => ({
    email: null,
    password: null,
    confirm_pass: null
  }),
  validations: {
    email: { required, email },
    password: { required },
    confirm_pass: { required }
  },
  methods: {
    simulateLogin () {
      this.$v.$touch()
    }
  }
}
</script>

<style scoped lang="scss">
.component-wrap {
  max-width: 320px;
  margin: 0 auto;
}
</style>
