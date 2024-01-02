<template>
  <div id="form" class=" rounded-md m-10   ">

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