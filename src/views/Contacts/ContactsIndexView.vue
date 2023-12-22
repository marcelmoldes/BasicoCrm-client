<template>
  <div class="ml-0 mt-1 m-14 py-4 p-10">
    <h2 class="text-2xl font-bold mb-3">Contacts</h2>
    <contacts-grid></contacts-grid>
  </div>
</template>

<script>
import ContactsGrid from "@/views/Contacts/components/ContactsGrid.vue";

export default {
  components: {
    ContactsGrid
  },
  data() {
    return {}

  }
}
</script>