<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <div class="justify-between flex">
      <span class="text-gray-600 text-xl font-bold">My Deals</span>
      <button @click="$router.push(addUrl)" class="bg-blue-500 hover:bg-blue-600 font-bold text-sm py-2 px-1 text-white rounded-lg">Add Deal</button>
    </div>
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
      <tbody class="divide-y divide-gray-200">

      <tr class="hover:bg-gray-100 cursor-pointer" v-for="deal in deals" :key="deal" @click="$router.push(`/deals/${deal.id}`)">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ formatters.toProperCase(deal.deal_name) }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.toProperCase(deal.Account ? deal.Account.name : '-') }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
            formatters.formatAmount(deal.deal_value, '$')
          }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.formatDate(deal.close_date) }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.toProperCase(deal.status) }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['deals','addUrl'],
  data() {
    return {
      formatters
    }
  },
}
</script>