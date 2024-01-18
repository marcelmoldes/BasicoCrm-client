<template>
  <div class="ml-0 mt-1 m-14 py-4 p-10">
    <h2 class="text-2xl font-bold mb-3">Accounts</h2>
    <accounts-grid :user="user"></accounts-grid>
  </div>
</template>

<script>
import formatters from "@/helpers/formatters";
import AccountsGrid from "@/views/Accounts/components/AccountsGrid.vue";

export default {
  props: ['user'],
  components: {
  AccountsGrid,

  },
  data() {
    return {
      formatters,

    }

  }
}
</script>