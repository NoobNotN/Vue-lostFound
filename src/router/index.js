import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
  {
    path:'/',
    name:'indexPage',
    redirect:'/loginPage'
  },
  {
    path:'/loginPage',
    name:'loginPage',
    component:()=>import('../views/loginPage.vue')
  },
  {
    path: '/createUser',
    name: 'createUserPage',
    component: () => import('../views/createUserPage.vue')
  },
  {
    path:'/foundPage',
    name:'foundPage',
    component:()=>import('../views/mainPage.vue'),
    children:[
        {path:'/lostList',
         component:()=>import('../components/lostList.vue'),
        },
      {
        path: '/userPage',
        component:()=>import('../components/userPage.vue'),
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

// import store from '../store'
router.beforeEach((to,from,next)=>{
  if(to.path === '/loginPage' || to.path === '/createUser'){
    next();
  } else {
    let Token = localStorage.getItem('token');
    if (Token === null || Token === ''){
      next('/loginPage');
    } else {
      // let userID = localStorage.getItem('userID');
      // store.commit('setUserID', userID);
      next();
    }
  }
});

export default router
