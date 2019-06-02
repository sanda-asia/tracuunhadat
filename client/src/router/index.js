import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Blog from '@/components/Blog/Blog';
import DetailBlog from '@/components/Blog/DetailBlog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
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
  ],
  mode: 'history',
});
