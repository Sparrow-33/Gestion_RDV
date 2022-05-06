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
                  @click="deleteAppointment( result.IDR)"
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

    <!-- --- -->
  </section>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "PatientPage",
  data() {
    return {
      sujet: "",
      date: "",
      heure: "",
      result: [],
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

   async deleteAppointment(RID){
     
     const result ={id : RID}
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
        this.getAppointment()
      } else {
        console.log("Failure");
      }
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