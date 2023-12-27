<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-700 text-xl font-bold">My Deals</h1>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Deal Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Account Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Deal Value</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Close Date</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
      </tr>
      </thead>
      <tbody v-for="deal in deals.records" :key="deal" class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{deal.deal_name}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{deal.account_id}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ deal.deal_value }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ deal.close_date }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ deal.status }}</td>
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
      deals: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8081/deals?recordsPerPage=5',
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        });
    if (response.data.success) {
      this.deals = response.data;
    } else {
      this.$emit('sessionExpired');
    }
  }
}
</script>