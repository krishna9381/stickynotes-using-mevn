<template >
<div >
<app-header></app-header>
<div id="Signupbg">
<img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user--v1.png"/>
<form v-on:submit="signin" >
<h1  v-bind:style="{'text-align':'center','font-family':'cursive','color':'#3E8E7E'}">signin</h1><br>

<input v-bind:style="{'width':'250px'}" type="text" v-model="Username" placeholder="Username"><br><br>
<input v-bind:style="{'width':'250px'}" type="password" v-model="Password" placeholder="Password"><br><br>
<div ><input v-bind:style="{'width':'150px','text-align':'center','margin-left':'55px'}" class="submit"type="submit"></div><br><br>
<!--already have an account?<h4 v-on:click="pra">Signin</h4>-->
</form></div>



</div>

</template>
<script>

import Header from "./Header.vue"
export default{
    data:function(){
        return {
            Username:"",
            Password:""
        }
    },
components:{
    appHeader:Header
},
methods:{
    //  beforeMount(){
    //     this.$router.push({path:"/about"})
    // },
    signin(e){
        e.preventDefault()
        const response=fetch("http://localhost:3000/api/signin",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({username:this.Username,password:this.Password})
        })
        .then(response=>response.json())
        .then(data=>{console.log(data.msg._id)
        if(data.access===1){
            localStorage.setItem("access",true)
            localStorage.setItem("userId",data.msg._id)
            localStorage.setItem("token",data.token)
        this.$router.push({path:"/"})}
        else{
            alert(data.msg)
            localStorage.setItem("access",false)
            this.$router.push({path:"/signin"})
        }})

    },
   
    // red(){
    //     this.$router.push({path:"/about"})
    // }
}
}
</script>
<style scoped>
#Signupbg{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column
}


#form{
    background-color:red;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:500px;
    margin:auto;
    padding:50px;
    padding-top:10px;
    padding-bottom:10px;
}

input{
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:3px solid #39A6A3;
    height:30px;
    outline:none;
    font-size:20px;
    color: #7CD1B8;
    font-family:cursive;
    background:white
}

::placeholder { 
  color: #7CD1B8;
  opacity: 1; 
  font-family:cursive;
  font-size:20px;
  padding:5px;
}

.submit{
    border:3px solid #39A6A3;
    border-radius:5px;
    width:200px;
    height:40px;

}
</style>