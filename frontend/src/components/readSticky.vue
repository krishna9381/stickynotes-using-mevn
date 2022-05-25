<template>
<div>
<app-header></app-header>
<div class="stickyNoteHead"><h1>your personal notes here</h1></div>
<draggable :list="tackies"><div class="readTacky"  v-for="tacky in tackies" ><div v-on:click="deleteTacky(tacky._id)" v-bind:style="{'float':'right'}"><img src="https://img.icons8.com/stickers/18/000000/filled-trash.png"/></div><div v-bind:style="{'width':'auto'}">{{tacky.StickyNote}}</div><div class="imp" v-bind:style="{'background':tacky.Tag}"></div></div></draggable>

</div>

</template>
<script>

import Header from "./Header.vue"
import draggable from 'vuedraggable'
export default{
    data:function(){
        return {
            tackies:[]
            
        }
    },
    components:{
        appHeader:Header,
        draggable
    },
    methods:{
        getTacky(e){
            // e.preventDefault()
            const response=fetch("http://localhost:3000/api/getSticky",{
                method:"POST",
                headers:{
                     'content-type':'application/json'
                },
                body:JSON.stringify({ userId:localStorage.getItem("userId") })
            })
            .then(response=>response.json())
            .then(tacky=>{
                console.log(tacky.msg[0])
                this.tackies=tacky.msg
                console.log(this.tackies)


            })
            
           
        },
    del(id){
        alert(id)
    },
    deleteTacky(id){
        const response=fetch("http://localhost:3000/api/deleteSticky",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({_id:id})
        })
        .then(response=>response.json())
        .then(data=>{console.log(data)
        this.getTacky()})
    }
    },
    mounted() {

if(!localStorage.getItem("token")){
                alert("authentication required")
                this.$router.push({path:"/signup"})
            }


         const response=fetch("http://localhost:3000/api/getSticky",{
                method:"POST",
                headers:{
                     'content-type':'application/json'
                },
                body:JSON.stringify({ userId:localStorage.getItem("userId") })
            })
            .then(response=>response.json())
            .then(tacky=>{
                console.log(tacky.msg[0])
                this.tackies=tacky.msg
                console.log(this.tackies)


            })
    }
}

</script>
<style>

.readTacky{
    width:200px;
    height:200px;
    border:3px solid #7CD1B8;
    border-radius:5px;
    padding:10px;
    margin-left:30px;
    color:#11468F;
    margin-bottom:20px;
    margin-top:5px;
    font-family:cursive;
    word-break: break-all;

}

.imp{
    float:right;
    width:40px;
    height:20px;
    border:1px solid green;
    background:red;
    position:relative;
    bottom:-77%;
    right:-4%;
}
.stickyNoteHead{
    text-align:center;
    color:red;
    font-family:cursive;
    color:#A7D0CD
}

</style>