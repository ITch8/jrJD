import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Money from '@/components/money/index.vue'
import SaveMoney from '@/components/save_money/index.vue'
import BorrowMoney from '@/components/borrow_money/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/money',
      name:'money',
      component:Money
    },
    {
      path:'/save_money',
      name:'save_money',
      component:SaveMoney
    },
    {
      path:'/borrow_money',
      name:'borrow_money',
      component:BorrowMoney
    }
  ]
})
