<template>
  <div>
    <div class="md:flex md:items-center md:justify-end h-24">
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button class="ml-3 inline-flex justify-end rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                @click="$eventBus.emit('saveDeal')"
        >
          Save
        </button>
      </div>
    </div>
    <deal-form :user="user"></deal-form>
  </div>
</template>


<script>


import DealForm from "@/views/Deals/components/DealForm.vue";

export default {
  props: ['user'],
  emits: ['saveDeal'],
  components: {
    DealForm,

  },
}

</script>