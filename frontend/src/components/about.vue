<template>
<div>

<app-header></app-header>
<div class="stickyNoteHead"><h1>Tacky</h1></div>
<h4>This is tacky you can write your own notes here</h4>
</div>

</template>
<script>
import Header from "./Header.vue"

export default{
    components:{
        appHeader:Header
    }
}
</script>
<style>
h4{
    color:#069A8E;
    margin-left:40px;
    font-family:cursive
}
.stickyNoteHead{
    text-align:center;
    color:red;
    font-family:cursive;
    color:#A7D0CD
}
</style>