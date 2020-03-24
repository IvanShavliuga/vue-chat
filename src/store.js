import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: 'iv2',
            img: 'dist/images/1.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: 'vue.js',
                    img: 'dist/images/2.png'
                },
                messages: [
                    {
                        content: 'Hello, how you do?',
                        date: now
                    }, {
                        content: 'My project https://github.com/coffcer/vue-chat',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'webpack',
                    img: 'dist/images/3.jpg'
                },
                messages: []
            }
        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {
        initData(state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 发送消息
        sendMessage({sessions, currentSessionId}, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        selectSession(state, id) {
            state.currentSessionId = id;
        },
        // 搜索
        setFilterKey(state, value) {
            state.filterKey = value;
        }
    },
    getters: {
        // 当前会话 session
        session: ({sessions, currentSessionId}) => sessions.find(session => session.id === currentSessionId),
        // 过滤后的会话列表
        filteredSessions: ({sessions, filterKey}) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;