<template>
  <div>
    <button class="px-10 m-4  rounded-md hover:bg-blue-700 py-2 bg-blue-600" @click="removeUser(user.id)">
      <svg class="w-6 h-6" fill="white" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>

    </button>
    <div class="flex min-h-full  justify-center lg:px-8">
      <div class="mt-10  sm:w-full sm:max-w-[480px]"><h2
          class=" text-center  ml-24 flex text-xl font-bold leading-9 tracking-tight text-blue-600">Change Your Personal
        Information</h2>


        <div class="bg-gray-50 px-6 mt-2 py-12 shadow sm:rounded-lg sm:px-12">
          <form action="#" class="space-y-6" method="POST">
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900" for="email">First Name</label>

              <input v-model="form.first_name" :class="errors.first_name ? 'border border-red-300' : 'border-0'"
                     class="block border-2 w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm    placeholder:text-gray-400 sm:text-sm sm:leading-6"
                     required>
            <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>

            <input v-model="form.last_name" :class="errors.last_name ? 'border border-red-300' : 'border-0'"
                   class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   required>
            <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
          </div>

            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input v-model="form.email" :class="errors.email ? 'border border-red-300' : 'border-0'"
                     class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                     required
                     type="email">
              <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
            </div>
            <div>
              <button
                  class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="button"
                  @click="save">
                Save
              </button>
            </div>
          </form>
          <div>
        </div>
        </div>

      </div>

    </div>
    <div v-if="error" class="bg-red-500 text-white  py-1 text-center text-sm">{{ error }}</div>

  </div>
</template>
<script>
import axios from "axios";
import Toastify from "toastify-js";


export default {
  props: ['user'],
  data() {
    return {
      form: {
        email: "",
        first_name: "",
        last_name: "",
      },
      error: false,
      errors: false

    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {

    async loadData() {
      let response = await axios.get(
          "http://localhost:8081/users/" + this.user.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
      );
      this.form = response.data.user;
    },
    async save() {
      this.error = false;
      let response = await axios.put(
          "http://localhost:8081/users/" + this.user.id,
          this.form,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
      );
      if (response.data.success) {
        Toastify({
          text: "User Updated",
          position: "center",
          duration: 1000,
        }).showToast();
        await this.loadData();
      } else if (response.data.error) {
        this.error = response.data.error
      } else if (response.data.errors) {
        this.errors = response.data.errors
      }
    },
    async removeUser(userId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete your account?"
      );
      if (confirmDelete) {
        await axios.delete(
            "http://localhost:8081/users/" + userId,

            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        await this.loadData()
        this.$router.push('/login')

      }

    },

  }


}
</script>
