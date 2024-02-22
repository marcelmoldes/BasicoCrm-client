<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Contact Information</h2>

      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">First name</label>

              <input v-model="contact.first_name" :class="errors.first_name ? 'border border-red-300' : 'border-0'"
                     autocomplete="given-name"
                     class="block w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Last name</label>

              <input v-model="contact.last_name" :class="errors.last_name ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Title</label>

              <input v-model="contact.title" :class="errors.title ? 'border border-red-300' : 'border-0'"
                     class="block w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.title" class="text-sm text-red-400">{{ errors.title }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>

              <input v-model="contact.email" autocomplete="email"
                     :class="errors.email ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     type="email">
              <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Lead Source</label>

              <select v-model="contact.lead_source" :class="errors.lead_source ? 'border border-red-300' : 'border-0'"
                      class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option>frfrf</option>

              </select>
              <div v-if="errors.lead_source" class="text-sm text-red-400">{{ errors.lead_source }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Website</label>

              <input v-model="contact.website" :class="errors.website ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     type="email">

              <div v-if="errors.website" class="text-sm text-red-400">{{ errors.website }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Industry</label>
              <select v-model="contact.industry" :class="errors.industry ? 'border border-red-300' : 'border-0'"
                      class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option>{{ contact.industry }}</option>
                <option>rfrfr</option>
              </select>
              <div v-if="errors.industry" class="text-sm text-red-400">{{ errors.industry }}</div>
            </div>


            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Lead Status</label>
              <select v-model="contact.lead_status" :class="errors.lead_status ? 'border border-red-300' : 'border-0'"
                      class="bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option>fsrfsrf</option>

              </select>
              <div v-if="errors.lead_status" class="text-sm text-red-400">{{ errors.lead_status }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Annual Revenue</label>
              <input v-model="contact.annual_revenue"
                     :class="errors.annual_revenue ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.annual_revenue" class="text-sm text-red-400">{{ errors.annual_revenue }}</div>
            </div>

            <div class="sm:col-span-3" >
              <label class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
              <div class="flex items-center justify-center gap-x-1">
                <select v-model="contact.PhoneNumber.country_code" :class="errors.country_code ? 'border border-red-300' : 'border-0'"
                        class="bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option value="01">+1</option>
                  <option value="34">+34</option>
                </select>
                <input v-model="contact.PhoneNumber.number" :class="errors.number ? 'border border-red-300' : 'border-0'"
                       class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
              <div v-if="errors.number || errors.country_code" class="text-sm text-red-400">{{ errors.number || errors.country_code }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Notes</label>
              <textarea v-model="contact.notes" :class="errors.notes ? 'border border-red-300' : 'border-0 '"
                        class="border-0 bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" rows="5"></textarea>
              <div v-if="errors.notes" class="text-sm text-red-400">{{ errors.notes }}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3" v-if="contact.Address">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Address Information</h2>
      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">StreetAddress 1</label>
              <input v-model="contact.Address.street_address1" :class="errors.street_address1 ? 'border border-red-300' : 'border-0 '"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.street_address1" class="text-sm text-red-400">{{ errors.street_address1 }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Street Address 2 </label>

              <input  v-model="contact.Address.street_address2" :class="errors.street_address2 ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.street_address2" class="text-sm text-red-400">{{ errors.street_address2 }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">State</label>

              <input  v-model="contact.Address.state" :class="errors.state ? 'border border-red-300' : 'border-0 '"
                     class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.state" class="text-sm text-red-400">{{ errors.state }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">City</label>

              <input  v-model="contact.Address.city" :class="errors.city ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.city" class="text-sm text-red-400">{{ errors.city }}</div>

            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Country</label>

              <input  v-model="contact.Address.country" :class="errors.country ? 'border border-red-300' : 'border-0 '"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.country" class="text-sm text-red-400">{{ errors.country }}</div>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Postal Code</label>
              <input v-model="contact.Address.postal_code" :class="errors.postal_code ? 'border border-red-300' : 'border-0 '"
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
      contact: {
        PhoneNumber: {
          country_code: "01"
        },
        Address: {}
      },
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
      const response = await axios.get(process.env.VUE_APP_API_URL + '/contacts/' + (this.$route.params.id ? this.$route.params.id : this.contact.id),
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        Object.assign(this.contact, response.data.contact);
      } else {
        this.$emit('sessionExpired');
      }
    },
    async saveContact() {
      let response;
      let message = !this.contact.id;
      this.errors = {}
      if (this.contact.id) {
        response = await axios.put(
            process.env.VUE_APP_API_URL + "/contacts/" + this.contact.id,
            this.contact,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            process.env.VUE_APP_API_URL + "/contacts/",
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