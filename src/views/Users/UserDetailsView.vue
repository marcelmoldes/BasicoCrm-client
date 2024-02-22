<template>
  <div v-if="user">
    <div class="md:flex md:items-center md:justify-between h-24">
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
      User    {{ users.first_name }} {{ users.last_name }}</h2>
      </div>
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button @click="$router.push(`/users/${users.id}/edit`)"
                class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Edit
        </button>
        <button @click="removeUser(users.id)" type="button"
                class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Delete
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-y-8">
      <user-details-card
          :users="users"></user-details-card>

    </div>
  </div>


</template>
<script>
import axios from "axios";
import formatters from "@/helpers/formatters";
import UserDetailsCard from "@/views/Users/components/UserDetailsCard.vue";


export default {
  components: {UserDetailsCard, },
  props: ['user','userId'],
  data() {
    return {
      formatters,
      users: false,
    }
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const response = await axios.get(process.env.VUE_APP_API_URL + '/users/' + this.$route.params.id,
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.users = response.data.user;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async removeUser(userId) {
      const confirmDelete = confirm(
          "Are you sure you want to delete this user?"
      );
      if (confirmDelete) {
        await axios.delete(
            process.env.VUE_APP_API_URL + "/users/" + userId,
            {
              headers: {
                Authorization: this.user ? "Bearer " + this.user.token : null,
              },
            }
        );
        this.$router.push('/users')

      }

    },
  }

}
</script>