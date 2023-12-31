<template>
  <div class="bg-blue-600 m-12 border border-2 border-white ">

    <profile-details-form></profile-details-form>
    <change-password-form></change-password-form>
  </div>



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