<script>
import { actions } from './store';
import {mapMutations} from 'vuex';

import Card from 'components/card';
import List from 'components/list';
import TextInput from 'components/text';
import Message from 'components/message';
import Signin from 'components/signin';

    export default {
        components: {Card, List, TextInput, Message, Signin},
        methods: mapMutations([
            'initData',
        ]),
        data() {
            return {
                signinflag:false            
            }
        }/*,
        created() {
            this.initData();
        }*/
    };
</script>

<template>
<div id="app">
    <div class="body" v-if="!signinflag">
        <signin></signin>
    </div>
    <div class="sidebar" v-else>
        <card></card>
        <list></list>
    </div>
    <div class="main" v-else>
        
        <message></message>
        <text-input></text-input>         
    </div>
</div>
</template>

<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background: url('/dist/images/background.JPG');
        background-size: cover;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
</style>
