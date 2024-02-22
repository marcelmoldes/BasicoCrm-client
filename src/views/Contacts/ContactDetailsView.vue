<template>
  <div v-if="contact">
    <div class="md:flex md:items-center md:justify-between h-24">
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
      Contact    {{ contact.first_name }} {{ contact.last_name }}</h2>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button @click="$router.push(`/contacts/${contact.id}/edit`)"
                class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Edit
        </button>
        <button @click="removeContact(contact.id)" type="button"
                class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Delete
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-8">
      <contact-details-card
          :contact="contact"></contact-details-card>
      <contact-address-card :contact="contact"></contact-address-card>
      <tasks-dashlet :showViewButton="true" :contactId="contact.id" :tasks="contact.Tasks" :addUrl="`/tasks/create/?contactId=${contact.id}`"></tasks-dashlet>
      <activities-dashlet :activities="contact.Activities" :addUrl="`/activities/create/?contactId=${contact.id}`"></activities-dashlet>
      <attachments-dashlet :attachments="contact.Attachments" :addUrl="`/attachments/create/?contactId=${contact.id}`"></attachments-dashlet>
    </div>
  </div>


</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import ContactDetailsCard from "@/views/Contacts/components/ContactDetailsCard.vue";
import ContactAddressCard from "@/views/Contacts/components/ContactAddressCard.vue";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";
import ActivitiesDashlet from "@/components/dashlets/ActivitiesDashlet.vue";
import AttachmentsDashlet from "@/components/dashlets/AttachmentsDashlet.vue";

export default {
  components: {AttachmentsDashlet, ActivitiesDashlet, TasksDashlet, ContactDetailsCard, ContactAddressCard},
  props: ['user','contactId'],
  data() {
    return {
      formatters,
      contact: false,
    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get(process.env.VUE_APP_API_URL + 'contacts/' + this.$route.params.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.contact = response.data.contact;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async removeContact(contactId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete this contact?"
      );
      if (confirmDelete) {
        await axios.delete(
            process.env.VUE_APP_API_URL + "/contacts/" + contactId,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        this.$router.push('/contacts')

      }

    },
  }

}
</script>