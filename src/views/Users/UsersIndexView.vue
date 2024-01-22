<template>
  <div class="ml-0 mt-1 m-14 py-4 p-10">
    <h2 class="text-2xl font-bold mb-3">Users</h2>
    <users-grid :user="user"></users-grid>
  </div>
</template>

<script>
import UsersGrid from "@/views/Users/components/UsersGrid.vue";

export default {
  props: ['user'],
  components: {
    UsersGrid
  },
  data() {
    return {}

  }
}
</script>