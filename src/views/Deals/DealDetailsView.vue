<template>
  <div v-if="deal">
    <div class="md:flex md:items-center md:justify-between h-24">
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
            Deal {{ formatters.toProperCase(deal.deal_name) }}</h2>


      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button @click="$router.push(`/deals/${deal.id}/edit`)"
                class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Edit
        </button>
        <button @click="removeDeal(deal.id)" type="button"
                class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Delete
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-8">
      <deal-details-card
          :deal="deal"></deal-details-card>
      <account-details-card
          :account="deal.Account"
          v-if="deal.Account"
          :showViewButton="true">
        ></account-details-card>
      <activities-dashlet :activities="deal.Activities" :addUrl="`/activities/create/?dealId=${deal.id}`"></activities-dashlet>
      <tasks-dashlet :showViewButton="true"  :tasks="deal.Tasks" :addUrl="`/tasks/create/?dealId=${deal.id}`"></tasks-dashlet>
      <attachments-dashlet :attachments="deal.Attachments" :addUrl="`/attachments/create/?dealId=${deal.id}`"></attachments-dashlet>

    </div>
  </div>


</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import DealDetailsCard from "@/views/Deals/components/DealDetailsCard.vue";
import AccountDetailsCard from "@/views/Accounts/components/AccountDetailsCard.vue";
import ActivitiesDashlet from "@/components/dashlets/ActivitiesDashlet.vue";
import AttachmentsDashlet from "@/components/dashlets/AttachmentsDashlet.vue";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";

export default {
  components: {
    AttachmentsDashlet,TasksDashlet,
    ActivitiesDashlet, AccountDetailsCard, DealDetailsCard},
  props: ['user'],
  data() {
    return {
      formatters,
      deal: false,

    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get(process.env.VUE_APP_API_URL + 'deals/' + this.$route.params.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.deal = response.data.deal;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async removeDeal(dealId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete this deal?"
      );
      if (confirmDelete) {
        await axios.delete(
            process.env.VUE_APP_API_URL + "/deals/" + dealId,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        this.$router.push('/deals')

      }

    },
  }
}
</script>