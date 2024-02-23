<template>
  <div class=" p-4  border-2 border-gray-300  rounded-md">
    <h1 class="text-gray-600 text-xl font-bold">Sales Funnel</h1>
    <canvas class="text-lg mt-20 text-blue-800 font-bold" id="salesDealFunnel"></canvas>
  </div>
</template>
<script>

import axios from "axios";
import Chart from "chart.js/auto";

export default {
  props: ["user"],

  data() {
    return {
      stats:[],
    };
  },
  async mounted() {
    await this.dealsFunnel();
  },
  methods: {
    async dealsFunnel() {
      const response = await axios.get(process.env.VUE_APP_API_URL + "/analytics/funnelDealStats", {
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      let pending = response.data.stats.pending
      let closedLost = response.data.stats.closed_lost
      let closedWon = response.data.stats.closed_won
      let inProgress = response.data.stats.in_progress

      new Chart(document.getElementById("salesDealFunnel"), {
        type: "doughnut",
        data: {
          labels: Object.keys(response.data.stats),
          datasets: [{
            label:
                'My First Dataset',
            data: [pending,closedLost,closedWon,inProgress],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(300, 280, 90)',
            ],
            hoverOffset: 4
          }]

        },
      });
    },

  },
};
</script>

<style scoped>
#salesDealFunnel {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
</style>