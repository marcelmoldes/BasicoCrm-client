<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Account Information</h2>
      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Account Name</label>
              <input v-model="account.name" :class="errors.name ? 'border border-red-300' : 'border-0'"
                     autocomplete="given-name"
                     class="block w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.name" class="text-sm text-red-400">{{ errors.name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Website</label>
              <input v-model="account.website"
                     :class="errors.website ? 'border border-red-300' : 'border-0'"

                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.website" class="text-sm text-red-400">{{ errors.website }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Account Owner</label>
              <select v-model="account.user_id" :class="errors.user_id ? 'border border-red-300' : 'border-0'"
                      class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option v-for="user in options.users" :key="user.id" :value="user.id">{{ user.first_name }}
                  {{ user.last_name }}
                </option>
              </select>
              <div v-if="errors.user_id" class="text-sm text-red-400">{{ errors.user_id }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Industry</label>
              <input v-model="account.industry" :class="errors.industry ? 'border border-red-300' : 'border-0'"
                     class="block w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.industry" class="text-sm text-red-400">{{ errors.industry }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Annual Revenue</label>
              <input v-model="account.annual_revenue"
                     :class="errors.annual_revenue ? 'border border-red-300' : 'border-0'"
                     class="block w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.annual_revenue" class="text-sm text-red-400">{{ errors.annual_revenue }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Employees</label>
              <input v-model="account.employees" :class="errors.employees ? 'border border-red-300' : 'border-0'"
                     class="block w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.employees" class="text-sm text-red-400">{{ errors.employees }}</div>
            </div>


            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Notes</label>
              <textarea v-model="account.notes" :class="errors.notes ? 'border border-red-300' : 'border-0 '"
                        class="border-0 bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        rows="5"></textarea>
              <div v-if="errors.notes" class="text-sm text-red-400">{{ errors.notes }}</div>
            </div>
          </div>


        </div>
      </form>
    </div>
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Address Information</h2>
      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">StreetAddress 1</label>
              <input v-model="account.Address.street_address1"
                     :class="errors.street_address1 ? 'border border-red-300' : 'border-0 '"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.street_address1" class="text-sm text-red-400">{{ errors.street_address1 }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Street Address 2 </label>

              <input v-model="account.Address.street_address2"
                     :class="errors.street_address2 ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.street_address2" class="text-sm text-red-400">{{ errors.street_address2 }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">State</label>

              <input v-model="account.Address.state" :class="errors.state ? 'border border-red-300' : 'border-0 '"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.state" class="text-sm text-red-400">{{ errors.state }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">City</label>

              <input v-model="account.Address.city" :class="errors.city ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.city" class="text-sm text-red-400">{{ errors.city }}</div>

            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Country</label>

              <input v-model="account.Address.country" :class="errors.country ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.country" class="text-sm text-red-400">{{ errors.country }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Postal Code</label>
              <input v-model="account.Address.postal_code"
                     :class="errors.postal_code ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.postal_code" class="text-sm text-red-400">{{ errors.postal_code }}</div>
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
  props: ['user'],
  data() {
    return {
      formatters,
      account: {

        PhoneNumber: {
          country_code: "01"
        },
        Address: {}
      }, options: {
        users: [],

      },
      errors: {}
    }
  },
  async mounted() {
    this.loadOptions();
    if (this.$route.params.id) {
      await this.loadData();
    }
    this.$eventBus.on('saveAccount', this.saveAccount)
  },
  methods: {
    async loadOptions() {
      const response = await axios.get(process.env.VUE_APP_API_URL + '/accounts/options',
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
      const response = await axios.get(process.env.VUE_APP_API_URL + '/accounts/' + (this.$route.params.id ? this.$route.params.id : this.account.id),
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        Object.assign(this.account, response.data.account);
      } else {
        this.$emit('sessionExpired');
      }
    },
    async saveAccount() {
      let response;
      let message = !this.account.id;
      this.errors = {}
      if (this.account.id) {
        response = await axios.put(
            process.env.VUE_APP_API_URL + "/accounts/" + this.account.id,
            this.account,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            process.env.VUE_APP_API_URL + "/accounts/",
            this.account,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
      }
      if (response.data.success) {
        this.account.id = response.data.account.id;
        Toastify({
          text: message
              ? "Account Create"
              : "Account Edited",
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