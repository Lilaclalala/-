import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/global.css";
import Login from "@/views/Login.vue";
import Patient from "@/views/patient/PatientUser.vue";
import OrderOperate from "@/views/order/OrderOperate.vue";
import MyOrder from "@/views/patient/MyOrder.vue";

import PatientHome from "@/views/patient/PatientHome.vue";
import MyBed from "@/views/patient/MyBed.vue";
import echarts from 'echarts';//引入echarts
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
    //redirect: "/login",//设置默认跳转路径
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
  }
];

const router = new VueRouter({
  routes
});

export default router;
