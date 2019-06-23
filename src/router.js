import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import BlogDetail from "./views/BlogDetail.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Admin from "./views/Admin.vue";
import Login from "./views/Login.vue";
import AddClassified from "./views/AddClassified.vue";
import Project from "./views/Project.vue";
import Agent from "./views/Agent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter }
    },
    {
      path: "/query/:tab",
      name: "FillByTab",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/rao-vat",
      name: "classified",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/du-an",
      name: "project",
      components: { default: Project, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/danh-ba",
      name: "agent",
      components: { default: Agent, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/nhan-dinh",
      name: "blog",
      components: { default: Blog, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/nhan-dinh/:title",
      name: "blogDetail",
      components: { default: BlogDetail, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/admin",
      name: "admin",
      components: { default: Admin, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/profile/:id",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/add/:idUser",
      name: "addClassified",
      components: { default: AddClassified, header: MainNavbar, footer: MainFooter },
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: 'history',
});
