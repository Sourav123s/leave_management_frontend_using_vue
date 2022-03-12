import AddEmployee from "./components/AddEmployee.vue";
import EmployeeDetails from "./components/EmployeeDetails";
import LogIn from "./components/LogIn.vue";
import Home from "./components/Home.vue";
import ApplyLeave from "./components/ApplyLeave.vue";
import MyLeave from "./components/MyLeave.vue";
import ApprovedOrReject from "./components/ApprovedOrReject.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "AddEmployee",
    component: AddEmployee,
    path: "/addemployee",
  },
  {
    name: "EmployeeDetails",
    component: EmployeeDetails,
    path: "/employee-details",
  },
  {
    name: "ApplyLeave",
    component: ApplyLeave,
    path: "/apply-leave",
  },
  {
    name: "MyLeave",
    component: MyLeave,
    path: "/my-leave",
  },
  {
    name: "ApprovedOrReject",
    component: ApprovedOrReject,
    path: "/approve-reject",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
