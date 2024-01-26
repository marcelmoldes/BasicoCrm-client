<template>
  <div>
    <header-component :user="user" @logUserOut="logUserOut"></header-component>
    <div class="px-12 pb-12">
      <router-view :user="user" @sessionExpired="logUserOut(true)" @userLoggedIn="authenticateUser"/>
    </div>
  </div>
  <footer-component v-if="!user"></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Cookies from "js-cookie";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent
  },
  data() {
    return {
      user: false,
    }
  },
  watch: {
    $route() {
      if (this.user) return;
      this.authenticateUser()
    }
  },
  methods: {
    authenticateUser() {
      this.user = Cookies.get("user");
      if (this.user) {
        this.user = JSON.parse(this.user);
        if (this.$route.path === '/' || this.$route.path === '/login') {
          this.$router.push('/dashboard');
        }
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
