<template>
  <div class="flex min-h-full  justify-center lg:px-8">
    <div class="mt-10 sm:w-full sm:max-w-[480px]">
      <h2 class=" text-center text-xl font-bold leading-9 tracking-tight text-blue-600">Change Your Password
      </h2>

      <div class="bg-gray-50 px-6 py-12  shadow sm:rounded-lg sm:px-12">
        <form action="#" class="space-y-6" method="POST">

          <div>
            <label class="block text-sm font-medium leading-6 text-gray-900" for="email">Current Password</label>

            <input v-model="userPassword.first_name" :class="errors.first_name ? 'border border-red-300' : 'border-0'"
                   class="block border-2 w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                   required
                   type="password">
            <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-gray-900">New Password</label>

            <input v-model="userPassword.last_name" :class="errors.last_name ? 'border border-red-300' : 'border-0'"
                   class="block w-full p-2 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                   required
                   type="password">
            <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
          </div>
          <button
              class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="button"
              @click="changePassword">
            Change
          </button>
          <div v-if="error" class="bg-red-500 text-white  py-1 text-center text-sm">{{ error }}</div>
      </form>
        <div>
        </div>
    </div>

    </div>
  </div>


</template>
<script>

import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";


import axios from "axios";

export default {
  props: ['user'],
  data() {
    return {
      userPassword: {

        currentPassword: "",
        newPassword: ""
      },

      error: false,
      errors: false
    };


  },
  methods: {
    async changePassword() {
      this.error = false
      let response = await axios.post("http://localhost:8081/auth/" + this.user.id + "/changePassword",
          {
            currentPassword: this.userPassword.currentPassword,
            newPassword: this.userPassword.newPassword
          }, {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
      );
      if (response.data.success) {
        Toastify({
          text: "Your password has changed!",
          position: "center",
          duration: 2000,
        }).showToast();
      } else if (response.data.error) {
        this.error = response.data.error;
      } else if (response.data.errors) {
        this.errors = response.data.errors;
      }
    }
  }

}
</script>