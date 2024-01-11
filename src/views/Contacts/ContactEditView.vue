<template>
  <div class="md:flex md:items-center justify-end h-24">
    <div class="mt-4 flex md:ml-4 md:mt-0">
      <button type="button"
              class="ml-3 inline-flex justify-end rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Save Contact
      </button>
    </div>
  </div>
  <div class="">
    <contact-form :user="user"></contact-form>
  </div>
</template>


<script>

import ContactForm from "@/views/Contacts/components/ContactForm.vue";

export default {
  props:['user'],
  components: {
    ContactForm
  }
}

</script>