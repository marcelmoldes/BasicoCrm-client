<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div class="grid mr-2 grid-cols-1 pt-10 md:grid-cols-3">
      <h2 class="text-lg px-36 font-semibold leading-7 text-gray-900">
        User Information</h2>

      <form class="bg-white shadow-sm  ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">First name</label>
              <input v-model="form.first_name" :class="errors.first_name ? 'border border-red-300' : 'border-0'"
                     autocomplete="given-name"
                     class="block w-full p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Last name</label>
              <input v-model="form.last_name" :class="errors.last_name ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Role</label>
              <select v-model="form.role" :class="errors.role ? 'border border-red-300' : 'border-0'"
                      class="bg-white  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 block p-2 w-full rounded-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option v-for="role in options.role" :key="role.value" :value="role.value">
                  {{ role.label }}
                </option>
              </select>
              <div v-if="errors.role" class="text-sm text-red-400">{{ errors.role }}</div>
            </div>
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <input v-model="form.email" autocomplete="email"
                     :class="errors.email ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     type="email">
              <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
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
  props: ['token'],
  data() {
    return {
      formatters,
      form: {},
      errors: {},
      options: {
        role: [],

      },
    }

  },
  async mounted() {
    this.loadOptions()
    if (this.$route.params.id) {
      await this.loadData();

    }
    this.$eventBus.on('saveUser', this.saveUser)
  },
  methods: {
    async loadOptions() {
      const response = await axios.get(process.env.VUE_APP_API_URL + '/users/options',
          {
            headers: {
              Authorization: this.token ? "Bearer " + this.token : null,
            },
          });
      if (response.data.success) {
        this.options = response.data.options;
      }
    },
    async loadData() {
      const response = await axios.get(process.env.VUE_APP_API_URL + '/users/' + (this.$route.params.id ? this.$route.params.id : this.form.id),
          {
            headers: {
              Authorization: this.token ? "Bearer " + this.token : null,
            },
          });
      if (response.data.success) {
        Object.assign(this.form, response.data.user);
      } else {
        this.$emit('sessionExpired');
      }
    },
    async saveUser() {
      let response;
      let message = !this.form.id;
      this.errors = {}
      if (this.form.id) {
        response = await axios.put(
            process.env.VUE_APP_API_URL + "/users/" + this.form.id,
            this.form,
            {
              headers: {
                Authorization: this.token ? "Bearer " + this.token : null,
              },
            },
        );
      } else {
        response = await axios.post(
            process.env.VUE_APP_API_URL + "/users/",
            this.form,
            {
              headers: {
                Authorization: this.token ? "Bearer " + this.token : null,
              },
            }
        );
      }
      if (response.data.success) {
        this.form.id = response.data.user.id;
        Toastify({
          text: message
              ? "User Create"
              : "User Edited",
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