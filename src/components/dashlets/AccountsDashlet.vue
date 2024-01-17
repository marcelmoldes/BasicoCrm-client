<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">My Accounts</h1>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr class="hover:bg-gray-100 cursor-pointer">
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Account Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Website</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Industry</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Revenue</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-if="accounts.length === 0">
        <td colspan="6" class="text-center text-gray-500 py-2">No accounts found</td>
      </tr>
      <tr v-for="account in accounts" :key="account">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ formatters.toProperCase(account.name) }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatPhoneNumber(account.PhoneNumber ? account.PhoneNumber.number : '-') }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ account.website }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ account.Address ? account.Address.street_address1 : '-' }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ account.industry }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatAmount(account.annual_revenue, '$') }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['accounts'],
  data() {
    return {
      formatters
    }
  },
}
</script>