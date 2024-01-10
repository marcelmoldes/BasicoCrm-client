<template>
  <div class="px-44 mt-10 py-9 rounded-md border-gray-500 border bg-gray-100">
    <h1 class=" text-center">Address Information</h1>
    <div class="gap-4 flex  xl:mt-0">
      <ul class="mt-4  space-y-4">
        <li class="text-lg leading-6 text-gray-600 ">
          Street Addres 1
        </li>
        <li class="text-lg leading-6 text-gray-600 ">
          Street Address 2
        </li>
        <li class="text-lg leading-6 text-gray-600 ">
          State
        </li>
        <li>
          City
        </li>
        <li class="text-lg leading-6 text-gray-600 ">
          Country
        </li>
        <li class="text-lg leading-6 text-gray-600 ">
          Postal code
        </li>
      </ul>

      <div class="md:mt-0">
        <ul class="mt-4 space-y-4" role="list">
          <li class="text-l leading-6 text-black">

            {{ contact.Address ? contact.Address.street_address1 : '-' }}
          </li>
          <li class="text-l leading-6 text-black">
            {{ contact.Address ? contact.Address.street_address2 : '-' }}
          </li>
          <li class="text-l leading-6 text-black">
            {{ contact.Address ? contact.Address.state : '-' }}
          </li>
          <li class="text-l leading-6 text-black">
            {{ contact.Address ? contact.Address.city : '-' }}
          </li>
          <li class="text-l leading-6 text-black">
            {{ contact.Address ? contact.Address.country : '-' }}
          </li>
          <li class="text-l leading-6 text-black">
            {{ contact.Address ? contact.Address.postal_code : '-' }}
          </li>

        </ul>
      </div>
    </div>
  </div>

</template>
<script>
export  default  {
  props:['user','contact']
}
</script>