<template>

  <div class="flex   px-2 flex-col     lg:px-8">

    <div id="form" class="mt-10 sm:mx-auto  shadow shadow-black rounded-md ">


      <form action="#" class="space-y-6  " method="POST">
        <div class="grid grid-cols-2 ">
          <div class="">
            <label class="block text-sm ml-3 mt-2 font-medium leading-6 text-gray-700" for="email">First Name</label>

            <input v-model="form.first_name" :class="errors.first_name ? 'border-red-300' : 'border-gray-300'"
                   class="p-3  ml-4  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
          </div>

          <div>
            <label class="block ml-3 mt-2  text-sm font-medium leading-6 text-gray-700">Last Name</label>
            <input v-model="form.last_name" :class="errors.last_name ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-0 py-2 ml-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div class="">
            <label class="block text-sm ml-3 font-medium leading-6 text-gray-700">Number Of Employees</label>

            <input v-model="form.employees" :class="errors.employees ? 'border-red-300' : 'border-gray-300'"
                   class="p-3  ml-4  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.employees" class="text-sm text-red-400">{{ errors.employees }}</div>
          </div>

          <div>
            <label class="block ml-1 text-sm font-medium leading-6 text-gray-700" for="email">Annual Revenue</label>

            <input v-model="form.annual_revenue" :class="errors.annual_revenue ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 mr-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.annual_revenue" class="text-sm text-red-400">{{ errors.annual_revenue }}</div>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium ml-16 text-gray-700">Company Name</label>

          <input v-model="form.company_name" :class="errors.company_name ? 'border-red-300' : 'border-gray-300'"
                 class=" px-20 ml-16 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <div v-if="errors.company_name" class="text-sm text-red-400">{{ errors.company_name }}</div>
        </div>
        <div>
          <label class="block ml-16 text-sm font-medium leading-6 text-gray-700" for="email">Website</label>

          <input v-model="form.website" :class="errors.website ? 'border-red-300' : 'border-gray-300'"
                 class=" px-20 ml-16  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <div v-if="errors.website" class="text-sm text-red-400">{{ errors.website }}</div>
        </div>
        <div>
          <label class="block text-sm font-medium ml-16 text-gray-700">Industry</label>
          <select v-model="form.industry" :class="errors.industry ? 'border-red-300' : 'border-gray-300'"
                  class="px-44 ml-16  rounded-md  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
            <option></option>
            <option></option>
            <option></option>
          </select>
          <div v-if="errors.industry" class="text-sm text-red-400">{{ errors.industry }}</div>
        </div>
        <div>
          <label class="block text-sm  font-medium leading-6 ml-16 text-gray-700" for="email">Email address</label>

          <input v-model="form.email" :class="errors.email ? 'border-red-300' : 'border-gray-300'" class="p-2 px-20 ml-16 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 type="email">
          <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label class="block ml-16 text-sm font-medium leading-6 text-gray-700" for="password">Password</label>

          </div>

          <input v-model="form.password" :class="errors.password ? 'border-red-300' : 'border-gray-300' "
                 class=" px-20 ml-16   rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 type="password">
          <div v-if="errors.password" class="text-sm text-red-400">{{ errors.password }}</div>

        </div>
        <div v-if="error" class="bg-red-700 text-white rounded-lg py-1 text-center text-sm text-red-400">{{
            error
          }}
        </div>
        <button class="font-semibold rounded-full  py-2 px-20  justify ml-36 bg-blue-500 hover:bg-blue-6000 text-white "
                type="button"
                @click="save">
          Register
        </button>
        <a href="/login"><h1 class="text-white   m-2 hover:text-gray-700 text-center text-md">You have an account?</h1>
        </a>

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
        company_name: "",
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
      const response = await axios.post("http://localhost:8081/auth/register", this.form);

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