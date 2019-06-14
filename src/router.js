import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import BlogDetail from "./views/BlogDetail.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Admin from "./views/Admin.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/rao-vat",
      name: "classified",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
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
    }
    
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
