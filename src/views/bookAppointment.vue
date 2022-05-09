<template >
  <!-- <section class="text-gray-600 body-font relative" >
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">We are waiting for you </h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2 justify-center ">
          <div class="p-2 w-1/2">
            <form @submit.prevent="getAppointment">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-lg font-bold  text-primary-3">Date</label>
              <input required type="date" min="{{current}}" v-on:change="changeDate($event)" v-model="form.date" id="email"    name="date" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>

            <label for="name" class="leading-7 text-lg font-bold  text-primary-3">Time</label>
            <select required v-on:change="changeItem($event)" v-model="form.selected"  name="name" class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option>Time available</option>
              <option v-for="times in time"  :key="times"  :value="times.CID" >{{times.begin}} to {{times.end}} to </option>
            </select>
          </div>

          <div class="p-2  w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-lg font-bold  text-primary-3">Subject description</label>
              <textarea required id="message" v-model="form.sujet" name="message" @input="getTextSubject($event.target.value)" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div> -->
  <!-- btn -->
  <!-- <div class="flex justify-center mt--1 "> -->

  <!--     <button @click="getAppointment()" class="inline-flex font-medium  rounded-2xl text-neutral bg-primary-0 border-0 py-2 px-8 focus:outline-none  text-lg">Get an appointment</button> -->
  <!-- <input type="submit" value="getAppointment" class="btn text-neutral btn-block bg-blue-500">
          </div>
            </form>
        </div>
      </div>
    </div>
    </div>
  </section> -->

  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="
          lg:w-1/3
          md:w-1/2
          bg-white
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
          relative
          z-10
          shadow-md
        "
      >
        <h2
          class="
            text-slate-400
            border-b-4 border-blue-500
            pb-2
            text-xl
            uppercase
            mb-1
            font-semibold
            title-font
          "
        >
          Waiting for you
        </h2>
        <form @submit.prevent="getAppointment">
          <!-- <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> -->
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
            <label for="name" class="leading-7 text-lg font-bold text-primary-3"
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
              <option v-for="times in time" :key="times" :value="times.CID">
                {{ times.begin }} to {{ times.end }} to
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
              v-model="form.sujet"
              name="message"
              @input="getTextSubject($event.target.value)"
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
            ></textarea>
          </div>
          <input
            type="submit"
            value="Get Appointment"
            class="
              btn
              text-white
              px-3
              py-2
              rounded
              w-full
              font-semibold
              bg-blue-500
              hover:cursor-pointer hover:bg-blue-600
            "
          />
        </form>
      </div>
    </div>
  </section>
</template>



<script>
import swal from "sweetalert";

export default {
  name: "bookAppointment",
  data() {
    return {
      time: [],
      selected: "",
      date: "",
      sujet: "",
      current: "",

      form: {
        date: this.date,
        sujet: "",
        id: localStorage.getItem("id"),
        selected: this.selected,
      },
    };
  },
  components: {},
  methods: {
    changeItem: function changeItem(event) {
      this.selected = event.target.value;

      console.log(this.selected);
    },

    getTextSubject(value) {
      this.sujet = value;
    },

    isExpired() {
      let dateNow = new Date();
      let tokenTime = new Date(localStorage["exp"] * 1000);
      let isExpired = tokenTime.getTime() - dateNow.getTime();
      return isExpired;
    },

    changeDate: async function changeDate(event) {
      this.date = event.target.value;

      console.log(this.date);

      const data = await fetch("http://localhost/app/appointments/time", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          selectedDate: this.date,
        }),
      });

      if (data.status === 200) {
        let result = await data.json();

        this.time = result;

        console.log(this.time);
        console.log(true);
      }
    },

    async getAppointment() {
      //  let token = localStorage.getItem("token");
      /* let id = localStorage.getItem('id');
      let date = this.date;
      let selected = this.selected;
      let sujet = this.sujet; */
      const data = await fetch(
        "http://localhost/app/appointments/takeAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        }
      );

      if (data.status === 200) {
        console.log(this.form);
        console.log("appointment taken");
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "Aww yiss!",
        });
        this.$router.push("PatientPage");
      } else {
        console.log("Failure");
      }
    },

    async geTime() {
      const data = await fetch("http://localhost/app/appointments/time", {
        method: "POST",
        headers: { "content-type": "application/json" },
      });

      if (data.status === 200) {
        let result = await data.json();

        this.time = result;

        console.log(this.time);
      }
    },

    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}-${current.getMonth()}-${current.getDay()}`;
      this.current = date;
      console.log(date);
    },
  },
  beforeMount() {
    // this.geTime();
    this.currentDate();
  },
};
</script>

<style scoped>
</style>