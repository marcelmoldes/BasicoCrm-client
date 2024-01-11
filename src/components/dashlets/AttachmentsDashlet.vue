<template>
  <div class="p-4  border-2 border-gray-300 rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">My Attachments</h1>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0" scope="col">Name</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Path</th>
        <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">Date Added</th>


      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-if="attachments.length === 0">
        <td class="text-center text-gray-500 py-2" colspan="6">No attachments found</td>
      </tr>
      <tr v-for="attachment in attachments" :key="attachment">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ attachment.name }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ attachment.path }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.formatDate(attachment.created_at) }}
        </td>


      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['attachments'],
  data() {
    return {
      formatters
    }
  },
}
</script>