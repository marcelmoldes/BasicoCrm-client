<template>
  <div>
    <h1 class="text-4xl mt-12 font-bold tracking-tight text-black sm:text-6xl">Register for BasicoCrm
    </h1>
    <p class="relative mt-6 text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none my-6">Sign up for BasicoCRM
      today, it's totally free!</p>
    <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
      <form @submit.prevent="save"
            class="flex flex-col gap-y-6 px-12 py-12 justify-center inset-0 w-ful rounded-md shadow-gray-600 bg-blue-600 object-cover shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          <div class="">
            <label class="block text-sm font-medium leading-6 text-white" for="email">First
              Name</label>
            <input v-model="form.first_name" :class="errors.first_name ? 'border-red-500' : 'border-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white">Last Name</label>
            <input v-model="form.last_name" :class="errors.last_name ? 'border-red-500' : 'border-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
          </div>
          <div class="">
            <label class="block text-sm font-medium leading-6 text-white">Number Of Employees</label>
            <input v-model="form.employees" :class="errors.employees ? 'border-red-500' : 'border-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white" for="email">Annual Revenue</label>
            <input v-model="form.annual_revenue" :class="errors.annual_revenue ? 'border-red-500' : 'border-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 f sm:text-sm sm:leading-6">
          </div>

          <div>
            <label class="block text-sm font-medium text-white">Industry</label>
            <select v-model="form.industry" :class="errors.industry ? 'border-2 border-red-500' : 'border-gray-300'"
                    class="py-3 mt-1 rounded-md w-full">
              <option>Entertainment</option>
              <option>Professional Services</option>
              <option>Manufacturing</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium leading-6 text-white">Company Name</label>
            <input v-model="form.name" :class="errors.name ? 'border-red-500' : 'border-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white" for="email">Website</label>
            <input v-model="form.website" :class="errors.website ? 'border-red-500' : 'border-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white" for="email">Email address</label>
            <input v-model="form.email" :class="errors.email ? 'border-red-500' : 'ring-gray-300'"
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                   type="email">
          </div>
          <div>
            <div class="">
              <label class="block text-sm font-medium leading-6 text-white" for="password">Password</label>
            </div>
            <input v-model="form.password" :class="errors.password ? 'border-red-500' : 'border-gray-300' "
                   class="w-full p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                   type="password">
          </div>
        </div>
        <div v-if="errors" class="bg-red-500 text-white  py-1 text-center text-sm">
          Please fix any errors and try again.
        </div>
        <button
            class="font-semibold border-gray-200 border rounded-full py-2 bg-blue-500 hover:opacity-90 text-white"
            type="submit">
          Register
        </button>
        <a href="/login" class="text-white text-center text-md">Already have an account? Click here</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {

  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        employees: "",
        industry: "",
        annual_revenue: "",
        name: "",
        website: ""
      },
      errors: false,
      error: false
    }
  },
  methods: {
    async save() {
      this.errors = false;
      this.error = false;
      const response = await axios.post(process.env.VUE_APP_API_URL + "/auth/register", this.form);

      if (response.data.success) {
        this.$router.push("/login?action=registered");
      } else if (response.data.errors) {
        this.errors = response.data.errors
      } else if (response.data.error) {
        this.error = response.data.error;
      }

    }

  }
}
</script>