<template>

  <div class="relative isolate pt-14">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
    </svg>
    <div class="mx-auto max-w-7xl px-6 py-4 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">

        <h1 class="md:mt-10  max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">A basic and complete CRM</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">Improve the organization of your company, control your clients, contacts, your sales, improve your business relationships, do it better!</p>

        <div class="mt-10 flex items-center gap-x-6">

          <img src="@/assets/images/logo.png" class=" w-20 " alt=""> </div>
      </div><img src="@/assets/images/working.jpg">
    </div>
    <div class="text-center mt-12 md:mt-0 ">
      <button         @click="$router.push('/register')" class="bg-blue-400 delay-150 transition ease-in-out hover:-translate-y-1 hover:scale-110  animate-bounce hover:bg-blue-500  text-pretty text-lg font-bold px-36 py-4 rounded text-white"  >Get started</button>
    </div>

  </div>



</template>

<style scoped>
button {
  display: inline-block;

  cursor: pointer;
  transition: background-color 1s ease;
}



</style>
<script setup>
</script>