<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">Task Information</h2>
      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Due Date</label>
              <input v-model="task.due_date"
                     :class="errors.due_date ? 'border border-red-300' : 'border-0'"
                     type="date"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.due_date" class="text-sm text-red-400">{{ errors.due_date }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Task Name</label>
              <input v-model="task.name" :class="errors.due_date ? 'border border-red-300' : 'border-0'"
                class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.name" class="text-sm text-red-400">{{errors.name}}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Task Owner</label>
              <select v-model="task.user_id" :class="errors.user_id ? 'border border-red-300' : 'border-0'"
                      class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="user.id" v-for="user in options.users" :key="user.id">{{ user.first_name }} {{ user.last_name }}</option>
              </select>
              <div v-if="errors.user_id" class="text-sm text-red-400">{{ errors.user_id }}</div>
            </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">Status</label>
            <select v-model="task.status" :class="errors.status ? 'border border-red-300' : 'border-0'"
                    class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option :value="status.value" v-for="status in options.status" :key="status.value">{{ status.label }}</option>
            </select>
            <div v-if="errors.status" class="text-sm text-red-400">{{ errors.status }}</div>
          </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Priority</label>
              <select v-model="task.priority" :class="errors.priority ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="priority.value" v-for="priority in options.priority" :key="priority.value">{{ priority.label }}</option>
              </select>
              <div v-if="errors.priority" class="text-sm text-red-400">{{ errors.priority }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Contact Name</label>
              <select v-model="task.contact_id" @change="task.account_id = null; task.deal_id = null;" :class="errors.contact_id ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="contact.id" v-for="contact in options.contacts" :key="contact.id">{{ contact.first_name }} {{ contact.last_name }}</option>
              </select>
              <div v-if="errors.contact_id" class="text-sm text-red-400">{{ errors.contact_id }}</div>
            </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">Deal Name</label>
            <select v-model="task.deal_id" @change="task.account_id = null; task.contact_id = null;" :class="errors.deal_id ? 'border border-red-300' : 'border-0'"
                    class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option :value="deal.id" v-for="deal in options.deals" :key="deal.id">{{ deal.deal_name }} </option>
            </select>
            <div v-if="errors.deal_id" class="text-sm text-red-400">{{ errors.deal_id }}</div>
          </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Account</label>
              <select v-model="task.account_id" @change="task.contact_id = null; task.deal_id = null;" :class="errors.account_id ? 'border border-red-300' : 'border-0'"
                  class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option :value="account.id" v-for="account in options.accounts" :key="account.id">{{ account.name }}</option>
              </select>
              <div v-if="errors.account_id" class="text-sm text-red-400">{{ errors.account_id }}</div>
            </div>
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">Description</label>
            <textarea v-model="task.description" :class="errors.description ? 'border border-red-300' : 'border-0 '"
                      class="border-0 bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" rows="5"></textarea>
            <div v-if="errors.description" class="text-sm text-red-400">{{ errors.description }}</div>
          </div>
        </div>

        </div>
      </form>
    </div>
  </div>


</template>

<script>
import Toastify from "toastify-js";
import axios from "axios";
import formatters from "@/helpers/formatters";

export default {
  props: ['user'],
  data() {
    return {
      formatters,
      task: {},
      options: {
        contacts: [],
        accounts: [],
        users: [],
        deals: []
      },
      errors: {}
    }
  },
  async mounted() {
    this.loadOptions();
    if (this.$route.params.id) {
      await this.loadData();
    }
    this.$eventBus.on('saveTask', this.saveTask)
  },
  methods: {
    async loadOptions() {
      const response = await axios.get('http://localhost:8081/tasks/options',
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.options = response.data.options;
      }
    },
    async loadData() {
      const response = await axios.get('http://localhost:8081/tasks/' + (this.$route.params.id ? this.$route.params.id : this.task.id),
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.task = response.data.task;
        this.task.due_date = formatters.formatDateYmd(this.task.due_date)
      } else {
        this.$emit('sessionExpired');
      }
    },
    async saveTask() {
      let response;
      let message = !this.task.id;
      this.errors = {}
      if (this.task.id) {
        response = await axios.put(
            "http://localhost:8081/tasks/" + this.task.id,
            this.task,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            "http://localhost:8081/tasks/",
            this.task,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
      }
      if (response.data.success) {
        this.task.id = response.data.task.id;
        Toastify({
          text: message
              ? "Task Create"
              : "Task Edited",
          position: "center",
          duration: 1000,
        }).showToast();
        await this.loadData();
      } else if (response.data.errors) {
        this.errors = response.data.errors
      }
    },
  }
};


</script>