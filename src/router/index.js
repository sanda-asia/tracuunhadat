import Vue from 'vue';
import Router from 'vue-router';
import Blog from '@/pages/Blog/Blog';
import DetailBlog from '@/pages/Blog/DetailBlog';
import BlogAdmin from '@/pages/Blog/BlogAdmin';
import BlogAdd from '@/pages/Blog/BlogAdd';
import Admin from '@/pages/Admin/Admin';
import ClassifiedAdmin from '@/pages/Admin/ClassifiedAdmin'
import AddClassified from '@/pages/AddClassified';
import Home from '@/pages/Home';
import User from '@/pages/User';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // children: [
      //   {
      //     path: '/',
      //     name: 'AllPoster',
      //     alias: '/home/all',
      //     component: ListPoster,
      //   },
      //   {
      //     path: '/home/buy',
      //     name: 'PosterForBuy',
      //     component: ListPoster,
      //   },
      //   {
      //     path: '/home/sell',
      //     name: 'PosterForSell',
      //     component: ListPoster,
      //   },
      //   {
      //     path: '/home/rent',
      //     name: 'PosterForRent',
      //     component: ListPoster,
      //   },
      // ]
    },
    {
      path:'/rao-vat',
      name : 'Classified',
      component: Home,
    },
    {
      path:'/admin/rao-vat',
      name : 'ClassifiedAdmin',
      component: ClassifiedAdmin,
    },
    {
      path: '/nhan-dinh',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/nhan-dinh/:titleBlog',
      name: 'DetailBlog',
      component: DetailBlog,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
    },
    {
      path: '/user/:id/dang-tin',
      name: 'AddClassified',
      component: AddClassified,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/admin/blog',
      name: 'BlogAdmin',
      component: BlogAdmin,
    },
    {
      path: '/admin/blog/add',
      name: 'BlogAdd',
      component: BlogAdd,
    },
  ],
  mode: 'history',
});
