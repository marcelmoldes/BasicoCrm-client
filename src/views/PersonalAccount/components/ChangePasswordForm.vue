<template>
  <div class="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">


    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-20 rounded-lg py-12 bg-gray-800">
      <form class="space-y-6 " action="#" method="POST ">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Current Password</label>
          <div class="mt-2">
            <input  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label  class="block text-sm font-medium leading-6 text-white">New Password</label>

          </div>
          <div class="mt-2">
            <input type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center font-semibold rounded-full py-2 bg-blue-500 hover:bg-blue-600 text-white   px-3  text-sm  leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Change Password</button>
        </div>
      </form>


    </div>
  </div>

</template>
<script >
</script>