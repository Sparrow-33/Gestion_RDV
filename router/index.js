import { createWebHistory, createRouter} from "vue-router"
import HomePage from '@/views/HomePage';
import RegisterPage from "@/views/RegisterPage";
import LoginPage from "@/views/LoginPage";
import PatientPage from "@/views/PatientPage";
import bookAppointment from "@/views/bookAppointment";
import testPage from "@/views/testPage"
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/RegisterPage",
        name: RegisterPage,
        component: RegisterPage,
    },
    {
        path:"/LoginPage",
        name: LoginPage,
        component: LoginPage
    },
    {
        path:"/PatientPage",
        name: PatientPage,
        component: PatientPage
    },
    {
        path:"/bookAppointment",
        name:bookAppointment,
        component: bookAppointment
    },

    {
            path:"/testPage",
            name:testPage,
            component: testPage
        }

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;