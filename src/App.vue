<template>
  <div>
    <header-component :user="user"></header-component>
    <router-view/>
  </div>

</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";
export  default  {
  components:{
    HeaderComponent
  },
  data() {
    return {
      user:false
    }
  }
}
</script>


<style>
</style>
