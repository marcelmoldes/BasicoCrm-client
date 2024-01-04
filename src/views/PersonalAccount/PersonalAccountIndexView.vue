<template>
  <div id="form" class=" rounded-md m-10   ">

    <profile-details-form :user="user"></profile-details-form>
    <change-password-form :user="user"></change-password-form>
  </div>



</template>


<script>
import ChangePasswordForm from "@/views/PersonalAccount/components/ChangePasswordForm.vue";
import ProfileDetailsForm from "@/views/PersonalAccount/components/ProfileDetailsForm.vue";
export default  {
  props:['user'],
  components:{
    ChangePasswordForm,
    ProfileDetailsForm
  }
}

</script>