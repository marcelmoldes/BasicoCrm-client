<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Deal Information</h2>
      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Deal Name</label>
              <input v-model="deal.deal_name"
                     :class="errors.deal_name ? 'border border-red-300' : 'border-0'"

                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.deal_name" class="text-sm text-red-400">{{ errors.deal_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Close Date</label>
              <input v-model="deal.close_date"
               type="date"   :class="errors.close_date ? 'border border-red-300' : 'border-0'"

                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.close_date" class="text-sm text-red-400">{{ errors.close_date }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Deal Value</label>
              <input v-model="deal.deal_value" :class="errors.deal_value ? 'border border-red-300' : 'border-0'"
                class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.deal_value" class="text-sm text-red-400">{{errors.deal_value}}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Deal Owner</label>
              <select v-model="deal.user_id" :class="errors.user_id ? 'border border-red-300' : 'border-0'"
                      class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="user.id" v-for="user in options.users" :key="user.id">{{ user.first_name }} {{ user.last_name }}</option>
              </select>
              <div v-if="errors.user_id" class="text-sm text-red-400">{{ errors.user_id }}</div>
            </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">Status</label>
            <select v-model="deal.status" :class="errors.status ? 'border border-red-300' : 'border-0'"
                    class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option :value="status.value" v-for="status in options.status" :key="status.value">{{ status.label }}</option>
            </select>
            <div v-if="errors.status" class="text-sm text-red-400">{{ errors.status }}</div>
          </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Account Name</label>
              <select v-model="deal.account_id" @change="deal.contact_id = null; deal.deal_id = null;" :class="errors.account_id ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="account.id" v-for="account in options.accounts" :key="account.id">{{ account.name }}</option>
              </select>
              <div v-if="errors.account_id" class="text-sm text-red-400">{{ errors.account_id }}</div>
            </div>

        </div>

        </div>
      </form>
    </div>
  </div>


</template>

<script>
import Toastify from "toastify-js";
import axios from "axios";
import formatters from "@/helpers/formatters";

export default {
  props: ['user','accountId'],
  data() {
    return {
      formatters,
      deal: {},
      options: {
        accounts: [],
        users: [],

      },
      errors: {}
    }
  },
  async mounted() {
    this.loadOptions();
    if (this.$route.query.contactId) {
      this.deal.contact_id = this.$route.query.contactId;
    }
    if (this.$route.query.dealId) {
      this.deal.deal_id = this.$route.query.dealId;
    }
    if (this.$route.query.accountId) {
      this.deal.account_id = this.$route.query.accountId;
    }
    if (this.$route.params.id) {
      await this.loadData();
    }
    this.$eventBus.on('saveDeal', this.saveDeal)
  },
  methods: {
    async loadOptions() {
      const response = await axios.get('http://localhost:8081/deals/options',
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.options = response.data.options;
      }
    },
    async loadData() {
      const response = await axios.get('http://localhost:8081/deals/' + (this.$route.params.id ? this.$route.params.id : this.deal.id),
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        Object.assign(this.deal, response.data.deal);
        this.deal.close_date = formatters.formatDateYmd(this.deal.close_date)
      } else {
        this.$emit('sessionExpired');
      }
    },
    async saveDeal() {
      let response;
      let message = !this.deal.id;
      this.errors = {}
      if (this.deal.id) {
        response = await axios.put(
            process.env.VUE_APP_API_URL + "/deals/" + this.deal.id,
            this.deal,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            process.env.VUE_APP_API_URL + "/deals/",
            this.deal,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
      }
      if (response.data.success) {
        this.deal.id = response.data.deal.id;
        Toastify({
          text: message
              ? "Deal Create"
              : "Deal Edited",
          position: "center",
          duration: 1000,
        }).showToast();
        await this.loadData();
      } else if (response.data.errors) {
        this.errors = response.data.errors
      }
    },
  }
};


</script>