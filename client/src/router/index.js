import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Home from '@/components/Home/Home';
import Blog from '@/components/Blog/Blog';
import DetailBlog from '@/components/Blog/DetailBlog';
import BlogAdmin from '@/components/Blog/BlogAdmin';
import BlogAdd from '@/components/Blog/BlogAdd';
import Admin from '@/components/Admin/Admin';
=======
import Home from '@/pages/Home';
import ContentHome from '@/layouts/ContentHome';
import ListPoster from '@/layouts/ListPoster';
>>>>>>> them blog

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      alias: '/home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'AllPoster',
          alias: '/home/all',
          component: ListPoster,
        },
        {
          path: '/home/buy',
          name: 'PosterForBuy',
          component: ListPoster,
        },
        {
          path: '/home/sell',
          name: 'PosterForSell',
          component: ListPoster,
        },
        {
          path: '/home/rent',
          name: 'PosterForRent',
          component: ListPoster,
        },
      ]
    },
<<<<<<< HEAD
    {
      path: '/rao-vat',
      name: 'Classified',
      component: Home,
    },
    {
      path: '/nhan-dinh',
      name: 'Blog',
      component: Blog,
      // children:[{
      //   path: '/chi-tiet/:titleBlog',
      //   component: DetailBlog
      // }]
    },
    {
      path: '/nhan-dinh/:titleBlog',
      name: 'DetailBlog',
      component: DetailBlog,
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
=======
  
>>>>>>> them blog
  ],
  mode: 'history',
});
