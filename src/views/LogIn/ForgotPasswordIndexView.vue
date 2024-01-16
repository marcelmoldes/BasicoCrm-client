<template>
  <div class="flex ml-20 mt-20">

    <forgot-password-form :user="user"></forgot-password-form>
  </div>





</template>
<script >
import ForgotPasswordForm from "@/views/LogIn/components/ForgotPasswordForm.vue";
export  default {
  props:['user'],
  components:{
    ForgotPasswordForm
  }
}
</script>