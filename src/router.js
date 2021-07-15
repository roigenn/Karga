import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Pages/Home.vue";
import CreateTeam from "./Pages/app/application-type.vue";
import CompetitionSlide from "./Pages/app/competition-slide.vue";
import ContestCategories from "./Pages/app/contest-categories";
import ContestInvitation from "./Pages/app/contest-invitation";

import LeftBlank from "./Pages/shared/LeftBlank.vue";
import Sidebar from "./Pages/shared/Sidebar.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "*",
      name: "catchAll",
      component: Home
    },
    {
      path: "/index.html",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      components: {
        leftBlank: LeftBlank,
        default: Home,
        sidebar: Sidebar
      }
    },
    {
      path: "/createTeam",
      name: "createTeam",
      components: {
        leftBlank: LeftBlank,
        default: CreateTeam,
        sidebar: Sidebar
      }
    },
    {
      path: "/competitionSlide",
      name: "competitionSlide",
      components: {
        leftBlank: LeftBlank,
        default: CompetitionSlide,
        sidebar: Sidebar
      }
    },
    {
      path: "/contestCategories",
      name: "contestCategories",
      components: {
        leftBlank: LeftBlank,
        default: ContestCategories,
        sidebar: Sidebar
      }
    },
    {
      path: "/contestInvitation",
      name: "contestInvitation",
      components: {
        leftBlank: LeftBlank,
        default: ContestInvitation,
        sidebar: Sidebar
      }
    }
  ],

  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
