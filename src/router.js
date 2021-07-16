import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Pages/Home.vue";
import CreateTeam from "./Pages/app/application-type.vue";
import ApplicationReceived from "./Pages/app/application-received.vue";
import CompetitionSlide from "./Pages/app/competition-slide.vue";
import ContestCategories from "./Pages/app/contest-categories";
import ContestInvitation from "./Pages/app/contest-invitation";
import People1 from "./Pages/app/people1";
import People2 from "./Pages/app/people2";
import Portfolio from "./Pages/app/portfolio";
import SelfFuture from "./Pages/app/self-future";
import SelfFutureNotSolved from "./Pages/app/self-future-not-solved";
import TeamBuilding from "./Pages/app/team-building";
import Login from "./Pages/profile/login";
import ProfileEdit from "./Pages/profile/profile-edit";
import Profile from "./Pages/profile/profile";
import Signup from "./Pages/profile/signup";

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
    },
    {
      path: "/people1",
      name: "people1",
      components: {
        leftBlank: LeftBlank,
        default: People1,
        sidebar: Sidebar
      }
    },
    {
      path: "/people2",
      name: "people2",
      components: {
        leftBlank: LeftBlank,
        default: People2,
        sidebar: Sidebar
      }
    },
    {
      path: "/portfolio",
      name: "portfolio",
      components: {
        leftBlank: LeftBlank,
        default: Portfolio,
        sidebar: Sidebar
      }
    },
    {
      path: "/selfFuture",
      name: "selfFuture",
      components: {
        leftBlank: LeftBlank,
        default: SelfFuture,
        sidebar: Sidebar
      }
    },
    {
      path: "/selfFutureNotSolved",
      name: "selfFutureNotSolved",
      components: {
        leftBlank: LeftBlank,
        default: SelfFutureNotSolved,
        sidebar: Sidebar
      }
    },
    {
      path: "/teamBuilding",
      name: "teamBuilding",
      components: {
        leftBlank: LeftBlank,
        default: TeamBuilding,
        sidebar: Sidebar
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        leftBlank: null,
        default: Login,
        sidebar: null
      }
    },
    {
      path: "/profileEdit",
      name: "profileEdit",
      components: {
        leftBlank: LeftBlank,
        default: ProfileEdit,
        sidebar: Sidebar
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        leftBlank: LeftBlank,
        default: Profile,
        sidebar: Sidebar
      }
    },
    {
      path: "/signup",
      name: "signup",
      components: {
        leftBlank: null,
        default: Signup,
        sidebar: null
      }
    },
    {
      path: "/applicationReceived",
      name: "applicationReceived",
      components: {
        leftBlank: LeftBlank,
        default: ApplicationReceived,
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
