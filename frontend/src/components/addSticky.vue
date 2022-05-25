<template>
<div>
<app-header></app-header>
<div class="stickyNoteHead"><h1>Add your personal notes here</h1></div>
<form v-on:submit="submitTacky">
<label><h2>Tag:</h2></label>
<h3 v-bind:style="{'font-family':'cursive','color':'#85CFCB','margin-top':'-5px'}"><input v-bind:style="{'float':'left','width':'40px'}"type="radio" v-model="Tag" v-bind:value="'#F55353'" name="stickyType" >personal</h3>
<h3 v-bind:style="{'font-family':'cursive','color':'#85CFCB','margin-top':'-5px'}"><input v-bind:style="{'float':'left','width':'40px'}"type="radio" v-model="Tag" v-bind:value="'#B9F8D3'" name="stickyType" >work</h3>
<h3 v-bind:style="{'font-family':'cursive','color':'#85CFCB','margin-top':'-5px'}"><input v-bind:style="{'float':'left','width':'40px'}"type="radio" v-model="Tag" v-bind:value="'#C8F2EF'" name="stickyType" >important</h3><br>
<label><h2>Tacky:</h2></label>
<textarea rows="8" cols="50" placeholder="Enter your tacky here" v-model="tacky"></textarea><br>
<input class="submit" type="submit" value="Add Tacky" >
</form>
</div>

</template>
<script>
import Header from "./Header.vue"

export default{
     data:function(){
        return {
            tacky:"",
            Tag:"red"
        }
    },
    components:{
        appHeader:Header
    },
    methods:{
        submitTacky(e){
            console.log(this.Tag)
            e.preventDefault()
            const response=fetch("http://localhost:3000/api/AddSticky",
            {
                method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({userId:localStorage.getItem("userId"),StickyNote:this.tacky,Tag:this.Tag})
            }
            )
            .then(data=>{
                console.log(data)
                this.$router.push({path:"/ReadSticky"})
            })
        }
        
    },
    mounted(){
            if(!localStorage.getItem("token")){
                alert("authentication required")
                this.$router.push({path:"/signup"})
            }
        }
}
</script>
<style scoped>
form{
    margin-left:50px
}
input{
    outline:none
}
textarea{
    outline:none;
    border:2px solid #A7D0CD;
    border-radius:5px;
    padding:10px 10px;
    font-family:cursive;
    color:#A7D0CD;
    font-size:15px;
}
label{
    color:#29C7AC;
    font-family:cursive
}
.stickyNoteHead{
    text-align:center;
    color:red;
    font-family:cursive;
    color:#A7D0CD
}
::placeholder{
    color:red;
    font-size:15px;
    font-family:cursive;
    color:#A7D0CD;
    padding:7px 10px;
}

.submit{
    width:200px;
    height:40px;
    border:2px solid #219897;
    border-radius:5px;
    background:white;
    color:#A7D0CD;
    font-family:cursive;
    margin-left:120px;
},
.stickyopt{

}
</style>