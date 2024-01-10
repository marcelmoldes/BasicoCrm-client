<template>
  <div id="" class="">
    <kpi-dashlet  @sessionExpired="$emit('sessionExpired')" :user="user"></kpi-dashlet>
    <div class="grid grid-cols-2 gap-12">
      <accounts-dashlet @sessionExpired="$emit('sessionExpired')" :accounts="accounts"></accounts-dashlet>
      <contacts-dashlet @sessionExpired="$emit('sessionExpired')" :contacts="contacts"></contacts-dashlet>
      <deals-dashlet @sessionExpired="$emit('sessionExpired')" :deals="deals"></deals-dashlet>
      <tasks-dashlet @sessionExpired="$emit('sessionExpired')" :tasks="tasks"></tasks-dashlet>
      <sales-funnel-dashlet @sessionExpired="$emit('sessionExpired')" :user="user"></sales-funnel-dashlet>
      <revenue-chart-dashlet @sessionExpired="$emit('sessionExpired')" :user="user"></revenue-chart-dashlet>
    </div>
  </div>
</template>

<script>
import AccountsDashlet from "@/components/dashlets/AccountsDashlet.vue";
import KpiDashlet from "@/views/Dashboard/components/KpiDashlet.vue"
import ContactsDashlet from "@/components/dashlets/ContactsDashlet.vue";
import DealsDashlet from "@/components/dashlets/DealsDashlet.vue";
import TasksDashlet from "@/components/dashlets/TasksDashlet.vue";
import RevenueChartDashlet from "@/views/Dashboard/components/RevenueChartDashlet.vue";
import SalesFunnelDashlet from "@/views/Dashboard/components/SalesFunnelDashlet.vue";
import axios from "axios";

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
    return {
      tasks: [],
      accounts: [],
      contacts: [],
      deals: []
    }
  },
  async mounted() {
    this.getTasks();
    this.getContacts();
    this.getDeals();
    this.getAccounts()
  },
  methods: {
    async getTasks() {
      const response = await axios.get('http://localhost:8081/tasks?recordsPerPage=5',
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.tasks = response.data.records;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async getDeals() {
      const response = await axios.get('http://localhost:8081/deals?recordsPerPage=5',
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.deals = response.data.records;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async getContacts() {
      const response = await axios.get('http://localhost:8081/contacts?recordsPerPage=5',
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.contacts = response.data.records;
      } else {
        this.$emit('sessionExpired');
      }
    },
    async getAccounts() {
      const response = await axios.get('http://localhost:8081/accounts?recordsPerPage=5',
          {
            headers: {
              Authorization: this.user ? "Bearer " + this.user.token : null,
            },
          });
      if (response.data.success) {
        this.accounts = response.data.records;
      } else {
        this.$emit('sessionExpired');
      }
    }
  }
}

</script>