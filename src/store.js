import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        user: {
            name: 'iv2',
            password:"12345",
            status:false,
            img: 'dist/images/1.jpg'
        },
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
                        content: 'My project https://github.com/IvanShavliuga/vue-chat',
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
            },
            {
                id: 3,
                user: {
                    name: 'Web.agent',
                    img: 'dist/images/2.png'
                },
                messages: [
                    {
                        content: 'This is test?',
                        date: now
                    }
                ]
            },
            {
                id: 4,
                user: {
                    name: 'Ann',
                    img: 'dist/images/2.png'
                },
                messages: [
                    {
                        content: 'Test string',
                        date: now
                    }
                ]
            },
            {
                id: 5,
                user: {
                    name: 'Angel',
                    img: 'dist/images/2.png'
                },
                messages: [
                    {
                        content: 'Test string',
                        date: now
                    }
                ]
            }
        ],
        currentSessionId: 1,
        filterKey: ''
    },
    mutations: {
        initData(state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        sendMessage({sessions, currentSessionId}, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        selectSession(state, id) {
            state.currentSessionId = id;
        },
        setFilterKey(state, value) {
            state.filterKey = value;
        },
        signin(state,usr) {
        	   console.log(usr.name)
        	   console.log(usr.password)
            if(state.user.name===usr.name&&state.user.password===usr.password) {
                state.user.status=true;	
                usr.status=true;
            }        
        }
    },
    getters: {
        session: ({sessions, currentSessionId}) => sessions.find(session => session.id === currentSessionId),
        filteredSessions: ({sessions, filterKey}) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
        },
        status: ({user}) => user.status
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
