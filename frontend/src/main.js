import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from "./components/about.vue"
import AddSticky from "./components/AddSticky.vue"
import Homepage from "./components/Homepage.vue"
import Signup from "./components/signup.vue"
import Signin from "./components/signin.vue"
import ReadSticky from "./components/readsticky.vue"

Vue.use(VueRouter)

const routes=[
  {path:"/",component:Homepage},
  {path:"/signup",component:Signup},
  {path:"/signin",component:Signin},
  {path:"/about",component:About},
  {path:"/AddSticky",component:AddSticky},
  {path:"/ReadSticky",component:ReadSticky}
]

const router=new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
