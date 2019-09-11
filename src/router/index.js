import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//定义能够被webpack自动代码分割的异步组件 实现路由懒加载
//封装一个函数
function loadView(view) {
  return () => import(/* webpackChunkName: "work" */ `@/components/${view}/index.vue`)
}

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: loadView('home')
    },
    {
      path: '/money',
      name: 'money',
      component: loadView('money')
    },
    {
      path: '/save_money',
      name: 'save_money',
      component: loadView('save_money')
    },
    {
      path: '/borrow_money',
      name: 'borrow_money',
      component: loadView('borrow_money')
    },
    {
      path: '/mine',
      name: 'mine',
      component: loadView('mine')
    }
  ]
})
