<template>
<div>

<app-header></app-header>
<div>
<div class="homeLeft">the new tacky is<br><span v-bind:style="{'color':'red'}">Here</span></div>
<div class="homeRight">
<img class="homepagePic"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OUDwdtS2S5JD7ogaeDANFsu56E_YE5u1ug&usqp=CAU">
</div>
</div>
</div>

</template>
<script>
import Header from "./Header.vue"

export default{
    components:{
        appHeader:Header
    },
    mounted(){
        if(!localStorage.getItem("token")){
            this.$router.push({path:"/signup"})
        }
    }
}
</script>
<style>

.homeLeft{
   width:40%;
   height:400px;
   float:left;
   padding:30px;
   margin-left:35px;
   font-family:cursive;
   color:#A7D0CD;
   font-size:50px
}
.homeRight{
    width:40%;
    height:400px;
    float:right;
    padding:30px;
    margin-right:-18px;
}
.homepagePic{
    width:450px;
    height:400px
}
</style>