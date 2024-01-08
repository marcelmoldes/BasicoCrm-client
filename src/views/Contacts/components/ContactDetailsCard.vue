<template>
  <div class="flex  shadow-gray-400 shadow  p-3 px-28  justify-end gap-6">
    <button id="form" class="rounded-full hover:opacity-90  px-4 py-3  font-semibold text-white shadow-sm hover:bg-blue-600/50"
            type="button"
            @click="$router.push('/contact-edit')">Edit Contact
    </button>
    <button id="form" class="rounded-full hover:opacity-90   px-4 py-3  font-semibold text-white shadow-sm hover:bg-blue-600/50"
            type="button">Delete
      Contact
    </button>
  </div>

  <div  class="flex justify-center gap-x-10 mt-3 px-3">

    <div
        class="grid max-w-2xl bg-white ring-2 ring-gray-300 mt-8 p-10 rounded-md grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium decoration-blue-500 leading-6 text-gray-900" for="first-name">First
          name</label>
        <div class="mt-2">
          <input id="first-name" autocomplete="given-name"
                 class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="first-name"
                 type="text">
        </div>
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Last name</label>
        <div class="mt-2">
          <input id="last-name" autocomplete="family-name"
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

        <input id="last-name" autocomplete="family-name"
               class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="last-name"
               type="text">
      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">Phone</label>

        <input id="first-name" autocomplete="given-name"
               class="p-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="first-name"
               type="text">
      </div>


      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Website </label>

        <input id="last-name" autocomplete="family-name"
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
    <div
        class="grid max-w-2xl border-2 border-gray-300 mt-8 p-10 rounded-md grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900 " for="first-name">Annual Revenue</label>

        <input  id="first-name" autocomplete="given-name"
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

        <input id="last-name" autocomplete="family-name"
               class="p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               name="last-name"
               type="text">

      </div>

      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900">Account Owner</label>

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

      <div class="mt-2"><label class=" text-sm font-medium text-center text-gray-900">Notes</label>
        <textarea id="comment"
                  class="block w-full rounded-md border-0  px-40 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="comment"
                  rows="4"></textarea>
      </div>
    </div>
  </div>


  <div class=" ml-96 flex px-28 p-6">

    <div
        class="grid  max-w-2xl mt-10 border-2 border-gray-300 justify-center p-10 rounded-md grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
      <div class="sm:col-span-3">
        <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">Address</label>
        <div class="mt-2">
          <input  id="first-name" autocomplete="given-name"
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
<script>
import axios from "axios";


export default {
  props: ['user',],
  data() {
    return {
      contact: {}
    }
  },
  async mounted() {
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
</script>