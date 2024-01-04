<template>
  <div class="flex flex-col gap-y-3">
    <div class="flex justify-between">
      <select
          class="w-30 rounded-md  py-2.5 pl-3 pr-10 text-black ring-1 ring-inset ring-gray-300 focus:ring-2  sm:text-sm "
      >
        <option>10 Records Per Page</option>
        <option selected="">20 Records Per Page</option>
        <option>30 Records Per Page</option>
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
              type="text"
              class="block w-full rounded-md border ring-1 ring-inset ring-gray-300 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:text-gray-900 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
              placeholder="Search">
        </div>
        <button class="px-8 gap-x-2 font-semibold hover:bg-blue-600/50 rounded-full py-2 bg-blue-500 text-white"
                href="#"
                @click="$router.push('/contact-edit')">Create
          Contact
        </button>
      </div>
    </div>
    <table class="min-w-full divide-y divide-blue-100 rounded-md px-3 border-2 border-gray-300">
      <tr class="p-4  ">
        <th class=" ml-5 text-sm font-semibold text-gray-900 sm:pl-0" scope="col">
          <a href="#" class="group inline-flex">
            First Name
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class=" text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            Last Name
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class="py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            Phone
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            E-mail
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            Website
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            Lead source
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            Account owner
            <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
        <th class=" py-3.5  text-sm font-semibold text-gray-900" scope="col">
          <a href="#" class="group inline-flex">
            Created at
            <span class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </span>
          </a>
        </th>
      </tr>

      <tbody v-for="contact in contacts.records" :key="contact" class=" divide-y divide-blue-100 " @click="$router.push('/contact-details')">
      <tr>
        <td class="whitespace-nowrap px-5 p  text-sm font-medium text-gray-900 ">{{formatters.toProperCase(contact.first_name)}}</td>
        <td class="whitespace-nowrap px-5  text-sm text-gray-500">{{formatters.toProperCase(contact.last_name)}}</td>
        <td class="whitespace-nowrap px-5  text-sm text-gray-500">{{formatters.formatPhoneNumber(contact.PhoneNumber ? contact.PhoneNumber.number : '-') }}</td>
        <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">{{ contact.email }}</td>
        <td class="whitespace-nowrap px-5 py-4 text-sm text-gray-500">{{contact.website}}</td>
        <td class="whitespace-nowrap  px-5 text-sm text-gray-500">{{ contact.lead_source }}</td>

        <td class="whitespace-nowrap  px-5 text-sm text-gray-500">Marcel</td>
        <td class="whitespace-nowrap  px-5 text-sm text-gray-500">{{ formatters.formatDate(contact.created_at) }}</td>

      </tr>


      </tbody>
    </table>
    <div class="flex items-center justify-between">

      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-l text-gray-400">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">10</span>
            of
            <span class="font-medium">97</span>
            results
          </p>
        </div>
        <div class="">
          <a class="relative inline-flex items-centre bg-white  rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
             href="#">
            <span class="sr-only ">Previous</span>
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    fill-rule="evenodd"/>
            </svg>
          </a>
          <a class="relative inline-flex items-center bg-white rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
             href="#">
            <span class="sr-only">Next</span>
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    fill-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import formatters from "../../../helpers/formatters";

export default {
  computed: {
    formatters() {
      return formatters
    }
  },
  props: ['user'],
  data() {
    return {
      contacts: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8081/contacts',
        {
          headers: {
            Authorization: this.user ? "Bearer " + this.user.token : null,
          },
        });
    if (response.data.success) {
      this.contacts = response.data;
    } else {
      this.$emit('sessionExpired');
    }
  }
}
</script>

