<template>
  <div class="flex-col flex px-44 lg:px-36">
    <h1 class="text-2xl font-bold text-gray-700">Welcome To Your Personal Account
      {{ user.first_name + " " + user.last_name }}</h1>

    <div id="form" class="mt-20  shadow-2xl shadow-gray-700 bg-blue-600  sm:mx-auto  rounded-md ">


      <form action="#" class="space-y-6 ml-1 mr-2 py-3" method="POST">
        <div class="grid grid-cols-2 bg-blue-600">
          <div class="">
            <label class="block text-sm ml-6 mt-2 font-bold leading-6 text-gray-700" for="email">First Name</label>

            <input v-model="users.first_name" :class="errors.first_name ? 'border-red-300' : 'border-gray-300'"
                   class="p-3  ml-5 rounded-md px-4 border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.first_name" class="text-sm text-red-400">{{ errors.first_name }}</div>
          </div>

          <div>
            <label class="block ml-3 mt-2  text-sm font-bold leading-6 text-gray-700">Last Name</label>
            <input v-model="users.last_name" :class="errors.last_name ? 'border-red-300' : 'border-gray-300'"
                   class="ml-2 rounded-md px-4 border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <div v-if="errors.last_name" class="text-sm text-red-400">{{ errors.last_name }}</div>
          </div>
        </div>

        <div class="grid grid-cols-2">
          <div>
            <label class="block text-sm ml-6  font-bold leading-6 text-gray-700" for="email">Email address</label>

            <input v-model="users.email" :class="errors.email ? 'border-red-300' : 'ring-gray-300'"
                   class="rounded-md px-5 ml-4 border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   type="email">
            <div v-if="errors.email" class="text-sm text-red-400">{{ errors.email }}</div>
          </div>
          <span class="relative inline-block">
        <a class="hover:opacity-80"><img alt=""
                                         class="h-16 w-16 ml-20 mt-5 border border-gray-200 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></a>

      </span>
        </div>

        <button id="form" class="font-semibold rounded-full border border-gray-200 py-2 px-20  justify ml-44  hover:opacity-90 text-white "
                type="button"
                @click="save"
        >
          Save
        </button>


      </form>
    </div>
<div class="">
  <button @click="removeUser(user.id)" id="form" class="px-2 flex ml-96  mt-6 py-4 hover:opacity-90 font-bold border border-gray-600  text-white rounded-full">Delete your account</button>
</div>


  </div>


</template>
<script>
import axios from "axios";


export default {
props:['user'],
  data() {
    return {
      users: {
        email: "",
        first_name: "",
        last_name: "",
        password: "",


      },
      errors: false,

    }
  },
  async mounted() {
    await this.loadData()

  },
  methods: {
    async save() {
      this.error = false;
      let response = await axios.put(
          "http://localhost:8081/users/" + this.user.id,
          {},
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
      );
      if (response.data.success) {
        this.$router.push("/dashboard");
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
        ); await this.loadData()
        this.$router.push('/login')

      }

    },
    async loadData() {
      let response = await axios.get(
          "http://localhost:8081/users/" + this.user.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          }
      );
      this.users = response.data.user;
    },
  }


}
</script>
