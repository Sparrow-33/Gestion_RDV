<template>
 

  <!-- <section class="vh-100 mt-5">
    <div class="container-fluid h-custom mt-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="../assets/dentist-clinic.svg" class="img-fluid"
               alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
          <form  @submit.prevent="register"> -->
            <!-- F Name input -->
            <!-- <div class="form-outline mb-3">
              <label for="FamName">Family Name: <sup>*</sup></label>
              <input type="text" name="FamName" class="form-control form-control-lg "
                       v-model="form.FamName">
              <span class="invalid-feedback"></span>
            </div> -->
            <!-- P Name input -->
            <!-- <div class="form-outline mb-3">
              <label for="PersName">Personal Name: <sup>*</sup></label>
              <input type="text" name="PersName" class="form-control form-control-lg "
                     v-model="form.PersName">
              <span class="invalid-feedback"></span>
            </div> -->

            <!-- Date -->
            <!-- <div class="form-outline mb-3">
              <label for="NID">National ID: <sup>*</sup></label>
              <input type="text" name="NID" class="form-control form-control-lg "
                     maxlength="7" minlength="7" v-model="form.NID" >
              <span class="invalid-feedback"></span>
            </div> -->

            <!-- Email input -->
            <!-- <div class="form-outline mb-3">
              <label for="email">Email: <sup>*</sup></label>
              <input type="email" name="email" class="form-control form-control-lg"
                       v-model="form.email">
              <span class="invalid-feedback"></span>
            </div> -->

            <!-- Password input -->
            <!-- <div class="form-outline mb-3">
              <label for="password">Password: <sup>*</sup></label>
              <input type="password" name="password" class="form-control form-control-lg "
                       v-model="form.password">
              <span class="invalid-feedback"></span>
            </div>



            <div class="d-flex justify-content-between align-items-center">

            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <input type="submit" value="Register" class="btn btn-success btn-block bg-primary-0">
              <p class="small fw-bold mt-2 pt-1 mb-0">have an account ?
                <router-link to="LoginPage">
                <a href="" class="link-danger">Login</a>
                </router-link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>

  </section> -->

  <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div
               class="
               max-w-[525px]
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               "
               >
               <div class="mb-10 md:mb-16 text-center">
                  <a
                     href="javascript:void(0)"
                     class="inline-block max-w-[160px] mx-auto"
                     >
                  <img src="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg" alt="logo" />
                  </a>
               </div>
               <form  @submit.prevent="login">
                  <div class="mb-6">
                     <input
                        type="email"
                        placeholder="Email"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        v-model="form.email"
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Personal Name"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        
                        />
                  </div>

                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Family name"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        v-model="form.password"
                        />
                  </div>

                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="CIN"
                        maxlength="8"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        v-model="form.password"
                        />
                  </div>


                  <div class="mb-10">
                     <input
                        type="submit"
                        value="Register"
                        class="
                        w-full
                        rounded-md
                        border
                        bordder-primary
                        py-3
                        px-5
                        bg-blue-400
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                        />
                  </div>
               </form>
              
               
               <p class="text-base text-[#adadad]">
                  Already a member?
                  <router-link to="LoginPage">

                  <a
                     href="javascript:void(0)"
                     class="text-primary hover:underline"
                     >
                  Sign In
                  </a>
                  </router-link>
               </p>
               <div>
                  <span class="absolute top-1 right-1">
                     <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="1.39737"
                           cy="38.6026"
                           r="1.39737"
                           transform="rotate(-90 1.39737 38.6026)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="1.39737"
                           cy="1.99122"
                           r="1.39737"
                           transform="rotate(-90 1.39737 1.99122)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="13.6943"
                           cy="38.6026"
                           r="1.39737"
                           transform="rotate(-90 13.6943 38.6026)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="13.6943"
                           cy="1.99122"
                           r="1.39737"
                           transform="rotate(-90 13.6943 1.99122)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="25.9911"
                           cy="38.6026"
                           r="1.39737"
                           transform="rotate(-90 25.9911 38.6026)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="25.9911"
                           cy="1.99122"
                           r="1.39737"
                           transform="rotate(-90 25.9911 1.99122)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="38.288"
                           cy="38.6026"
                           r="1.39737"
                           transform="rotate(-90 38.288 38.6026)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="38.288"
                           cy="1.99122"
                           r="1.39737"
                           transform="rotate(-90 38.288 1.99122)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="1.39737"
                           cy="26.3057"
                           r="1.39737"
                           transform="rotate(-90 1.39737 26.3057)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="13.6943"
                           cy="26.3057"
                           r="1.39737"
                           transform="rotate(-90 13.6943 26.3057)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="25.9911"
                           cy="26.3057"
                           r="1.39737"
                           transform="rotate(-90 25.9911 26.3057)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="38.288"
                           cy="26.3057"
                           r="1.39737"
                           transform="rotate(-90 38.288 26.3057)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="1.39737"
                           cy="14.0086"
                           r="1.39737"
                           transform="rotate(-90 1.39737 14.0086)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="13.6943"
                           cy="14.0086"
                           r="1.39737"
                           transform="rotate(-90 13.6943 14.0086)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="25.9911"
                           cy="14.0086"
                           r="1.39737"
                           transform="rotate(-90 25.9911 14.0086)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="38.288"
                           cy="14.0086"
                           r="1.39737"
                           transform="rotate(-90 38.288 14.0086)"
                           fill="#3056D3"
                           />
                     </svg>
                  </span>
                  <span class="absolute left-1 bottom-1">
                     <svg
                        width="29"
                        height="40"
                        viewBox="0 0 29 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="2.288"
                           cy="25.9912"
                           r="1.39737"
                           transform="rotate(-90 2.288 25.9912)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="14.5849"
                           cy="25.9911"
                           r="1.39737"
                           transform="rotate(-90 14.5849 25.9911)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="26.7216"
                           cy="25.9911"
                           r="1.39737"
                           transform="rotate(-90 26.7216 25.9911)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="2.288"
                           cy="13.6944"
                           r="1.39737"
                           transform="rotate(-90 2.288 13.6944)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="14.5849"
                           cy="13.6943"
                           r="1.39737"
                           transform="rotate(-90 14.5849 13.6943)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="26.7216"
                           cy="13.6943"
                           r="1.39737"
                           transform="rotate(-90 26.7216 13.6943)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="2.288"
                           cy="38.0087"
                           r="1.39737"
                           transform="rotate(-90 2.288 38.0087)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="2.288"
                           cy="1.39739"
                           r="1.39737"
                           transform="rotate(-90 2.288 1.39739)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="14.5849"
                           cy="38.0089"
                           r="1.39737"
                           transform="rotate(-90 14.5849 38.0089)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="26.7216"
                           cy="38.0089"
                           r="1.39737"
                           transform="rotate(-90 26.7216 38.0089)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="14.5849"
                           cy="1.39761"
                           r="1.39737"
                           transform="rotate(-90 14.5849 1.39761)"
                           fill="#3056D3"
                           />
                        <circle
                           cx="26.7216"
                           cy="1.39761"
                           r="1.39737"
                           transform="rotate(-90 26.7216 1.39761)"
                           fill="#3056D3"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
export default {
  name: "RegisterPage",
  data(){
    return {
      form:{
        FamName:'',
        PersName:'',
        NID:'',
        email:'',
        password:'',

      }

    }
  },
  methods:{
    async register(){
       const data = await fetch("http://localhost/app/users/register",
           {
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(this.form)
           }
       );
     if (data.status === 200){
       this.$router.push('LoginPage')
       console.log("SUCCESS")
     }else{
       console.log("FAILURE")
     }
    },
  }
}
</script>

<style scoped>

</style>