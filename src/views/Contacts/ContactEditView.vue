<template>
  <div class="">
    <contact-form  :user="user"></contact-form>
  </div>
</template>


<script>

import ContactForm from "@/views/Contacts/components/ContactForm.vue";

export default {
  props:['user',''],
  components: {
    ContactForm
  }
}

</script>