<template>
  <div>
    <header-component :user="user" @logUserOut="logUserOut"></header-component>
    <router-view :user="user" @sessionExpired="logUserOut(true)" @userLoggedIn="authenticateUser"/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Cookies from "js-cookie";

export default {
  components: {
    HeaderComponent
  },
  data() {
    return {
      user: false
    }
  },
  async mounted() {
    this.authenticateUser();
  },
  methods: {
    authenticateUser() {
      this.user = Cookies.get("user");
      if (this.user) {
        this.user = JSON.parse(this.user);
        this.$router.push('/dashboard');
      }
    },
    logUserOut(expired) {
      Cookies.remove("user");
      this.user = false;
      if (expired) {
        this.$router.push("/login?action=expired");
      } else {
        this.$router.push("/login");
      }
    },
  },
}
</script>


<style>
</style>
