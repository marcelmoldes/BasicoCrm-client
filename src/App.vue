<template>
  <div>
    <header-component></header-component>
    <router-view/>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  components: { HeaderComponent }
})
</script>


<style>
</style>
