<script>
    import {mapGetters, mapState} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'session'
            ]),
            ...mapState([
                'user'
            ])
        },
        filters: {
            time(date) {
                if (typeof date === 'string') {
                    date = new Date(date);
                }
                return date.getHours() + ':' + date.getMinutes();
            }
        },
        directives: {
            'scroll-bottom': {
                componentUpdated: function (el, binding, vnode) {
                    el.scrollTop = el.scrollHeight - el.clientHeight;
                }
            }
        }
    };
</script>

<template>
    <div class="message" v-scroll-bottom>
        <ul v-if="session">
            <li v-for="item in session.messages">
                <p class="time">
                    <span>{{ item.date | time }}</span>
                </p>
                <div class="main" :class="{ self: item.self }">
                    <img class="avatar" width="30" height="30" :src="item.self ? user.img : session.user.img"/>
                    <div class="text">{{ item.content }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    .message {
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
        
        li {
            margin-bottom: 15px;
        }
        .time {
            margin: 7px 0;
            text-align: center;
            > span {
                display: inline-block;
                padding: 0 18px;
                font-size: 15px;
                font-weight: bold;
                color: #fff;
                border-radius: 18px;
                background-color: #ccc;
            }
        }
        .avatar {
            float: left;
            margin: 0 10px 0 0;
            border-radius: 50%;
            
        }
        .text {
            display: inline-block;
            position: relative;
            padding: 0 10px;
            max-width: ~'calc(100% - 40px)';
            min-height: 30px;
            line-height: 2.5;
            font-size: 12px;
            text-align: left;
            word-break: break-all;
            background-color: #fafafa;
            border-radius: 12px;
            &:before {
                content: " ";
                position: absolute;
                top: 9px;
                right: 100%;
                border: 6px solid transparent;
                border-right-color: #fafafa;
            }
        }
        .self {
            text-align: right;
            .avatar {
                float: right;
                margin: 0 0 0 10px;
            }
            .text {
                background-color: #b2e281;
                &:before {
                    right: inherit;
                    left: 100%;
                    border-right-color: transparent;
                    border-left-color: #b2e281;
                }
            }
        }
    }
    </style>