<template>
  <div class="p-4   border-2 border-gray-300  bg-white rounded-md">
    <div class="justify-between flex">
      <span class="text-gray-600 text-xl font-bold">My Tasks</span>
      <button @click="$router.push(addUrl)"  v-if="showViewButton"  class="bg-blue-500 hover:bg-blue-600 font-bold text-sm py-2 px-2 text-white rounded-lg">Add Task</button>
    </div>
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th scope="col" class="hidden md:table-cell py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Contact Name</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Task Name</th>
        <th scope="col" class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Due Date</th>
        <th scope="col" class="  px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
        <th scope="col" class="hidden md:table-cell  px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Account Name</th>
        <th scope="col" class=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Priority</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-if="tasks.length === 0">
        <td colspan="6" class="text-center text-gray-500 py-2">No tasks found</td>
      </tr>
      <tr v-for="task in tasks" :key="task" class="hover:bg-gray-100 cursor-pointer" @click="$router.push(`/tasks/${task.id}`)">
        <td class="hidden md:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {{ task.Contact ? task.Contact.first_name : '-' }}
        </td>
        <td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{ formatters.toProperCase(task.name) }}</td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.formatDate(task.due_date) }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.toProperCase(task.status) }}</td>
        <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ formatters.toProperCase(task.Account ? task.Account.name : '-') }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatters.toProperCase(task.priority) }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['tasks','addUrl','showViewButton'],
  emits:['addActivity'],
  data() {
    return {
      formatters
    }
  },
}
</script>