<template>
  <div class="flex  py-16 lg:px-8">
    <div id="form" class="sm:mx-auto shadow-2xl shadow-gray-400 rounded-md  px-8  py-5 ">
        <h1 class="text-2xl py-4  font-bold text-white">Change Your Password</h1>

        <form class="">


          <div class="grid grid-cols-1 gap-x-6 mr-20  sm:grid-cols-6">

            <div class="sm:col-span-3">
            <label class=" text-sm font-medium text-white">Current Password</label>


              <input v-model="userPassword.currentPassword"
                     class="p-3 mt-2 w-full ring  rounded-md border-0 py-3 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                     type="password">
          </div>


          <div class="sm:col-span-3">
            <label class=" text-sm font-medium  text-white">New Password</label>

            <input v-model="userPassword.newPassword"
                   class="mt-2 w-full p-3 ring ring-inset rounded-md  py-3 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                   type="password">


          </div>

<div class="col-end-9">


  <button id="form" class="text-white border border-gray-200 text-l font-bold mt-8 text-center hover:opacity-90  py-2.5 px-8 rounded-full " type="button"
          @click="changePassword">
    Save
  </button>
</div>


        </div>
      </form>
      <div v-if="error" class="bg-red-300 mt-4 p-5 border border-red-800 text-white rounded-lg py-1 text-center font-bold text-lg ">{{
        error
      }}
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

      error: false
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
      }
    }
  }

}
</script>