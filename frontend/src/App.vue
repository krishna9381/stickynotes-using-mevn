<template >
  <div id="app_div">
   <!-- <app-header></app-header>-->
 <!--<app-homepage></app-homepage>-->
  <!-- <app-addsticky></app-addsticky>-->
   <!--<appAbout></appAbout>-->
 <!--<appReadsticky></appReadsticky>-->
   <!--<Signup></Signup>-->
  <!--  <Signin></Signin>-->
  <router-view></router-view>
  
    
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Homepage from "./components/Homepage.vue"
import AddSticky from "./components/addSticky.vue"
import About from "./components/about.vue"
import readSticky from "./components/readSticky.vue"
import signin from "./components/signin.vue"
import signup from "./components/signup.vue"
import registrationHeader from "./components/registrationHeader.vue"

export default {
  name: 'app_div',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader:Header,
    appHomepage:Homepage,
    appAddsticky:AddSticky,
    appAbout:About,
    appReadsticky:readSticky,
    Signup:signup,
    Signin:signin,
    regHeader:registrationHeader
  }
}
</script>

<style>

</style>
