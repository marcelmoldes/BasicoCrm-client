<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">My Contacts</h1>
    <table class="min-w-full  divide-y divide-gray-300">
      <thead>
      <tr>
        <th class=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0" scope="col">First Name</th>
        <th class="md px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Last Name</th>
        <th class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Phone</th>
        <th class=" px-16 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Email</th>
        <th class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Website</th>
        <th class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Lead Source</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-if="contacts.length === 0">
        <td colspan="6" class="text-center text-gray-500 py-2">No contacts found</td>
      </tr>
      <tr v-for="contact in contacts" class="hover:bg-gray-100 cursor-pointer" :key="contact" @click="$router.push(`/contacts/${contact.id}`)">
        <td class=" whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ formatters.toProperCase(contact.first_name) }}
        </td>
        <td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.toProperCase(contact.last_name) }}
        </td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatPhoneNumber(contact.PhoneNumber ? contact.PhoneNumber.number : '-') }}
        </td>
        <td class= " whitespace-nowrap md:px-4 py-4 text-sm text-gray-500">
          <div class="w-48 truncate">{{ contact.email }}</div>
        </td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ contact.website }}</td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.toProperCase(contact.lead_source) }}
        </td>
      </tr>

      <!-- More people... -->
      </tbody>
    </table>
  </div>

</template>
<script>
import formatters from "../../helpers/formatters";

export default {
  computed: {
    formatters() {
      return formatters
    }
  },
  props: ['contacts'],
}
</script>