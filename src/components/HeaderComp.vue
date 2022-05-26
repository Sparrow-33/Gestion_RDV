<template >
    

  <header class="text-gray-600 body-font -mt-20 px-10">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <ul class="flex gap-4 self-end flex-row">
      <router-link to="/">
      <li class="mr-5 hover:text-gray-900">Home</li>
      </router-link>

      <router-link v-if="token" to="PatientPage">
      <li class="mr-5 hover:text-gray-900">appointments</li>
      </router-link>

      <router-link v-if="token" to="bookAppointment">
      <li class="mr-5 hover:text-gray-900">booking</li>
      </router-link>
      </ul>
    </nav>
    
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img src="../assets/dental_logo.png" class="h-20" alt="">
      <router-link to="/">
      <span class="ml-3 text-xl text-cyan-600">DENTO</span>
      </router-link>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
     
                <button v-on:click="logout()" v-if="token" type="button" class=" flex text-base font-medium  py-2 px-5 border border-gray-300 text-cyan-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-500 focus:ring-white"  >
                  Logout
                </button> 

                <router-link v-else to="/LoginPage">

                <button type="button" class=" flex text-base font-medium  py-2 px-5 border border-gray-300 text-cyan-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-500 focus:ring-white"  >
                 Sign In
                </button> </router-link>

              </div>
  </div>
</header>
  </template>

  <script>
  export default {
    name:"HeaderComp",

    data(){
      return{
       token : localStorage.getItem('token')
      }
      
    },

    methods:{
      logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('exp')
        localStorage.removeItem('id')

        this.$router.push('/')
      }
    }
  }
  </script>

  <style scoped>



  </style>