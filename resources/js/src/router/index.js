import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';

import layout from '../layout'
import publik from '../public'
import { store } from '../store'

Vue.use(Router)
Vue.use(VueAxios, axios);

let router = new Router({
  mode: 'history',
  base: '/', 
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

/*Проверка роли, если нет прав то редирект
router.beforeEach((to, from, next) => {
  let roles = localStorage.getItem("roles");
  if (roles != null) {
    roles = roles.split(',')
  }
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (roles != null && roles.indexOf('admin') >= 0) {
      next()
    } else {
      next({
        path: '/auth-pages/login',
        params: { nextUrl: to.fullPath }
      })
    }
  } else if (to.matched.some(record => record.meta.requiresUser)) {
    if (roles != null && roles.indexOf('user') >= 0) {
      next()
    } else {
      next({
        path: '/auth-pages/login',
        params: { nextUrl: to.fullPath }
      })
    }
  } else {
    next()
  }
});
*/
router.beforeEach((to, from, next) => {
  if (!to.meta.authRequired) {
    next();
  } else if (store.getters["authenticated"]) {   
    next();
  } else {
    next({
      path: '/auth-pages/login',
      params: { nextUrl: to.fullPath }
    });
  }
});

//
export default router
function configRoutes() {
  return [
    {
      path: '/',

      component: layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard'),
          meta: {
            authRequired: true
          }
        }
      ]
    },
    {
      path: '/public',
      component: publik,
      children: [
        {
          path: 'refrigerator',
          name: 'public-refrigerator',
          component: () => import('@/pages/product/public/refrigerator'),
        },
      ]
    },
    {
      path: '/product',
      component: layout,
      children: [
        {
          path: 'refrigerator',
          name: 'product-refrigerator',
          component: () => import('@/pages/product/refrigerator'),
          meta: {
            authRequired: true
          }
        },
        {
          path: 'washmashine',
          name: 'product-washmashine',
          component: () => import('@/pages/product/washmasine'),
          meta: {
            authRequired: true
          }
        },
        {
          path: 'tv32',
          name: 'tv32',
          component: () => import('@/pages/product/tv32'),
          meta: {
            authRequired: true
          }
        },
        {
          path: 'tv40',
          name: 'tv40',
          component: () => import('@/pages/product/tv40'),
          meta: {
            authRequired: true
          }
        },
        {
          path: 'tv50',
          name: 'tv50',
          component: () => import('@/pages/product/tv50'),
          meta: {
            authRequired: true
          }
        },
      ]
    },
    {
      path: '/category',
      component: layout,
      children: [
        {
          path: 'create',
          name: 'category-create',
          component: () => import('@/pages/category/create'),
          meta: {
            authRequired: true
          }
        },
      ]
    },
    {
      path: '/auth-pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'login',
          hideForAuth: true,
          component: () => import('@/pages/samples/auth-pages/login')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/samples/auth-pages/register')
        }
      ]
    },
    {
      path: '/error-pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'error-404',
          name: 'error-404',
          component: () => import('@/pages/samples/error-pages/error-404')
        },
        {
          path: 'error-500',
          name: 'error-500',
          component: () => import('@/pages/samples/error-pages/error-500')
        }
      ]
    },
    {
      path: '*',
      redirect: '/error-404',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'error-404',
          component: () => import('@/pages/samples/error-pages/error-404')
        }
      ]
    }
  ]
}
router.onError(error => {
  console.error('Failure Reason: ', error);
  if (/ChunkLoadError:.*failed./i.test(error.message)) {
    window.location.reload();
  }
});
