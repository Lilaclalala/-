import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/global.css";
import Login from "@/views/Login.vue";
import DoctorUser from "@/views/doctor/DoctorUser.vue";
import Patient from "@/views/patient/PatientUser.vue";
import OrderList from "@/views/order/OrderList.vue";
import {getToken} from "@/utils/storage.js";
import OrderOperate from "@/views/order/OrderOperate.vue";
import SectionMessage from "@/views/section/SectionMessage.vue";
import MyOrder from "@/views/patient/MyOrder.vue";
import OrderToday from "@/views/order/OrderToday.vue";
import DoctorOrder from "@/views/doctor/DoctorOrder.vue";
import DoctorHome from "@/views/doctor/DoctorHome.vue";
import PatientHome from "@/views/patient/PatientHome.vue";
import MyBed from "@/views/patient/MyBed.vue";
import echarts from 'echarts';//引入echarts
import DoctorCard from "@/views/doctor/DoctorCard.vue";
import PatientCard from "@/views/patient/PatientCard.vue"

Vue.prototype.$echarts = echarts;//引入echarts
Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect:"/login"

  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/patient",
    component: Patient,
    meta: {
      requireAuth: true,
    },
    children:[
      {
        path: "/patientLayout",
        component: PatientHome,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/orderOperate",
        component: OrderOperate
      },
      {
        path: "/sectionMessage",
        component: SectionMessage
      },
      {
        path: "/myOrder",
        component: MyOrder
      },
      {
        path: "/myBed",
        component: MyBed
      },
      {
        path: "/patientCard",
        component: PatientCard,
      }
    ]
  },
  {
    path: "/doctor",
    component: DoctorUser,
    meta: {
      requireAuth: true,
    },
    children:[
      {
        path: "/doctorLayout",
        component: DoctorHome,
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/orderToday",
        component: OrderToday,
      },
      {
        path: "/doctorOrder",
        component: DoctorOrder,
      },
      {
        path: "/doctorCard",
        component: DoctorCard,
      }
    ],

  }
];

const router = new VueRouter({
  routes
});

export default router;