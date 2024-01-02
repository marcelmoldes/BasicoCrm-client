<template>

    <div class="grid max-w-7xl grid-cols-1 ml-48 gap-x-8 gap-y-10  py-6 sm:px-6 md:grid-cols-3 lg:px-8">
      <div class="py-11">
        <h2 class="text-xl font-semibold leading-7 text-white">Personal Information</h2>
        <p class="mt-1 text-lg leading-6 text-gray-400">Edit your personal information</p>
      </div>

      <form class="md:col-span-2">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div class="col-span-full flex items-center gap-x-8">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover">
            <div>
              <button type="button" class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">Change avatar</button>
              <p class="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-white">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-white">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-white">Annual Revenue</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-white">Number Of Employees</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-white">Website</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-white">Company Name</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="col-span-full">
            <label  class=" text-sm font-medium  text-white">Industry</label>
            <select
                    class="w-full rounded-md border-0 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ">
              <option></option>
              <option></option>
              <option></option>
            </select>

          </div>
          <div class="col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-white">Phone Number</label>
            <div class="mt-2">
              <input  class="p-2 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="p-4 w-full rounded-md border-0 bg-white py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <button type="button" class="rounded-full mt-3 px-20 mr-20 bg-indigo-200  py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline ">Save</button>

      </form>
    </div>


</template>
<script >
</script>