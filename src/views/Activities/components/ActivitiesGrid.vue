<template>
  <div class="flex flex-col gap-y-3">
    <div class="flex justify-between">
      <select
          class="w-30 rounded-md  py-2.5 pl-3 pr-10 text-black ring-1 ring-inset ring-gray-300 focus:ring-2  sm:text-sm"
          v-model="params.recordsPerPage"
      >
        <option value=10>10 Records Per Page</option>
        <option value=20>20 Records Per Page</option>
        <option value=30>30 Records Per Page</option>
      </select>
      <div class="flex gap-x-3 items-center">
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg aria-hidden="true" class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    fill-rule="evenodd"/>
            </svg>
          </div>
          <input
              class="block w-full rounded-md border ring-1 ring-inset ring-gray-300 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:text-gray-900 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
              placeholder="Search"
              v-model="params.searchString"
              type="text">
        </div>
        <button id="form"
                class="px-8 gap-x-2 font-semibold hover:opacity-90  border-gray-400 border  rounded-full py-2 bg-blue-500 text-white"
                href="#"
                @click="$router.push('/activities/create')">Create
          Activity
        </button>
      </div>
    </div>
    <table class="min-w-full divide-y divide-blue-100 rounded-md px-3 border-2 border-gray-300">
      <tr class="p-4  ">
        <th class=" ml-5 text-sm font-semibold text-gray-900 sm:pl-0" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('title')">
            Title
            <span :class="params.sortBy === 'title' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'title' && params.sortOrder === 'desc'" class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>
        <th class=" text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('first_name')">
            Contact Name
            <span :class="params.sortBy === 'first_name' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'first_name' && params.sortOrder === 'desc'"
                                     class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('activity_date')">
            Activity Date
            <span :class="params.sortBy === 'activity_date' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'activity_date' && params.sortOrder === 'desc'"
                                     class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>

        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('name')">
            Account Name
            <span :class="params.sortBy === 'name' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'name' && params.sortOrder === 'desc'" class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>

        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('location')">
            Location
            <span :class="params.sortBy === 'location' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'location' && params.sortOrder === 'desc'"
                                     class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" >
            Completed
            <span
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'completed' && params.sortOrder === 'desc'" class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('first_name')">
            Contact owner
            <span :class="params.sortBy === 'first_name' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'first_name' && params.sortOrder === 'desc'"
                                     class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a class="group inline-flex cursor-pointer" href.prevent="#" @click="toggleSortOrder('created_at')">
            Created at
            <span :class="params.sortBy === 'created_at' ? 'group-hover:bg-gray-200' : 'invisible group-hover:visible group-focus:visible'"
                  class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <ChevronDownIcon v-if="params.sortBy === 'created_at' && params.sortOrder === 'desc'"
                                     class="h-5 w-5"/>
                    <ChevronUpIcon v-else class="h-5 w-5"/>
                  </span>
          </a>
        </th>
      </tr>
      <tbody class=" divide-y divide-blue-100 ">
      <tr v-if="records.length === 0">
        <td colspan="8" class="text-center text-gray-500 py-2">No activities found</td>
      </tr>
      <tr class="hover:bg-gray-100 cursor-pointer" @click="$router.push(`/activities/${record.id}`)" v-for="record in records" :key="record">
        <td class="whitespace-nowrap px-5 p  text-sm font-medium text-gray-900 ">
          {{ formatters.toProperCase(record.title) }}
        </td>
        <td class="whitespace-nowrap px-5  text-sm text-gray-500">
          {{ record.Contact ? record.Contact.first_name + ' ' + record.Contact.last_name : '-' }}
        </td>
        <td class="whitespace-nowrap px-5  text-sm text-gray-500">
          {{ formatters.formatDate(record.activity_date) }}
        </td>
        <td class="whitespace-nowrap  px-5 text-sm text-gray-500">
          {{ formatters.toProperCase(record.Account ? record.Account.name + ' ' + record.Account.name : '-') }}
        </td>
        <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">{{ record.location }}</td>
        <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500 text-center">{{ record.completed ? 'Yes' : 'No' }}</td>
        <td class="whitespace-nowrap  px-5 text-sm text-gray-500">
          {{ record.User ? record.User.first_name + ' ' + record.User.last_name : '-' }}
        </td>
        <td class="whitespace-nowrap  px-5 text-sm text-gray-500">{{ formatters.formatDate(record.created_at) }}</td>
      </tr>
      </tbody>
    </table>
    <div class="flex items-center justify-between">
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">

        <div>
          <p class="text-l text-gray-400">
            Showing
            <span class="font-medium">{{ pagination.fromRecord }}</span>
            to
            <span class="font-medium">{{ pagination.toRecord }}</span>
            of
            <span class="font-medium">{{ pagination.totalRecords }}</span>
            results
          </p>
        </div>

        <div class="">
          <button
              :disabled="params.pageNumber === 1"
              :class="params.pageNumber === 1 ? 'opacity-50' : 'hover:bg-gray-100'"
              class="relative inline-flex items-centre bg-white rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0" @click="params.pageNumber--">
            <span class="sr-only ">Previous</span>
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    fill-rule="evenodd"/>
            </svg>
          </button>
          <button
              :disabled="params.pageNumber === pagination.totalPages"
              :class="params.pageNumber === pagination.totalPages ? 'opacity-50' : 'hover:bg-gray-100'"
              class="relative inline-flex items-center bg-white rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0" @click="params.pageNumber++">
            <span class="sr-only">Next</span>
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    fill-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import formatters from "../../../helpers/formatters";
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/vue/20/solid';

export default {
  components: {ChevronDownIcon, ChevronUpIcon},
  props: ['user', 'record'],
  data() {
    return {
      formatters,
      records: [],
      pagination: {},
      params: {
        searchString: '',
        recordsPerPage: 10,
        pageNumber: 1,
        sortBy: 'created_at',
        sortOrder: 'desc'
      }
    }
  },
  watch: {
    params: {
      handler() {
        this.fetchRecords()
      },
      deep: true
    }
  },
  async mounted() {
    await this.fetchRecords();
  },
  methods: {
    async fetchRecords() {
      const response = await axios.get(process.env.VUE_APP_API_URL + '/activities',
          {
            params: this.params,
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.records = response.data.records;
        this.pagination = response.data.pagination;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async toggleSortOrder(sortBy) {
      if (this.params.sortBy === sortBy) {
        this.params.sortOrder = this.params.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.params.sortBy = sortBy;
        this.params.sortOrder = 'asc';
      }
    },
  }
}
</script>

