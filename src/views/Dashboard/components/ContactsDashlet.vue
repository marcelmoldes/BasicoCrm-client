<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">My Contacts</h1>
    <table class="min-w-full  divide-y divide-gray-300">
      <thead>
      <tr class="">
        <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0" scope="col">First Name</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Last Name</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Phone</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Email</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Website</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Lead Source</th>
      </tr>
      </thead>
      <tbody v-for="contact in contacts.records" :key="contact" class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ formatters.toProperCase(contact.first_name) }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.toProperCase(contact.last_name) }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatPhoneNumber(contact.PhoneNumber ? contact.PhoneNumber.number : '-') }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div class="w-48 truncate">{{ contact.email }}</div>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ contact.website }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.toProperCase(contact.lead_source) }}
        </td>
      </tr>

      <!-- More people... -->
      </tbody>
    </table>
  </div>

</template>
<script>
import axios from "axios";
import formatters from "../../../helpers/formatters";

export default {
  computed: {
    formatters() {
      return formatters
    }
  },
  props: ['user'],
  data() {
    return {
      contacts: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8081/contacts?recordsPerPage=5',
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        });
    if (response.data.success) {
      this.contacts = response.data;
    } else {
      this.$emit('sessionExpired');
    }
  }
}
</script>