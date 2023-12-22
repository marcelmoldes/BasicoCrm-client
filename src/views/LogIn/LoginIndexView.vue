<template>
  <login-form></login-form>
</template>
<script>
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

import LoginForm from "@/views/LogIn/components/LoginForm.vue";

export default {
  components: {
    LoginForm
  },
  data() {
    return {}

  },
  async mounted() {
    if (this.$route.query.action === 'registered') {
      Toastify({
        text: "Welcome to BasicoCrm",
        position: "center",
        duration: 1000,
      }).showToast();
    }
  },
  methods: {}
}
</script>