<template>
  <div>

    <div class="md:flex md:items-center md:justify-between h-24">
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">{{ contact.first_name }} {{ contact.last_name }}</h2>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button @click="$router.push(`/contacts/${contact.id}/edit`)" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Edit</button>
        <button @click="removeContact(contact.id)" type="button" class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
      </div>
    </div>
    <div>
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">Information</h3>

      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div class="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div class="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div class="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div class="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
          </div>
          <div class="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                  </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>


    <template v-if="1 === 2">
      <div class=" shadow-xl shadow-gray-200">
        <div aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8">
          <div class="flex text-gray-600 text-xl font-semibold lg:flex-1">
            <h1>{{ contact.first_name }} {{ contact.last_name }}</h1>
          </div>
          <div class=" lg:flex gap-5 lg:flex-1 lg:justify-end">
            <button id="form"
                    class="rounded-full border-gray-200 border  px-12 py-2  font-semibold text-white shadow-sm hover:opacity-90"
                    type="button"
            >Edit
            </button>
            <button id="form"
                    class="rounded-full border-gray-200 border  px-12 py-2  font-semibold text-white shadow-sm hover:opacity-90"
                    type="button"
                    @click="removeContact(contact.id)"
            >Delete
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-100  mt-3  ml-3 mr-3  p-7 shadow-xl shadow-gray-600">
        <div class="mt-16   xl:col-span-2 xl:mt-0">
          <div class="flex gap-24">

            <ul class="mt-6 ml-3 space-y-4" role="list">
              <li class="text-lg leading-6 text-gray-600 ">
                Contact Owner
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Contact Name
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Email
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Phone
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Lead Source
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Website
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Annual Revenue
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Lead Status
              </li>
              <li class="text-lg leading-6 text-gray-600 ">
                Industry
              </li>    <li class="text-lg leading-6 text-gray-600 ">
              Title
            </li>
            </ul>

            <div class="mt-10 md:mt-0">
              <ul class="mt-6 space-y-4" role="list">
                <li class="text-l gap-2 leading-6 text-black">
                  {{ contact.User ? contact.User.first_name + contact.User.last_name : 'not contact owner' }}
                </li>
                <li class="text-l leading-6 text-black">
                  {{ contact.first_name }}
                  {{ contact.last_name }}
                </li>
                <li class="text-l leading-6 text-black">
                  {{ contact.email }}
                </li>
                <li class="text-l leading-6 text-black">

                  {{
                    formatters.formatPhoneNumber(contact.PhoneNumber ? contact.PhoneNumber.number : '-')
                  }}
                </li>
                <li class="text-l leading-6 text-black">
                  {{ contact.lead_source }}
                </li>
                <li class="text-l leading-6 text-black">
                  {{ contact.website }}
                </li>
                <li class="text-l leading-6 text-black">
                  {{ contact.annual_revenue }}
                </li>
                <li class="text-l leading-6 text-black">

                  {{ contact.lead_status }}
                </li>
                <li class="text-l leading-6 text-black" >
                  {{ contact.industry }}
                </li>
                <li class="text-lg leading-6 text-black ">
                  {{contact.title }}
                </li>
              </ul>
            </div>
            <contact-address-form :contact="contact"></contact-address-form>
          </div>
        </div>
      </div>
    </template>


    </div>

</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import ContactAddressForm from "@/views/Contacts/components/ContactAddressForm.vue";

export default {
  components: {ContactAddressForm},
  props: ['user'],
  data() {
    return {
      formatters,
      contact: false
    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get('http://localhost:8081/contacts/' + this.$route.params.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.contact = response.data.contact;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async removeContact(contactId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete this contact?"
      );
      if (confirmDelete) {
        await axios.delete(
            "http://localhost:8081/contacts/" + contactId,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        this.$router.push('/contacts')

      }

    },
  }
}
</script>