<template>
  <div class="bg-white mt-20">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button aria-controls="faq-0" aria-expanded="false"
                      class="flex w-full items-start justify-between text-left text-gray-900" type="button"
                      @click="menuOpen1 = menuOpen1 ==! true">
                <span class="text-base font-semibold leading-7">What&#039;s the best thing about Switzerland?</span>
                <span class="ml-6 flex h-7 items-center">

                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg aria-hidden="true" class="hidden h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="menuOpen1" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is a big plus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </dd>
          </div>
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button aria-controls="faq-0" aria-expanded="false"
                      class="flex w-full items-start justify-between text-left text-gray-900" type="button"
                      @click="menuOpen2 = menuOpen2 ==! true">
                <span class="text-base font-semibold leading-7">What&#039;s the best thing about Switzerland?</span>
                <span class="ml-6 flex h-7 items-center">

                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg aria-hidden="true" class="hidden h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="menuOpen2" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is a big plus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </dd>
          </div>
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button aria-controls="faq-0" aria-expanded="false"
                      class="flex w-full items-start justify-between text-left text-gray-900" type="button"
                      @click="menuOpen3 = menuOpen3 ==! true">
                <span class="text-base font-semibold leading-7">What&#039;s the best thing about Switzerland?</span>
                <span class="ml-6 flex h-7 items-center">

                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg aria-hidden="true" class="hidden h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="menuOpen3" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is a big plus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </dd>
          </div>
          <div class="pt-6">
            <dt>
              <!-- Expand/collapse question button -->
              <button aria-controls="faq-0" aria-expanded="false"
                      class="flex w-full items-start justify-between text-left text-gray-900" type="button"
                      @click="menuOpen4 = menuOpen4 ==! true">
                <span class="text-base font-semibold leading-7">What&#039;s the best thing about Switzerland?</span>
                <span class="ml-6 flex h-7 items-center">

                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg aria-hidden="true" class="hidden h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                     viewBox="0 0 24 24">
                  <path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="menuOpen4" id="faq-0" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is a big plus. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
            </dd>
          </div>
        </dl>

      </div>

    </div>
  </div>


</template>
<script>
export default {
  data() {
    return {
      menuOpen1: false, menuOpen2: false, menuOpen3: false, menuOpen4: false

    }
  }
}
</script>