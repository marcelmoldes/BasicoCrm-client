<template>
  <div class="  py-2  rounded-md">
    <h1 class="text-gray-600 text-xl text-center font-bold">Revenue Deal Chart</h1>
    <canvas class="text-lg mt-20 text-blue-800 font-bold" id="revenueDeals"></canvas>

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
  await this.drawDealsChart();

  },
  methods: {
    async drawDealsChart() {
      const response = await axios.get("http://localhost:8081/analytics/stats", {
        headers: {
          Authorization: this.user ? "Bearer " + this.user.token : null,
        },
      });
      this.stats = response.data.stats
      const stats = response.data.stats.deals.stats;
      const labels = stats.map((object) => {
        return object.label;
      });
      const total = stats.map((object) => {
        return object.total;
      });

      new Chart(document.getElementById("revenueDeals"), {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Revenue deals by month",
              data: total,
            },
          ],
        },
      });
    },

  },
};
</script>