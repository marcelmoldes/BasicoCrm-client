<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">My Accounts</h1>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Account Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Website</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Industry</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Revenue</th>
      </tr>
      </thead>
      <tbody v-for="account in accounts.records" :key="account" class="divide-y divide-gray-200">
      <tr >
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{account.name}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{account.phone_id}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{account.website}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{account.address_id}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{account.industry}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{account.annual_revenue}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ['user'],
  data() {
    return {
      accounts: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8081/accounts?recordsPerPage=5',
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        });
    if (response.data.success) {
      this.accounts = response.data;
    } else {
      this.$emit('sessionExpired');
    }
  }
}
</script>