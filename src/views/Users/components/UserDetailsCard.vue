<template>
  <div>
    <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">

      <div
          class="flex p-2  justify-between border-b border-1 border-gray-150 text-lg text-gray-900 font-semibold bg-gray-50">
        <h1 class="p-2">User Details</h1>
      </div>

      <div class="px-4 py-4">
        <dl class="divide-y divide-gray-100">
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ users.email }}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">First Name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {{users.first_name}}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Last Name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ users.last_name }}</dd>
          </div>

        </dl>
      </div>
    </div>
  </div>

</template>
<script>
import formatters from "@/helpers/formatters";

export default {
  props: ['users', 'showViewButton'],
  data() {
    return {
      formatters,
    }
  }
}
</script>