<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <div class="justify-between flex">
      <span class="text-gray-600 text-xl font-bold">My Activities</span>
      <button @click="$router.push(addUrl)" class="bg-blue-500 hover:bg-blue-600 font-bold text-sm py-2 px-1 text-white rounded-lg">Add Activity</button>
    </div>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0" scope="col">Title</th>
        <th class=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Activity Date</th>

        <th class= " px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Location</th>
        <th class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Notes</th>
        <th class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Completed</th>
        <th class=" hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Created At</th>
      </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
      <tr v-if="activities.length === 0" >
        <td class="text-center text-gray-500 py-2" colspan="6">No activities found</td>
      </tr>
      <tr v-for="activity in activities" :key="activity" class="hover:bg-gray-100 cursor-pointer" @click="$router.push(`/activities/${activity.id}`)">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ formatters.toProperCase(activity.title) }}
        </td>
        <td class="  whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatDate(activity.activity_date) }}
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ activity.location }}</td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ activity.notes }}</td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
          {{ activity.completed ? 'Yes' : 'No' }}
        </td>
        <td class="hidden md:table-cell  whitespace-nowrap px-3 py-4 text-sm text-gray-500">
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
  props: ['activities','addUrl'],
  emits:['addActivity'],

  data() {
    return {
      formatters
    }
  },

}
</script>