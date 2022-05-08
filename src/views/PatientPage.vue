<template>
  <section class="vh-100 mt-5">
    <div class="container-fluid h-custom mt-5">
      <div class="container mt-5 flex gap-5 px-5">
        <!-- <table class="table">
      <thead>
      <tr>
        <th>Subject</th>
        <th>appointment date</th>
        <th>appointment time</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="result in result" :key="result">
        <td>{{ result.sujet }}</td>
        <td>{{date}}</td>
        <td>{{ heure }}</td>
      </tr>

      </tbody>
    </table> -->
        <!-- ---------- -->
        <div v-for="result in result" :key="result">
          <div class="flex justify-center pb-3">
            <div
              class="block rounded-lg shadow-lg bg-white max-w-sm text-center"
            >
              <div class="flex justify-center gap-4">
                <button
                  type="button"
                  @click="getSingleAppointment(result.IDR), popup=!popup"
                  class="
                    edit
                    inline-block
                    px-6
                    py-2.5
                    mb-2
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded-full
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  type="button"
                  class="
                    edit
                    inline-block
                    px-6
                    py-2.5
                    mb-2
                    bg-red-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded-full
                    shadow-md
                    hover:bg-red-700 hover:shadow-lg
                    focus:bg-red-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-red-700 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                  @click="deleteAppointment(result.IDR)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
              <div class="py-3 px-6 border-b border-gray-300">
                <p class="text-cyan-700 font-semibold">Date</p>
                <p class="bg-cyan-600 rounded-xl py-2 text-white">
                  {{ result.dateRDV }}
                </p>
              </div>
              <div class="p-6">
                <h5 class="text-cyan-700 font-semibold mb-2">Sujet</h5>
                <p class="bg-cyan-600 rounded-xl py-2 px-3 text-white mb-4">
                  {{ result.Sujet }}
                </p>
              </div>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <p class="text-cyan-700 font-semibold mb-2">Heure</p>
                <p class="bg-cyan-600 rounded-xl py-2 px-3 text-white mb-4">
                  {{ result.begin }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- ---------------- -->
      </div>
    </div>

    <!-- popup -->
    <div v-if="!popup" @click="popup = !popup" class="absolute bg-black opacity-80 inset-0 z-0 flex justify-center">
      <div class="p-4 md:w-1/3">
        <div
          class="relative h-full border-2 bg-gray-200 rounded-lg overflow-hidden"
        >

         <div class="absolute h-full bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">

           
      <div class="relative mb-4">
        <label
              for="email"
              class="leading-7 text-lg font-bold text-primary-3"
              >Date</label
            >
            <input
              required
              type="date"
              v-model="result[0].dateRDV"
              id="email"
              name="date"
              class="
                w-full
                bg-gray-100 bg-opacity-50
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-2
                focus:ring-blue-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-lg font-bold text-primary-3"
              >Time</label
            >
            <select
              required
             
              name="name"
              class="
                w-full
                bg-opacity-50
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-2
                focus:ring-blue-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            >
              <option>Time available</option>
              <option >
                
              </option>
            </select>
      </div>

         <div class="relative mb-4">
            <label
              for="message"
              class="leading-7 text-lg font-bold text-primary-3"
              >Subject description</label
            >
            <textarea
              required
              id="message"
             
              name="message"
             
              class="
                w-full
                bg-gray-100 bg-opacity-50
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-2
                focus:ring-blue-200
                h-32
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                resize-none
                leading-6
                transition-colors
                duration-200
                ease-in-out
              "
              v-model="result[0].Sujet"
            ></textarea>
          </div>

      <input type="submit" value="Update" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
       </div>


        </div>
      </div>
    </div>

    <!-- --- -->
  </section>
</template>

<script >
import swal from "sweetalert";
//  const popup =true;

export default {


  name: "PatientPage",
  data() {
    return {
      sujet: "",
      date: "",
      heure: "",
      result: [],
      popup : true
      
    };
  },

  methods: {
    async getAppointment() {
      const id = localStorage.getItem("id");
      const data = await fetch(
        "http://localhost/app/appointments/MyAppointments/" + id,
        { method: "POST", headers: { "content-type": "application/json" } }
      );
      if (data.status === 200) {
        let result = await data.json();
        // console.log(result);
        this.result = result;
        // this.sujet = result[0].Sujet;
        // this.date = result[0].dateRDV;
        // this.heure = result[0].begin;
        // console.log(this.sujet);
      }
    },

    async getSingleAppointment(RID){
      const result = {  id: RID };
      const id = localStorage.getItem("id");
      const data = await fetch(
        "http://localhost/app/appointments/getSingleAppointment/" + id,
        { method: "POST",
         headers: { 
           "content-type": "application/json" 
           },
         body:JSON.stringify(result) }
      );
      if (data.status === 200) {
        let result = await data.json();
        this.result = result;

        console.log( this.result[0].Sujet)
       
      }

      
    },

    async deleteAppointment(RID) {
      const result = { id: RID };
      const data = await fetch(
        "http://localhost/app/appointments/deleteAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result),
        }
      );

      if (data.status === 200) {
        console.log("Item Deleted");
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "Aww yiss!",
        });
        this.$router.push("PatientPage");
        this.getAppointment();
      } else {
        console.log("Failure");
      }
    },

   async editAppointment(){

    
   },

  },
  beforeMount() {
    this.getAppointment();
  },
};
</script>

<style scoped>
table {
  margin-top: 7em;
}
</style>