<template>
  <div>
    <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="border-b border-1 border-gray-150 text-lg text-gray-900 font-semibold bg-gray-50 p-4 py-2">Activity
        Details
      </div>
      <div class="px-4 py-4">
        <dl class="divide-y divide-gray-100">
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Description</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ activity.description }}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Activity Date</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ formatters.formatDate(activity.activity_date) }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Location</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ activity.location }}</dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Account Name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ formatters.toProperCase(activity.Account.name) }}
            </dd>
          </div>

          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Contact Name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ activity.Contact.first_name + ' ' + activity.Contact.last_name }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Status</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ formatters.toProperCase(activity.status) }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Notes</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ activity.notes }}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Activity Owner</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ activity.User.first_name + ' ' + activity.User.last_name }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Created At</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ formatters.formatDate(activity.created_at) }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="bg-white mt-5 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="border-b border-1 border-gray-150 text-lg text-gray-900 font-semibold bg-gray-50 p-4 py-2">Contact
        Details
      </div>
      <div class="px-4 py-4">
        <dl class="divide-y divide-gray-100">
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ activity.Contact.first_name + ' ' + activity.Contact.last_name }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Title</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ formatters.toProperCase(activity.Contact.title) }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ activity.Contact.email }}</dd>
          </div>
          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Webiste</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {{
                (activity.Contact.website)
              }}
            </dd>
          </div>

          <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Industry</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {{ formatters.toProperCase(activity.Contact.industry) }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Annual Revenue</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              ${{ formatters.formatAmount(activity.Contact.annual_revenue) }}
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
  props: ['activity'],
  data() {
    return {
      formatters
    }
  }
}
</script>