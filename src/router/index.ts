import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/first_touch/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/grid",
    name: "Grid",
    component: () => import(/* webpackChunkName: "about" */ "../views/first_touch/Grid.vue")
  },
  {
    path: "/botoes",
    name: "Botoes",
    component: () => import(/* webpackChunkName: "about" */ "../views/first_touch/Botoes.vue")
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import(/* webpackChunkName: "about" */ "../views/first_touch/Cards.vue")
  },
  {
    path: "/modals",
    name: "Modals",
    component: () => import(/* webpackChunkName: "about" */ "../views/first_touch/Modals.vue")
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import(/* webpackChunkName: "about" */ "../views/first_touch/Tasks.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
