<template>


  <div class="relative isolate mr-6 ">
    <div
        class="absolute top-0    transform-gpu overflow-hidden blur-xl  ">
      <div class="aspect-[651/100]  w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
           style="clip-path: polygon(6.1% 9.5%, 200% 17.1%, .6% 3%, 48.4% 0%, 44.6% 4.7%, 4.5% 25.3%, 9.8% 49%, 55.2% 57.8%, 4.4% 57.2%, 27.8% 7.9%, 3.1% 8.5%, 7% 97.7%, 39.2% 100%, 35.2% 81.4%, 7.2% 52.8%, 6.1% 29.5%)"></div>

      <div
          class="aspect-[801/300] mt-20  w-[50.25rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style="clip-path: polygon(63.1% 9.5%, 200% 17.1%, 7.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
    </div>
    <div
        class="absolute left-4/3 top-0   transform-gpu overflow-hidden blur-xl lg:ml-24 ">
      <div class="aspect-[801/300] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
           style="clip-path: polygon(63.1% 9.5%, 200% 17.1%, 7.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>

      <div
          class="aspect-[801/300] mt-20  w-[50.25rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style="clip-path: polygon(63.1% 9.5%, 200% 17.1%, 7.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
    </div>


    <div class="overflow-hidden ">
      <div class="   sm: lg:px-24 mt-7 lg:pt-32">
        <div class="   lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div class=" max-w-xl   xl:max-w-2xl">
            <h1 class="text-4xl ml-7 font-bold tracking-tight text-black sm:text-6xl">Register to BasicoCrm
            </h1>
            <p class="relative mt-6  text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none">BasicoCrm is a tool
              and program that improves business management, created in 2023 by Marcel Moldes, we offer a basic but
              very useful CRM</p>
          </div>


          <div
              class="ml-auto     sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-96">

          </div>

        </div>
      </div>
    </div>

  </div>

  <div class="flex-col flex   justify-center  lg:px-36">

    <div id="form" class="py-4 px-4 shadow-2xl shadow-gray-700 bg-blue-600 sm:mx-auto  rounded-md ">

      <form action="#" class="flex flex-col space-y-4" method="POST">
        <div class="grid grid-cols-2 gap-x-4 gap-y-2">
          <div class="">
            <label class="block text-sm font-medium leading-6 text-white" for="email">First
              Name</label>
            <input v-model="form.first_name" :class="errors.first_name ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white">Last Name</label>
            <input v-model="form.last_name" :class="errors.last_name ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
          </div>
          <div class="">
            <label class="block text-sm font-medium leading-6 text-white">Number Of Employees</label>
            <input v-model="form.employees" :class="errors.employees ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.employees" class="text-sm text-red-400">{{ errors.employees }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white" for="email">Annual Revenue</label>
            <input v-model="form.annual_revenue" :class="errors.annual_revenue ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.annual_revenue" class="text-sm text-red-400">{{ errors.annual_revenue }}</div>
          </div>
          <div class="">
            <label class="block text-sm font-medium leading-6 text-white">Phone</label>
            <input v-model="form.phone" :class="errors.phone ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.phone" class="text-sm text-red-400">{{ errors.phone }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium text-white">Industry</label>
            <select v-model="form.industry" :class="errors.industry ? 'border-red-300' : 'border-gray-300'"
                    class="py-3 mt-1 rounded-md w-full">
              <option>Entertainment</option>
              <option>Professional Services</option>
              <option>Manufacturing</option>
            </select>
            <div v-if="errors.industry" class="text-sm text-red-400">{{ errors.industry }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white">Company Name</label>
            <input v-model="form.company_name" :class="errors.company_name ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.company_name" class="text-sm text-red-400">{{ errors.company_name }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white" for="email">Website</label>
            <input v-model="form.website" :class="errors.website ? 'border-red-300' : 'border-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.website" class="text-sm text-red-400">{{ errors.website }}</div>
          </div>
          <div>
            <label class="block text-sm font-medium leading-6 text-white" for="email">Email address</label>
            <input v-model="form.email" :class="errors.email ? 'border-red-300' : 'ring-gray-300'"
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   type="email">
            <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
          </div>
          <div>
            <div class="">
              <label class="block text-sm font-medium leading-6 text-white" for="password">Password</label>
            </div>
            <input v-model="form.password" :class="errors.password ? 'border-red-300' : 'border-gray-300' "
                   class="p-3 rounded-md border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   type="password">
            <div v-if="errors.password" class="text-sm text-red-400">{{ errors.password }}</div>
          </div>
        </div>
        <div v-if="error" class="bg-red-700 text-white rounded-lg py-1 text-center text-sm text-red-400">{{
            error
          }}
        </div>
        <button
                class="font-semibold border-gray-200 border rounded-full py-2 bg-blue-500 hover:opacity-90 text-white"
                type="button"
                @click="save">
          Register
        </button>
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
      const response = await axios.post("http://localhost:8081/auth/register", +this.form);

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