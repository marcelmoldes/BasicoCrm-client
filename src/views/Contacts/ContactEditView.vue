<template>
  <div class="flex flex-col gap-y-3 ml-0 mt-1 m-14 py-4 p-10">
    <contact-form></contact-form>
  </div>
</template>


<script>

import ContactForm from "@/views/Contacts/components/ContactForm.vue";
export  default  {
  components: {
    ContactForm
  }
}

</script>