import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Cartgory = () => import('../views/cartgory/Cartgory.vue')
 
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/shopcart',
        component:Shopcart
    },
    {
        path:"/cartgory",
        component:Cartgory
    }
]

const router = new VueRouter({
     routes,
})

export default router