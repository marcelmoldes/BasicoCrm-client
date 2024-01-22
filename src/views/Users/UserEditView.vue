<template>
  <div v-if="user">
    <div class="md:flex md:items-center md:justify-end h-24">
      <div class="mt-4 flex md:ml-4 md:mt-0">
        <button @click="$eventBus.emit('saveUser')" type="button"
                class="ml-3 inline-flex justify-end rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </div>
    <user-form :token="user ? user.token : undefined"></user-form>
  </div>
</template>

<script>
import UserForm from "@/views/Users/components/UserForm.vue";
export default  {
components:{UserForm},
  props:['user'],
  emits:['saveUser'],
  data() {
    return {

    }

  }
}
</script>