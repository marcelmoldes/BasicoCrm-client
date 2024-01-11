<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Contact Information</h2>

      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">First name</label>

              <input v-model="contact.first_name" :class="errors.first_name ? 'border border-red-300' : 'border-0'" autocomplete="given-name"
                     class="block w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Last name</label>

              <input v-model="contact.last_name"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Title</label>

              <input v-model="contact.title"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.title" class="text-sm text-red-400">{{ errors.title }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>

              <input v-model="contact.email" autocomplete="email"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     type="email">
              <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Lead Source</label>

              <select
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option>{{ contact.lead_source }}</option>
                <option>rggdrgr</option>
              </select>
              <div v-if="errors.lead_source" class="text-sm text-red-400">{{ errors.lead_source }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Website</label>

              <input v-model="contact.website"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     type="email">

              <div v-if="errors.website" class="text-sm text-red-400">{{ errors.website }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Industry</label>
              <select
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="contact.industry"></option>
                <option>rggdrgr</option>
              </select>
              <div v-if="errors.industry" class="text-sm text-red-400">{{ errors.industry }}</div>
            </div>


            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Lead Status</label>
              <select
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option>{{ contact.lead_status }}</option>
                <option>rggdrgr</option>
              </select>
              <div v-if="errors.lead_status" class="text-sm text-red-400">{{ errors.lead_status }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Annual Revenue</label>
              <input :value="formatters.formatAmount(contact.annual_revenue)"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.annual_revenue" class="text-sm text-red-400">{{ errors.annual_revenue }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Notes</label>
              <textarea v-model="contact.notes" class="w-96 border border-gray-200 p-2 px-4" rows="5"></textarea>
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

              <input :value="contact.Address ? contact.Address.street_address1 : '-'" autocomplete="given-name"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Street Address 2 </label>

              <input :value="contact.Address ? contact.Address.street_address2 : '-'"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">

            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">State</label>

              <input :value="contact.Address ? contact.Address.state : '-'"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
           </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">City</label>

              <input :value="contact.Address ? contact.Address.city : '-'"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
              </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Country</label>

              <input :value="contact.Address ? contact.Address.country : '-'"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
             </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Postal Code</label>
              <input :value="contact.Address ? contact.Address.postal_code : '-'"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
    </div>

          </div>
          <button class="bg-gray-200" @click="saveContact">ff4ff</button>
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
      contact: false,
      errors: {}
    }
  },
  async mounted() {
    if (this.$route.params.id) {
      await this.loadData();
    }
    this.$eventBus.on('saveContact', this.saveContact)
  },
  methods: {
    async loadData() {
      const response = await axios.get('http://localhost:8081/contacts/' + (this.$route.params.id ? this.$route.params.id : this.contact.id),
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
    async saveContact() {
      let response;
      let message = !this.contact.id;
      if (this.contact.id) {
        response = await axios.put(
            "http://localhost:8081/contacts/" + this.contact.id,
            this.contact,

            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            "http://localhost:8081/contacts/",
            this.contact,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
      }
      if (response.data.success) {
        this.contact.id = response.data.contact.id;
        Toastify({
          text: message
              ? "Contact Create"
              : "Contact Edited",
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