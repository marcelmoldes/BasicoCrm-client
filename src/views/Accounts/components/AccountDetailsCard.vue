<template>
  <div>
    <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="flex p-2  justify-between border-b border-1 border-gray-150 text-lg text-gray-900 font-semibold bg-gray-50">
        <h1 class="p-2">Account Details</h1>
        <button v-if="showViewButton" @click="$router.push(`/accounts/${account.id}`)"  class="bg-blue-600 hover:opacity-90 font-bold text-sm mr-7 py-1  px-6 text-white rounded-lg">View</button>
      </div>

      <div class="px-4 py-4">
        <dl class="divide-y divide-gray-100">
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Account Name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ account.name }}
            </dd>
          </div>

          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Employees</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ account.employees }}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Website</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ account.website }}</dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Annual Revenue</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              ${{ formatters.formatAmount(account.annual_revenue) }}
            </dd>
          </div>

          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Industry</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ account.industry }}</dd>
          </div>

          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Account Owner</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ account.User ? account.User.first_name : '-' }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Notes</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ account.notes }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['account', 'showName','showViewButton'],
  data() {
    return {
      formatters
    }
  }
}
</script>