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
                if (e.keyCode === 13 && this.content.length) {
                    this.content = this.content+'<br>';
                }
            },
            ...mapMutations([
                'sendMessage'
            ]),
            addelem(tag) {
                this.content = this.content + " <" +tag+">  "+"</"+tag+">";             
            }
        }
    };
</script>

<template>
    <div class="text">
        <div class="menubar">
            <button @click="addelem('b')" title="bold">B</button>
            <button @click="addelem('i')" title="italic">I</button>
            <button @click="addelem('u')" title="underline">U</button>
            <button @click="addelem('a')" title="link">A</button>
            <button @click="addelem('pre')" title="code">PRE</button>
            <button @click="addelem('q')" title="quote">Q</button>
        </div>
        <textarea placeholder="Ctrl + Enter" v-model="content" @keyup="onKeyup"></textarea>
    </div>
</template>

<style lang="less" scoped>
    .text {
        height: 160px;
        border-top: solid 2px #eee;
        textarea {
            padding: 10px;
            height: 90%;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            font-size: 14px;
            resize: none;
        }
        .menubar{
          background:#eee;
          padding:4px 10px;
          button {
            height: 10%;
            font-size:14px;
            border-radius:7px;
            background: #ccc;
            border:1px solid #444;
            font-weight: bold;
          }        
        }
    }
</style>