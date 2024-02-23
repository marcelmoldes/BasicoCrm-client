<template>
  <div>
    <h1 class="text-4xl mt-12 font-bold tracking-tight text-black sm:text-6xl">Forgot your Password?
    </h1>
    <p class="relative mt-6  text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none my-6">If you cannot access your
      account fill out the form below to reset your account password.</p>
    <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
      <form @submit.prevent="forgotPassword"
            class="flex flex-col gap-y-6 px-12 py-12 justify-center inset-0 w-ful rounded-md shadow-gray-600 bg-blue-600 object-cover shadow-2xl">

        <div class="flex flex-col gap-y-1">
          <label class="text-sm md:text-lg font-medium text-white ml-1" for="email">Email</label>
          <input id="email" v-model="user.email"
                 class="rounded-md px-5 border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                 name="email"
                 placeholder="basicocrm@example.com"
                 type="email">

        </div>
        <div v-if="error" class="bg-red-500 text-white  py-1 text-center text-sm">{{ error }}</div>
        <button
            class="font-semibold border-gray-200 border rounded-full py-2 bg-blue-500 hover:opacity-90 text-white"
            type="submit">
          Reset Password
        </button>
      </form>
    </div>
  </div>
</template>


<script>
import Toastify from "toastify-js";
import axios from "axios";

export default {

  data() {
    return {
      user: {
        email: "",
      },
      error: false,
    };
  },
  methods: {
    async forgotPassword() {
      this.error = false;
      let response = await axios.post(
          process.env.VUE_APP_API_URL + "/auth/" + this.user.id + "/forgotPassword",
          {
            email: this.user.email,
          }
      );
      if (response.data.success) {
        Toastify({
          text: "Email sent",
          position: "center",
          duration: 10000,
        }).showToast();
      } else if (response.data.error) {
        this.error = response.data.error;
      }
    },
  },
};
</script>

<style>
</style>