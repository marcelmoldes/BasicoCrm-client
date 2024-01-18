<template>
  <div class="ml-0 mt-1 m-14 py-4 p-10">
    <h2 class="text-2xl font-bold mb-3">Deals</h2>
    <deals-grid :user="user"></deals-grid>
  </div>
</template>

<script>
import formatters from "@/helpers/formatters";

import DealsGrid from "@/views/Deals/components/DealsGrid.vue";

export default {
  props: ['user'],
  components: {
    DealsGrid,


  },
  data() {
    return {
      formatters,

    }

  }
}
</script>