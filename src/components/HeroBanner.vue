<template>
  <main>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-14 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class=" hero-title font-bold sm:text-3xl  mb-4  text-gray-900 text-7xl">A leading visionary in dental care.
            <br class="hidden lg:inline-block">
          </h1>
          <p class="mb-8 leading-relaxed text-lg leading-8  font-medium">
            Our dentists combine high-quality treatments and calm, comfortable dental care with a knowledgeable team that treats you like family.
            <br><span class=""><span class="text-primary-3 font-semibold">Request an appointment</span> today and join our family of patients for life.</span>
          </p>
          <div class="flex justify-center mt--1 ">
            <router-link to="/LoginPage" >
            <button class="inline-flex font-bold  rounded-full text-neutral bg-cyan-500 text-cyan-50 border-0 py-3 px-8 focus:outline-none  text-lg">Get Started</button>
            </router-link>
          </div>
        </div>
        <div class=" ban-img  lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class=" ban-img object-cover object-center " alt="hero" src="../assets/pexels-andrea-piacquadio-3779705.jpg">
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "heroBanner"
}
</script>

<style scoped>
*{
  font-family: 'Source Sans Pro', sans-serif;
}
 .ban-img{
   position: relative;
   border-radius: 78% 22% 65% 35% / 37% 38% 62% 63%   ;
 }
.ban-img:after{
   position: absolute;
   content: '';
   width: 90%;
   height: 100%;
   left: 0;
   top: -1em;
   background:#22D3EE ;
   transform: rotate(40deg);
   border-radius:66% 34% 43% 57% / 58% 61% 39% 42%   ;
   z-index: -11;

 }
 .ban-img:before{
   position: absolute;
   content: '';
   width: 100%;
   height: 100%;
   left: 2em;
   top: 0;
   border: dashed #22D3EE 3px;
   transform: rotate(50deg);
   border-radius: 42% 58% 43% 57% / 72% 35% 65% 28%   ;
   z-index: -11;
 }

 .hero-title{
   font-size: 3.5em;
   line-height: 1.5em;
 }
 button{
   box-shadow: 0 15px 30px #94a4e5;
 }
</style>