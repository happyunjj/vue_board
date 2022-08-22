<template>
    <header>
        <h1><router-link to="/" class="logo"><img alt="LOGO" src="../../assets/logo.png" width="80"></router-link></h1>
        <div class = "nav">
            <ul class = "menu">
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/board/list">게시판</router-link></li>
            </ul>
            <router-link to="/board/bookmark" class="bookmark">즐겨찾기</router-link>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    header {width:100%; text-align:center; position:relative; height:120px;}
    header h1 {position:absolute; top:0px; left:100px;}
    header ul.menu:after {display:block; clear:both; content:'';}
    header ul.menu {position:absolute; top:30px; left:200px;}
    header ul.menu li {display:inline-block; margin-right:30px; list-style:none;}
    a {text-decoration:none; color:#333;}
    .bookmark {position:absolute; top:40px; right:40px;}
</style>

