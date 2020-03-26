<script>
    import {mapMutations} from 'vuex';
    export default {
        data() {
            return {
                content: ''
            };
        },
        methods: {
            onKeyup(e) {
                if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                    this.sendMessage(this.content);
                    this.content = '';
                }
            },
            ...mapMutations([
                'sendMessage'
            ])
        }
    };
</script>

<template>
    <div class="text">
        <textarea placeholder="Ctrl + Enter" v-model="content" @keyup="onKeyup"></textarea>
    </div>
</template>

<style lang="less" scoped>
    .text {
        height: 160px;
        border-top: solid 2px #eee;
        textarea {
            padding: 10px;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            resize: none;
        }
    }
</style>