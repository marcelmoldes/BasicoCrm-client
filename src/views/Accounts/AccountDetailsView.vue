<template>
  <div v-if="account">
    <div class="md:flex md:items-center md:justify-between h-24">
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          {{ formatters.toProperCase(account.name) }}</h2>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                @click="$router.push(`/accounts/${account.id}/edit`)">
          Edit
        </button>
        <button class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button"
                @click="removeAccount(account.id)">
          Delete
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-8">
   <account-details-card :account="account"></account-details-card>
      <account-address-card v-if="account.Address" :account="account"></account-address-card>
      <contact-details-card :contact="account.Contact" v-if="account.Contact" :showViewButton="true"></contact-details-card>
      <deals-dashlet :deals="account.Deals" :addUrl="`/deals/create/?accountId=${account.id}`"></deals-dashlet>
      <tasks-dashlet :tasks="account.Tasks" :addUrl="`/tasks/create/?accountId=${account.id}`"></tasks-dashlet>
      <activities-dashlet :activities="account.Activities" :addUrl="`/activities/create/?accountId=${account.id}`"></activities-dashlet>
      <attachments-dashlet :attachments="account.Attachments" :addUrl="`/attachments/create/?accountId=${account.id}`"></attachments-dashlet>
    </div>
  </div>


</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";

import AccountAddressCard from "@/views/Accounts/components/AccountAddressCard.vue";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";
import AttachmentsDashlet from "@/components/dashlets/AttachmentsDashlet.vue";
import ActivitiesDashlet from "@/components/dashlets/ActivitiesDashlet.vue";
import DealsDashlet from "@/components/dashlets/DealsDashlet.vue";
import AccountDetailsCard from "@/views/Accounts/components/AccountDetailsCard.vue";
import ContactDetailsCard from "@/views/Contacts/components/ContactDetailsCard.vue";


export default {
  components: {
    ContactDetailsCard,
    AccountDetailsCard,
    DealsDashlet,
    ActivitiesDashlet,
    AttachmentsDashlet,
    TasksDashlet,
    AccountAddressCard,

  },
  props: ['user'],
  data() {
    return {
      formatters,
      account: false
    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get('http://localhost:8081/accounts/' + this.$route.params.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.account = response.data.account;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async removeAccount(accountId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete this account?"
      );
      if (confirmDelete) {
        await axios.delete(
            "http://localhost:8081/accounts/" + accountId,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        this.$router.push('/accounts')

      }

    },
  }
}
</script>