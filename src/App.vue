<script>
import { actions } from './store';
import {mapMutations,mapGetters,mapState} from 'vuex';

import Card from 'components/card';
import List from 'components/list';
import TextInput from 'components/text';
import Message from 'components/message';
import Signin from 'components/signin';

    export default {
        components: {Card, List, TextInput, Message, Signin},
        data() {
            return {
                signinflag:false            
            }
        },
        computed: {
            ...mapState([
                'user',
            ]),
            ...mapGetters([
                'status'
            ])
        },
        /*,
        created() {
            this.initData();
        }*/
    };
</script>

<template>
<div id="app">
    <div class="body" v-if="!user.status">
        <signin></signin>
    </div>
    <div class="sidebar" v-if="user.status">
        <card></card>
        <list></list>
    </div>
    <div class="main" v-if="user.status">        
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
