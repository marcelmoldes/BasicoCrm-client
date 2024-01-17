<template>
  <div v-if="activity">
    <div class="md:flex md:items-center md:justify-between h-24">
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          {{ formatters.toProperCase(activity.title) }}</h2>
        <h1>Activity for   {{ activity.Contact ? (activity.Contact.first_name + ' ' + activity.Contact.last_name) : '-' }}</h1>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button @click="$router.push(`/activities/${activity.id}/edit`)"
                class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Edit
        </button>
        <button @click="removeActivity(activity.id)" type="button"
                class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Delete
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-8">
      <activity-details-card
          :activity="activity"></activity-details-card>
      <contact-details-card
          :contact="activity.Contact"
          v-if="activity.Contact"
      ></contact-details-card>
      <!--deal details card-->
      <!--account details card-->
    </div>
  </div>


</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import ActivityDetailsCard from "@/views/Activities/components/ActivityDetailsCard.vue";
import ContactDetailsCard from "@/views/Contacts/components/ContactDetailsCard.vue";


export default {
  components: {ContactDetailsCard, ActivityDetailsCard},
  props: ['user'],
  data() {
    return {
      formatters,
      activity: false
    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get('http://localhost:8081/activities/' + this.$route.params.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.activity = response.data.activity;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async removeActivity(activityId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete this activity?"
      );
      if (confirmDelete) {
        await axios.delete(
            "http://localhost:8081/activities/" + activityId,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        this.$router.push('/activities')

      }

    },
  }
}
</script>