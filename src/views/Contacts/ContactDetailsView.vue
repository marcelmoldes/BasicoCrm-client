<template>
  <div class="flex flex-col gap-y-3 ml-0 mt-1 m-14 py-4 p-10">
    <contact-details-card></contact-details-card>
  </div>

</template>
<script>
import ContactDetailsCard from "@/views/Contacts/components/ContactDetailsCard.vue";

export default {
  components: {
    ContactDetailsCard
  }
}
</script>