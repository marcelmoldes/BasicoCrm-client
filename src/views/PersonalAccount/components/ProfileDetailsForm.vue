<template>
  <div>
    <div class="flex min-h-full  justify-center lg:px-8">
      <div class="mt-10  sm:w-full sm:max-w-[480px]"><h2
          class=" text-center  ml-24 flex text-xl font-bold leading-9 tracking-tight text-blue-600">Change Your Personal
        Information</h2>


        <div class="bg-gray-50 px-6 mt-2 py-12 shadow sm:rounded-lg sm:px-12">
          <form action="#" class="space-y-6" method="POST">
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900" for="email">First Name</label>

              <input value="first-name" v-model="form.first_name" :class="errors.first_name ? 'border border-red-300' : 'border-0'"
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
