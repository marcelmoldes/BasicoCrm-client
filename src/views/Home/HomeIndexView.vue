<template>
 <home-description-card ></home-description-card>
  <home-faq-card></home-faq-card>



</template>
<script>
import HomeDescriptionCard from "@/views/Home/components/HomeDescriptionCard.vue";
import HomeFaqCard from "@/views/Home/components/HomeFaqCard.vue";


export  default  {
  components:{HomeFaqCard, HomeDescriptionCard},
  data() {
    return {

    }
  }
}
</script>