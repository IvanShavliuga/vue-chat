<script>
    import {mapMutations} from 'vuex';
    export default {
        data() {
            return {
                content: '',
                error:false,
                errortext:""
            };
        },
        methods: {
            onKeyup(e) {
                if(this.content.length) {
                    this.error=false;                  
                }
                if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                    if(this.content.match(/<input/)||
                       this.content.match(/<textarea/)||
                       this.content.match(/<frame/)||
                       this.content.match(/<form/)||
                       this.content.match(/<canvas/)||
                       this.content.match(/<label/)||
                       this.content.match(/<image/)||
                       this.content.match(/<audio/)||
                       this.content.match(/<video/)||
                       this.content.match(/<iframe/)||
                       this.content.match(/<button/)||
                       this.content.match(/<script/)) {
                       this.errortext="invalid tag";
                       this.error=true; 
                       this.content="";                   
                    }else{
                       this.sendMessage(this.content);
                       this.content = '';
                    }
                }
                if (e.keyCode === 13 && this.content.length && !this.error) {
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
            <button @click="addelem('table')" title="table">TABLE</button>
            <button @click="addelem('tr')" title="table row">TR</button>
            <button @click="addelem('th')" title="table row header">TH</button>
            <button @click="addelem('td')" title="table cell">TD</button>
            <button @click="addelem('ul')" title="unsorted list">UL</button>
            <button @click="addelem('li')" title="list item">LI</button>
            <span class="error" v-if="error"><br>Error: {{errortext}}</span>
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
          .error{
            color:red;
            font-weight:bold;
            font-size:16px;
            margin-left:10px;           
          }        
        }
    }
</style>