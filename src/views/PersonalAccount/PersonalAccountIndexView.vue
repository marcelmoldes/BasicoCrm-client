<template>
  <profile-details-form></profile-details-form>
  <change-password-form></change-password-form>


</template>


<script>
import ChangePasswordForm from "@/views/PersonalAccount/components/ChangePasswordForm.vue";
import ProfileDetailsForm from "@/views/PersonalAccount/components/ProfileDetailsForm.vue";
export default  {
  components:{
    ChangePasswordForm,
    ProfileDetailsForm
  }
}

</script>