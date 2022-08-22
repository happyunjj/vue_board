<template>
    <div id="writeDiv">
        <h2>게시글 작성</h2>
        <form id="writeForm" @submit.prevent="write">
            <input type="text" name="title" class="title" placeholder="제목을 입력해주세요." v-model="title">
            <textarea name="content" class="content" placeholder="내용을 입력해주세요." v-model="content"></textarea>
            <div>
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
                    path: './list'
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
                })
            }
        }
    }
</script>

<style scoped>
    #writeDiv { width:1000px; margin:30px auto 0 auto;}
    .title,.content { display:block; width:100%;}
    .content { resize:none; }
</style>