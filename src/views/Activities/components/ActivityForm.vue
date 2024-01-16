<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Activity Information</h2>
      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Activity Title</label>
              <input v-model="activity.title" :class="errors.title ? 'border border-red-300' : 'border-0'"
                     autocomplete="given-name"
                     class="block w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.title" class="text-sm text-red-400">{{ errors.title }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Activity Date</label>

              <input v-model="activity.activity_date"
                     :class="errors.activity_date ? 'border border-red-300' : 'border-0'"
                     type="date"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.activity_date" class="text-sm text-red-400">{{ errors.activity_date }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Location</label>
              <input v-model="activity.location" :class="errors.location ? 'border border-red-300' : 'border-0'"
                     class="block w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.location" class="text-sm text-red-400">{{ errors.location }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Activity Owner</label>
              <select v-model="activity.user_id" :class="errors.user_id ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="user.id" v-for="user in options.users" :key="user.id">{{ user.first_name }} {{ user.last_name }}</option>
              </select>
              <div v-if="errors.user_id" class="text-sm text-red-400">{{ errors.user_id }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Contact Name</label>
              <select v-model="activity.contact_id" @change="activity.account_id = null" :class="errors.contact_id ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="contact.id" v-for="contact in options.contacts" :key="contact">{{ contact.first_name }} {{ contact.last_name }}</option>
              </select>
              <div v-if="errors.contact_id" class="text-sm text-red-400">{{ errors.contact_id }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Account</label>
              <select v-model="activity.account_id" @change="activity.contact_id = null" :class="errors.account_id ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="account.id" v-for="account in options.accounts" :key="account.id">{{ account.name }}</option>
              </select>
              <div v-if="errors.account_id" class="text-sm text-red-400">{{ errors.account_id }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="font-medium text-gray-900">Completed</label>
                <input v-model="activity.completed" type="checkbox" class="h-4 w-4 flex rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
              </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Notes</label>
              <textarea v-model="activity.notes" :class="errors.notes ? 'border border-red-300' : 'border-0 '"
                        class="border-0 bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" rows="5"></textarea>
              <div v-if="errors.notes" class="text-sm text-red-400">{{ errors.notes }}</div>
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
      activity: {},
      options: {
        contacts: [],
        accounts: [],
        users: []
      },
      errors: {}
    }
  },
  async mounted() {
    this.loadOptions();
    if (this.$route.params.id) {
      await this.loadData();
    }
    this.$eventBus.on('saveActivity', this.saveActivity)
  },
  methods: {
    async loadOptions() {
      const response = await axios.get('http://localhost:8081/activities/options',
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
      const response = await axios.get('http://localhost:8081/activities/' + (this.$route.params.id ? this.$route.params.id : this.activity.id),
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.activity = response.data.activity;
        this.activity.activity_date = formatters.formatDateYmd(this.activity.activity_date)
      } else {
        this.$emit('sessionExpired');
      }
    },
    async saveActivity() {
      let response;
      let message = !this.activity.id;
      this.errors = {}
      if (this.activity.id) {
        response = await axios.put(
            "http://localhost:8081/activities/" + this.activity.id,
            this.activity,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            "http://localhost:8081/activities/",
            this.activity,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
      }
      if (response.data.success) {
        this.activity.id = response.data.activity.id;
        Toastify({
          text: message
              ? "Activity Create"
              : "Activity Edited",
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