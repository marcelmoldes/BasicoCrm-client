<template>
  <div class="ml-0 mt-1 m-14 py-4 p-10">
    <h2 class="text-2xl font-bold mb-3">Tasks</h2>
    <tasks-grid :user="user"></tasks-grid>
  </div>
</template>

<script>
import formatters from "@/helpers/formatters";

import TasksGrid from "@/views/Tasks/components/TasksGrid.vue";

export default {
  props: ['user'],
  components: {
    TasksGrid,


  },
  data() {
    return {
      formatters,

    }

  }
}
</script>