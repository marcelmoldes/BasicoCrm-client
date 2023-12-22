<template>
  <div class="">
    <kpi-dashlet></kpi-dashlet>
    <div class="grid grid-cols-2 px-12 pb-12 gap-12">
      <accounts-dashlet></accounts-dashlet>
      <contacts-dashlet @sessionExpired="$emit('sessionExpired')" :user="user"></contacts-dashlet>
      <deals-dashlet></deals-dashlet>
      <tasks-dashlet></tasks-dashlet>
      <sales-funnel-dashlet></sales-funnel-dashlet>
      <revenue-chart-dashlet></revenue-chart-dashlet>
    </div>
  </div>
</template>

<script>
import AccountsDashlet from "@/views/Dashboard/components/AccountsDashlet.vue";
import KpiDashlet from "@/views/Dashboard/components/KpiDashlet.vue"
import ContactsDashlet from "@/views/Dashboard/components/ContactsDashlet.vue";
import DealsDashlet from "@/views/Dashboard/components/DealsDashlet.vue";
import TasksDashlet from "@/views/Dashboard/components/TasksDashlet.vue";
import RevenueChartDashlet from "@/views/Dashboard/components/RevenueChartDashlet.vue";
import SalesFunnelDashlet from "@/views/Dashboard/components/SalesFunnelDashlet.vue";

export default {
  props: ['user'],
  components: {
    SalesFunnelDashlet,
    RevenueChartDashlet,
    TasksDashlet,
    DealsDashlet,
    ContactsDashlet,
    AccountsDashlet,
    KpiDashlet
  },

  data() {
    return {}
  }
}

</script>