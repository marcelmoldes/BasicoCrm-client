<template>
  <div class="flex   shadow-gray-400 shadow  p-3 px-28   justify-end gap-6">
    <button id="form"
            class="rounded-full border-gray-200 border  px-4 py-3  font-semibold text-white shadow-sm hover:opacity-90"
            type="button"
    >Save Contact
    </button>

  </div>


  <div class="flex justify-center gap-3 mt-3 px-3">

    <div id="form"
        class="grid max-w-2xl    mt-8 p-10  grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium decoration-blue-500 leading-6 text-gray-900" for="first-name">First

          name</label>
        <div class="mt-2">
          <input   :value="contact.first_name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Last name</label>
        <div class="mt-2">
          <input  id="last-name" autocomplete="family-name" :value="contact.last_name"
                 class="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="last-name"
                 type="text">
        </div>
      </div>
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">Address</label>
        <div class="mt-2">
          <input id="first-name" autocomplete="given-name"
                 class="p-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Email </label>

        <input    :value="contact.email"
               class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="last-name"
               type="text">
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">Phone</label>

        <input 
               class="p-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="first-name"
               type="text">
      </div>


      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Website </label>

        <input :value="contact.website"
               class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="last-name"
               type="text">
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Lead Source</label>

        <select id="country"
                class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Lead Status</label>

        <select id="country"
                class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

    </div>
    <div id="form"
        class="grid max-w-2xl   mt-8 p-10  grid-cols-4 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900 " for="first-name">Annual Revenue</label>

        <input :value="contact.annual_revenue"
               class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="first-name"
               type="text">
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Industry</label>

        <select id="country"
                class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Account Name</label>

        <select id="country"
                class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

      </div>
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Title </label>

        <input :value="contact.title"
               class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="last-name"
               type="text">

      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Account Owner</label>

        <select id="country"
                class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option></option>

        </select>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Lead Status</label>

        <select id="country"
                class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      <div class="mt-2"><label class=" text-sm font-medium text-center text-gray-900">Notes</label>
        <textarea :value="contact.notes"
                  class="block w-full rounded-md border-0  px-40 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="comment"
              ></textarea>
      </div>
    </div>
  </div>


  <div class="ml-52  px-28 p-4">

    <div   id="form"
        class="grid  max-w-2xl mt-10 border-2 border-gray-300 justify-center p-10 rounded-md grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">Street Address</label>
        <div class="mt-2">
          <input id="first-name" autocomplete="given-name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">State</label>
        <div class="mt-2">
          <input id="first-name" autocomplete="given-name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">City</label>
        <div class="mt-2">
          <input id="first-name" autocomplete="given-name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Country </label>
        <div class="mt-2">
          <input id="last-name" autocomplete="family-name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="last-name"
                 type="text">
        </div>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">Postal Code</label>
        <div class="mt-1 p-4">
          <input id="first-name" autocomplete="given-name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>

    </div>
  </div>

</template>
<script >
import axios from "axios";


export default {
  props: ['user'],
  data() {
    return {
      contact: {}
    }
  },
  async mounted() {
   await this.loadData()
  },
  methods:{
    async loadData() {
      const response = await axios.get('http://localhost:8081/contacts/' + this.$route.params.id,
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
    }
  }



}
</script>