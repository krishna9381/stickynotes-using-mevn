<template>
    <div id="MainHeader">
    <div id="HeaderName" v-on:click="homepage"><h1>Tacky</h1></div>
    <ul>
    
    <li><h4 v-on:click="logout">{{auth}}</h4></li>
    <li><h4><div v-if="hasAccessToken" class="signup"><router-link class="headerContents" to="/signup" >signup</router-link></div></h4></li>
    <li><h4><router-link class="headerContents"to="/ReadSticky" >readTacky</router-link>  </h4></li>
    <li><h4><router-link class="headerContents"to="/AddSticky" >addTacky</router-link></h4></li>
    <li><h4><router-link class="headerContents"to="/about" >About</router-link></h4></li></ul>
    

    
    
    
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            auth:"signin",
            accessToken:true
        }
    },
    methods:{
        logout(){
        this.$router.push({path:"/signin"})
        localStorage.clear()
       // console.log(typeof(localStorage.getItem("access")))
            if(localStorage.getItem("access")=="1"){
            this.auth="logout"
            
            localStorage.setItem("access","0")
        }
        else if(localStorage.getItem("access")=="0"){
            this.auth="signin"
            // this.$router.push({path:"/signin"})
        }
        else{
            console.log("hello")
        }
        
           
            
        },
        homepage(){
            if(localStorage.getItem("access")=='true'){
                this.$router.push({path:"/"})
            }
            else{
                alert("authentication required")
            }
        }
    },
    mounted(){
        // console.log(localStorage.getItem("access")=='true')
        if(localStorage.getItem("access")=='true'){
            this.auth="logout"
            this.accessToken=false
        }
        else if(localStorage.getItem("access")=="false"){
            this.auth="signin"
            this.accessToken=true
        }
    },
    computed: {
        hasAccessToken(){
            return this.accessToken;
        }
    },
    }
   
</script>
<style>
#MainHeader{
    margin:25px;
    background-color:#069A8E;
    height:60px;
    border-radius:20px;
    padding-left:20px;
    padding-right:20px;
    text-align:center
}
#HeaderName{
    width:200px;
    float:left;
    margin-top:-15px;
    font-family:cursive;
    color:#A1E3D8
}
ul{
    list-style-type:none;
    margin:0;
    padding:0;
}
li{
    float:right;
    padding-right:10px;
    font-family:cursive;
    color:#A1E3D8
}
.headerContents{
    font-family:cursive;
    color:#A1E3D8;
    text-decoration:none
},
.signup{
   padding-top:50px;
   background-color:red
}
</style>