<template>
  <div class="mx-auto text-center max-w-xl px-4">
    <login-form @userLoggedIn="$emit('userLoggedIn')"></login-form>
  </div>

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
        text: "You have successfully registered!",
        position: "center",
        duration: 3000,
      }).showToast();
    }
    if (this.$route.query.action === 'expired') {
      Toastify({
        text: "Your session has expired, please log in again.",
        position: "center",
        duration: 3000,
      }).showToast();
    }
  },
  methods: {}
}
</script>