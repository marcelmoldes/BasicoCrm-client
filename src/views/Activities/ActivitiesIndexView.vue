<template>
  <div class="ml-0 mt-1 m-14 py-4 p-10">
    <h2 class="text-2xl font-bold mb-3">Activities</h2>
    <activity-grid :user="user"></activity-grid>
  </div>
</template>

<script>
import formatters from "@/helpers/formatters";
import ActivityGrid from "@/views/Activities/components/ActivitiesGrid.vue";

export default {
  props: ['user'],
  components: {
    ActivityGrid,

  },
  data() {
    return {
      formatters,

    }

  }
}
</script>