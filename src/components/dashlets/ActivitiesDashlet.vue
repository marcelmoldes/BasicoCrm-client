<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">My Activities</h1>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0" scope="col">Subject</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Activity Date</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Notes</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Location</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Status</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Description</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Created At</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-if="activities.length === 0">
        <td class="text-center text-gray-500 py-2" colspan="7">No activities found</td>
      </tr>
      <tr v-for="activity in activities" :key="activity">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ formatters.toProperCase(activity.subject) }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatDate(activity.activity_date) }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ activity.notes }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ activity.location }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ activity.status }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ activity.description }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatDate(activity.created_at) }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['activities'],
  data() {
    return {
      formatters
    }
  },
}
</script>