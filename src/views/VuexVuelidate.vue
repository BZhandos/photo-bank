<template>
  <div class="component-wrap">
    <form v-on:submit.prevent="simulateLogin()" class="form">
      <my-input label-name="Your name"
                @blur="$v.email.$touch()"
                :labelValid= "$v.name.$error"
                v-model.trim="$v.name.$model"></my-input>
      <my-input label-name="Password"
                @blur="$v.password.$touch()"
                :labelValid= "$v.password.$error"
                label-type="password"
                label-error="Passwords is required and at least 6 characters"
                v-model.trim="$v.password.$model"></my-input>
      <my-input label-name="Confirm password"
                @blur="$v.confirm_pass.$touch()"
                :labelValid= "$v.confirm_pass.$error"
                label-type="password"
                label-error="Passwords has to be the same"
                v-model.trim="$v.confirm_pass.$model"></my-input>
      <button class="submit"> Simulate Login</button>
    </form>
    <loading v-if="loading" />
  </div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import Loading from '../components/UI/Loading'

export default {
  components: { Loading },
  data: () => ({
    name: null,
    password: null,
    confirm_pass: null,
    loading: false
  }),
  validations: {
    name: { required },
    password: { required, minLen: minLength(6) },
    confirm_pass: { sameAs: sameAs('password') }
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    simulateLogin () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        this.$store.dispatch('simulateLogin', this.name)
        setTimeout(() => { this.$router.push('/tourism') }, 1500)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.component-wrap {
}
.form {
  max-width: 320px;
  margin: 0 auto;
}
.submit {
  color: #2c3e50;
  font-size: 16px;
  cursor: pointer;
  padding: 12px 32px;
  border-radius: 4px;
  background-color: #42b983;
  border: none;
  outline: #2e7c59;
}
</style>
