<template>
    <div id="writeDiv">
        <h2>게시글 작성</h2>
        <form id="writeForm" @submit.prevent="write">
            <hr>
            <input type="text" name="title" class="title" placeholder="제목을 입력해주세요." v-model="title">
            <hr>
            <textarea name="content" class="content" placeholder="내용을 입력해주세요." v-model="content"></textarea>
            <div class="btns">
                <button>등록</button><button v-on:click="goList">취소</button>
            </div>
        </form>
    </div>
</template>

<script> 
    export default {
        data: function(){
            return {
                title:'',
                content:''
            }
        },
        methods : {
            goList(){
                this.$router.push({
                    path: '/board/list'
                });
            },
            write() {
                const board = {
                    title:this.title,
                    content:this.content
                }
                if(!this.title) {
                    alert("제목을 입력해주세요.");
                    return false;
                }
                if(!this.content) {
                    alert("내용을 입력해주세요.");
                    return false;
                }
                this.$axios.post(this.$serverUrl+"/board/write",board).then((res)=>{
                    this.goList();
                }).catch(error => {
                    let errorStatus = error.response.status;
                    alert(errorStatus+' : 오류가 발생했습니다 !!');
                });
            }
        }
    }
</script>

<style scoped>
    #writeDiv { width:1000px; margin:30px auto 0 auto;}
    .title,.content { display:block; width:98%; margin:auto;}
    hr { width:100% }
    .content { resize:none; height: 400px; }
    .btns { margin-top : 8px; }
    .btns button:last-child { margin-left:4px; }
</style>