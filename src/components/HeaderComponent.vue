<template>
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">BasicoCRM</span>
        <img class="h-16 w-auto" src="../assets/images/logo.png" alt="">
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div v-if="user" class="hidden  lg:flex lg:gap-x-12">
      <a class="text-sm hover:text-gray-600 hover:underline  font-semibold cursor-pointer leading-6 text-gray-500"
         @click="$router.push('/dashboard')">Dashboard</a>
      <a class="text-sm hover:text-gray-600  hover:underline  font-semibold cursor-pointer leading-6 text-gray-500"
         @click="$router.push('/contacts')">Contacts</a>
      <a class="text-sm hover:text-gray-600  cursor-pointer hover:underline  font-semibold leading-6 text-gray-500"
         @click="$router.push('/accounts')">Accounts</a>
      <a class="text-sm hover:text-gray-600  hover:underline cursor-pointer font-semibold leading-6 text-gray-500"
         @click="$router.push('/deals')">Deals</a>
      <a class="text-sm hover:text-gray-600  hover:underline cursor-pointer  font-semibold leading-6 text-gray-500"
         @click="$router.push('/tasks')">Tasks</a>
      <a class="text-sm hover:text-gray-600 cursor-pointer  hover:underline  font-semibold leading-6 text-gray-500"
         @click="$router.push('/activities')">Activities</a>
    </div>
    <div class="lg:flex ml-32 lg:gap-x-12"
         v-click-outside="closeMenu">
      <div class="relative ml-3"  v-if="user">
        <div>
          <button id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                  class="relative ml-20 flex rounded-full  text-sm" type="button" @click="accountMenuOpen = accountMenuOpen !== true">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img alt=""
                 class="h-14 w-14 rounded-full"
                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
          </button>
        </div>
    <div v-if="accountMenuOpen"
         aria-labelledby="user-menu-button" aria-orientation="vertical" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu"
         tabindex="-1">
      <a id="user-menu-item-0" class="block px-4 py-2 text-sm text-gray-700" href="/personal-account" role="menuitem"
         tabindex="-1">Your Profile</a>
      <a id="user-menu-item-1" class="block px-4 py-2 text-sm text-gray-700" href="/users" role="menuitem"
         tabindex="-1" v-if="user.role === 'admin'">Users Management</a>
      <a id="user-menu-item-2" class="block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
         @click="$emit('logUserOut')">Sign out</a>
    </div>
<div class="justify-items-end  gap-4 flex">
</div>
      </div>

      <div  class="hidden lg:flex gap-x-3 lg:flex-1 lg:justify-end">
      <button v-if="!user"
              class=" font-semibold leading-6 px-8 rounded-full py-2 bg-blue-600 hover:opacity-90  text-white underline-offset-2 underline-gray"
              @click="$router.push('/login')">
        Login
      </button>
    </div>

      <div v-if="!user" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button id="form" class="px-8 font-semibold hover:opacity-90 rounded-full py-2 bg-blue-600 text-white"
                @click="$router.push('/register')">
          Register
        </button>
      </div>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div class="lg:hidden" role="dialog" aria-modal="true" v-if="mobileMenuOpen">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">BasicoCRM</span>
          <img class="h-16 w-auto" src="../assets/images/logo.png" alt="">
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class=" divide-y divide-gray-500/10">
          <div class="justify-between text-center  py-6">
            <a class="text-sm hover:text-gray-600 hover:underline  mr-1 font-semibold cursor-pointer leading-6 text-gray-500"
               @click="$router.push('/dashboard')">Dashboard</a>
            <a class="text-sm hover:text-gray-600  hover:underline mr-1    font-semibold cursor-pointer leading-6 text-gray-500"
               @click="$router.push('/contacts')">Contacts</a>
            <a class="text-sm hover:text-gray-600  cursor-pointer mr-1  hover:underline  font-semibold leading-6 text-gray-500"
               @click="$router.push('/accounts')">Accounts</a>
            <a class="text-sm hover:text-gray-600  hover:underline mr-1 cursor-pointer font-semibold leading-6 text-gray-500"
               @click="$router.push('/deals')">Deals</a>
            <a class="text-sm hover:text-gray-600  hover:underline mr-1 cursor-pointer  font-semibold leading-6 text-gray-500"
               @click="$router.push('/tasks')">Tasks</a>
            <a class="text-sm hover:text-gray-600 cursor-pointer  hover:underline  font-semibold leading-6 text-gray-500"
               @click="$router.push('/activities')">Activities</a>
          </div>
          <div  class="py-6">
            <a v-if="!user" @click="$router.push('/login')" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 bg-blue-200 hover:bg-blue-300">Login</a>
            <a v-if="!user"  @click="$router.push('/register')" class="-mx-3 mt-2 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 bg-blue-200 hover:bg-blue-300">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      isVisible: true,
      accountMenuOpen: false,
      mobileMenuOpen: false
    }
  },
  methods: {
    closeMenu() {
      this.accountMenuOpen = false;
    }
  }
}
</script>