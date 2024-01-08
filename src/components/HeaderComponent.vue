<template>
  <header id="form" class="bg-gray-50">
    <nav class="hidden lg:flex mx-auto flex max-w-7xl items-center justify-between p-3.5 lg:px-8">

      <a class="" href="/dashboard">

        <img alt="" class="w-16 mr-20  rounded-md border border-gray-200" src="../assets/images/basico-logo.jpeg">
      </a>

      <div class="flex lg:hidden">
        <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300" type="button">
          <span class="sr-only">Open main menu</span>
          <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
               viewBox="0 0 24 24">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div v-if="user" class="lg:flex ml-20 justify-end lg:gap-x-12 ">
        <a class="text-sm hover:text-gray-600 hover:underline  font-semibold cursor-pointer leading-6 text-gray-500"
           @click="$router.push('/dashboard')">Dashboard</a>
        <a class="text-sm hover:text-gray-600  hover:underline  font-semibold cursor-pointer leading-6 text-gray-500"
           @click="$router.push('/contacts')">Contacts</a>
        <a class="text-sm hover:text-gray-600  hover:underline  font-semibold leading-6 text-gray-500"
           href="#">Accounts</a>
        <a class="text-sm hover:text-gray-600  hover:underline  font-semibold leading-6 text-gray-500"
           href="#">Deals</a>
        <a class="text-sm hover:text-gray-600  hover:underline  font-semibold leading-6 text-gray-500"
           href="#">Tasks</a>
        <a class="text-sm hover:text-gray-600  hover:underline  font-semibold leading-6 text-gray-500" href="#">Activities</a>
      </div>
      <div class="lg:flex ml-32 lg:gap-x-12">
        <div class=" lg:flex gap-x-3 lg:flex-1 lg:justify-end">
          <button v-if="!user" id="form" class=" font-semibold leading-6 px-8 rounded-full py-2 border border-gray-200 hover:opacity-90  text-white underline-offset-2 underline-gray"
                  @click="$router.push('/login')">
            Login
          </button>
        </div>
        <div v-if="!user" class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button id="form" class="px-8 font-semibold hover:opacity-90 rounded-full py-2 border-gray-200 border  text-white " href="#"
                  @click="$router.push('/register')">
            Register
          </button>
        </div>
        <div v-if="user" class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button id="form" class="px-8 font-semibold hover:opacity-90 border border-gray-200 rounded-full py-2 bg-blue-500 text-white "
                  @click="$emit('logUserOut')">
            Logout
          </button>
        </div>
      </div>
      <span v-if="user" class="relative cursor-pointer inline-block">
        <a class="hover:opacity-80" @click="$router.push('/personal-account')"><img
            alt=""
            class="h-14 w-14 ml-10 border border-gray-200 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></a>
        <span class="absolute right-0  top-0 block h-3 w-3 rounded-full bg-green-400    ring-1 ring-white"></span>
      </span>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div v-if="1==2" aria-modal="true" class="lg:hidden" role="dialog">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a class="-m-1.5 p-1.5" href="#">
            <span class="sr-only">Your Company</span>
            <img alt="" class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600">
          </a>
          <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button">
            <span class="sr-only">Close menu</span>
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y hover:text-white divide-gray-500/10">
            <div class="space-y-2   py-6">
              <a class="text-sm font-semibold cursor-pointer leading-6 text-white" @click="$router.push('/dashboard')">Dashboard</a>
              <a class="text-sm font-semibold cursor-pointer leading-6 text-white" @click="$router.push('/contacts')">Contacts</a>
              <a class="text-sm  font-semibold leading-6 text-white" href="#">Accounts</a>
              <a class="text-sm font-semibold leading-6 text-white" href="#">Deals</a>
              <a class="text-sm font-semibold leading-6 text-white" href="#">Tasks</a>
              <a class="text-sm font-semibold leading-6 text-white" href="#">Activities</a>
            </div>
            <div class="py-6">
              <a class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                 href="#">Log
                in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </header>


</template>
<script>
export default {
  props: ['user']
}
</script>