<template>
  <div class="  p-4   py-20 lg:px-8">
    <div>
      <h1 class="text-2xl  font-bold text-white">Change Your Password</h1>
    </div>
    <div class=" sm:mx-auto rounded-md  px-28  py-12 bg-gray-800">


      <form class="">

        <div class="grid grid-cols-1 gap-x-6 mr-20  sm:grid-cols-6">

          <div class="sm:col-span-3">
            <label class=" text-sm font-medium text-white">Current Password</label>


            <input
                class="p-3 mt-2 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ">
          </div>


          <div class="sm:col-span-3">
            <label class=" text-sm font-medium  text-white">New Password</label>

            <input class="mt-2 w-full p-3 rounded-md border-0 py-3 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                   type="text">


          </div>
<div class="col-end-9">
  <button class="text-white text-l font-bold mt-8 text-center hover:bg-blue-700  bg-blue-600 py-2.5 px-8 rounded-full ">
    Save
  </button>
</div>


        </div>
      </form>

    </div>
  </div>

</template>
<script >
</script>