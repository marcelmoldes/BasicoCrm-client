<template>
  <div class="mx-auto rounded-md b py-12">
    <dl class=" grid grid-cols-1 gap-0.5 border border-1 border-blue-600 overflow-hidden bg-blue-600 rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
      <div id="form" class="flex flex-col bg-gray-50 p-2 md:p-8">
        <dt class="text-lg font-medium md:mt-5 leading-6 text-blue-600">Total Accounts</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-blue-600">{{ formatters.formatAmount(kpis.accounts) }}</dd>
      </div>
      <div id="form" class="flex flex-col bg-gray-50 p-2 md:p-8">
        <dt class="text-lg font-medium md:mt-5 leading-6 text-blue-600">Total Activities</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-blue-600">{{formatters.formatAmount(kpis.activities) }}</dd>
      </div>
      <div id="form" class="flex flex-col bg-gray-50 p-2 md:p-8">
        <dt class="text-lg font-medium md:mt-5 leading-6 text-blue-600">Open Deals</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-blue-600">{{ formatters.formatAmount(kpis.deals) }}</dd>
      </div>
      <div id="form" class="flex flex-col bg-gray-50 p-2 md:p-8">
        <dt class="text-lg font-medium md:mt-5 leading-6 text-blue-600">Pending Tasks</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-blue-600">{{ formatters.formatAmount(kpis.tasks) }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>

import axios from "axios";
import formatters from "@/helpers/formatters";

export  default  {
  props:['user'],
  data() {

    return {
      formatters,
      kpis: {},


    }
  },
  mounted() {
    this.getKpis()
  },
  methods: {
    async getKpis() {
      const response = await axios.get(process.env.VUE_APP_API_URL + '/analytics/kpis',

          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });

      if (response.data.success) {
        this.kpis = response.data.kpis;
      } else {
        this.$emit('sessionExpired');
      }
    }


  }
}
</script>