<template>
  <section v-if="result" class="vh-100 mt-5">
    <div class="container-fluid h-custom mt-5">
      <div class="container mt-5 flex gap-5 px-5">
        <div v-for="result in result" :key="result">
          <div class="flex justify-center pb-3">
            <div
              class="block rounded-lg shadow-lg bg-white max-w-sm text-center"
            >
              <div class="flex justify-center gap-4">
                <button
                  type="button"
                  @click="getSingleAppointment(result.IDR), (popup = !popup)"
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
                <textarea readonly  v-model="result.Sujet " class="bg-cyan-600 rounded-xl py-2  px-3 h-32 text-white mb-4">
                  
                </textarea>
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
    <div
      v-if="!popup"
      class="absolute bg-black opacity-80 inset-0 z-10 flex justify-center w-full h-full"
    >
      <div class="p-4 md:w-1/3 sm:w-1/2">
        <div
          class="
            relative
            h-full
            border-2
            bg-gray-200
            rounded-lg
            overflow-hidden
            popup
          "
        >
          <div
            class="
              absolute
              h-full
              bg-gray-100
              rounded-lg
              p-8
              flex flex-col
              md:ml-auto
              w-full
              mt-10
              md:mt-0
            "
          >
            <form @submit.prevent="editAppointment(popResult[0].IDR)">
              <div class="relative mb-4">
                <label
                  for="email"
                  class="leading-7 text-lg font-bold text-primary-3"
                  >Date</label
                >
                <input
                  required
                  type="date"
                  v-on:change="changeDate($event)"
                  v-model="form.date"
                  
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
                <label
                  for="name"
                  class="leading-7 text-lg font-bold text-primary-3"
                  >Time</label
                >
                <select
                  required
                  v-on:change="changeItem($event)"
                  v-model="form.selected"
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
                  <option v-for="times in time" :key="times" :value="times.CID" >
                    {{ times.begin }} to {{ times.end }} 
                  </option>
                  <option :value="popResult[0].CID" selected>{{popResult[0].begin}} to {{popResult[0].end}}</option>
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
                  maxlength="150"
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
                  v-model="form.sujet"
                  @input="getTextSubject($event.target.value)"
                ></textarea>
              </div>

              <input
                type="submit"
                value="Update"
                class="
                  text-white
                  bg-sky-500
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  hover:bg-sky-600
                  rounded
                  text-lg
                "
              />
             <button class="
                  text-white
                  bg-red-500
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  hover:bg-red-600
                  rounded
                  text-lg
                  
                "
                @click="popup = !popup">Close</button>
            </form>
             
          </div>
        </div>
      </div>
    </div>

    <!-- --- -->
  </section>

  <!-- """""""""""""""""""" -->

</template>

<script >
import swal from "sweetalert";
export default {
  name: "PatientPage",
  data() {
    return {
      time: [],
      
      result: [],
      popResult: [],
      popup: true,

      form: {
        date: "",
        sujet: "",
        id: localStorage.getItem("id"),
        selected: this.selected,
      },
    };
  },

  methods: {

    changeItem: function changeItem(event) {
      this.selected = event.target.value;
    },

    getTextSubject(value) {
      this.popupSujet = value;
    },


    async getAppointment() {
      const id = localStorage.getItem("id");
      const data = await fetch(
        "http://localhost/app/appointments/MyAppointments/" + id,
        { method: "POST", headers: { "content-type": "application/json" } }
      );
      if (data.status === 200) {
        let result = await data.json();
        this.result = result;
      }
    },

    async getSingleAppointment(RID) {
      const result = { id: RID };
      const id = localStorage.getItem("id");
      const data = await fetch(
        "http://localhost/app/appointments/getSingleAppointment/" + id,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(result),
        }
      );
      if (data.status === 200) {
        let result = await data.json();
        this.popResult = result;
        this.form.sujet = this.popResult[0].Sujet
      }
    },

    changeDate: async function changeDate(event) {
      this.form.date = event.target.value;

      const data = await fetch("http://localhost/app/appointments/time", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          selectedDate: this.popupDate,
        }),
      });

      if (data.status === 200) {
        let result = await data.json();

        this.time = result;

      }
    },

    async deleteAppointment(RID) {


      swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {

            if (willDelete) {

              const result = { id: RID };
              const data =  fetch(
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
                    swal({
                      title: "Good job!",
                      text: "You clicked the button!",
                      icon: "success",
                      button: "Ok",
                    });
                    
                  }

              swal("Poof! Your appointment  has been deleted!", {icon: "success",});

                this.$router.push("PatientPage");
                this.getAppointment();
            } 
            else {
              swal("Your appointment  is safe!");
            }
      });

      
    },

    async editAppointment(id) {

      const obj = {
        id : id,
        date :this.form.date,
        selected : this.selected,
        sujet : this.form.sujet
      }
      
      console.log(id)
      console.log(obj.selected)
      console.log(obj.date)
      console.log(obj.sujet)

      const data = await fetch(
        "http://localhost/app/appointments/updateAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      if (data.status === 200) {
        
        this.$router.push("PatientPage");
        this.popup = !this.popup
        this.getAppointment();
        swal({
          title: "Updated",
          text: "",
          icon: "success",
          button: "Ok",
        });
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

@media (max-width:700px){
  .popup{
    width:400px
  }
}
</style>