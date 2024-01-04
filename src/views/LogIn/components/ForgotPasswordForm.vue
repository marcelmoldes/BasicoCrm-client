<template>


  <div class="relative isolate mr-6 ">
    <div
        class="absolute top-0    transform-gpu overflow-hidden blur-xl  ">
      <div class="aspect-[651/100]  w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
           style="clip-path: polygon(6.1% 9.5%, 200% 17.1%, .6% 3%, 48.4% 0%, 44.6% 4.7%, 4.5% 25.3%, 9.8% 49%, 55.2% 57.8%, 4.4% 57.2%, 27.8% 7.9%, 3.1% 8.5%, 7% 97.7%, 39.2% 100%, 35.2% 81.4%, 7.2% 52.8%, 6.1% 29.5%)"></div>

      <div
          class="aspect-[801/300] mt-20  w-[50.25rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style="clip-path: polygon(63.1% 9.5%, 200% 17.1%, 7.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
    </div>
    <div
        class="absolute left-4/3 top-0   transform-gpu overflow-hidden blur-xl lg:ml-24 ">
      <div class="aspect-[801/300] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
           style="clip-path: polygon(63.1% 9.5%, 200% 17.1%, 7.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>

      <div
          class="aspect-[801/300] mt-20  w-[50.25rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style="clip-path: polygon(63.1% 9.5%, 200% 17.1%, 7.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
    </div>
    <div class="overflow-hidden ">
      <div class="   sm: lg:px-24 mt-7 lg:pt-32">
        <div class="   lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div class=" max-w-xl   xl:max-w-2xl">
            <h1 class="text-4xl ml-16 font-bold tracking-tight text-black sm:text-6xl">Forget Your Password?
            </h1>
            <p class="relative mt-6  text-xl leading-8 text-gray-900 sm:max-w-md lg:max-w-none">BasicoCrm Team needs
              your email
              for send you a message to your box email,and give you a new password.
            </p>
          </div>


          <div
              class="ml-auto sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-96">

          </div>

        </div>
      </div>
    </div>
  </div>
  <div class=" mt-44 ml-36">
    <div
        class="mx-auto flex max-w-7xl   gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
      <div class="">
        <div class="">
          <div id="form" class="flex flex-col gap-y-6 px-12 py-20 justify-center rounded-md w-full m-3  object-cover shadow-black shadow-2xl">
            <div class="flex flex-col gap-y-1">
              <label class="text-sm font-medium text-gray-600 ml-1" for="email">Email</label>
              <input id="email"
                     class="rounded-md px-5 border-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email"
                     placeholder="basicocrm@example.com"
                     type="email">

            </div>


            <button id="form"
                    class="font-semibold border border-gray-200 rounded-full py-2 bg-blue-500 hover:opacity-90 text-white "
                    >
              Send Email
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


export default {


  data() {
    return {


      error: false
    }
  },
  methods: {}
}
</script>