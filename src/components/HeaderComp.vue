<template >
    <!-- <header class="">
    <nav class="bg-white px-12 w-full absolute top-7">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">

          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <img class="hidden lg:block h-12 w-auto" src="../assets/dental_logo.png" alt="Workflow">
              <span class="font-bold text-4xl text-primary-0 ml-2 uppercase">Dento</span>
            </div>

          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> -->


            <!-- sign btn-->
            <!-- <div class="flex items-baseline gap-10  flex-row ml-3 relative">

                <ul class="flex gap-4 self-end flex-row font-medium text-base text-secondary-0  font-bold">
                  <router-link to="/">
                    <li class="font-bold text-gray-700">Home</li>
                  </router-link>
                  <router-link to="PatientPage">
                  <li>appointments</li>
                  </router-link>
                  <router-link to="bookAppointment">
                  <li class="text-blue-400">Book an Appointments</li>
                  </router-link>
                </ul>

              <div>
                <router-link to="/LoginPage">

                <button type="button" class=" flex text-base font-medium  text-primary-0 py-2 px-5 border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"  >
                  Sign In
                </button> </router-link>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Mobile menu, show/hide based on menu state. -->

    <!-- </nav>
  </header> -->

  <header class="text-gray-600 body-font -mt-20 px-10">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <ul class="flex gap-4 self-end flex-row">
      <router-link to="/">
      <li class="mr-5 hover:text-gray-900">Home</li>
      </router-link>

      <router-link to="PatientPage">
      <li class="mr-5 hover:text-gray-900">appointments</li>
      </router-link>

      <router-link to="bookAppointment">
      <li class="mr-5 hover:text-gray-900">booking</li>
      </router-link>
      </ul>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="../assets/dental_logo.png" class="h-20" alt="">
      <span class="ml-3 text-xl text-cyan-600">DENTO</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <!-- <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> -->

                <router-link to="/LoginPage">

                <button type="button" class=" flex text-base font-medium  py-2 px-5 border border-gray-300 text-cyan-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-500 focus:ring-white"  >
                  Sign In
                </button> </router-link>
              </div>
  </div>
</header>
  </template>

  <script>
  export default{
    name:"HeaderComp"
  }
  </script>

  <style scoped>



  </style>