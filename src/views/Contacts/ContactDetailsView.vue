<template>
  <div class="">
    <contact-details-card

                               :contact="contact"  :user="user"></contact-details-card>
  </div>

</template>
<script>
import ContactDetailsCard from "@/views/Contacts/components/ContactDetailsCard.vue";

export default {
  props:['user','contact'],
  components: {
    ContactDetailsCard
  }
}
</script>