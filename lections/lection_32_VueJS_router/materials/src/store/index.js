/* eslint-disable no-console */

import Vuex from 'vuex';
import Vue from 'vue';

// constants

import {TITLE_APP, GET_TITLE} from './const';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 12,
        [TITLE_APP]: 'Hello Vuex'
    },
    mutations: {
        toUpperCase(state) {
            state[TITLE_APP] = state[TITLE_APP].toUpperCase();
        },
        addItem(state, payload) {
            // eslint-disable-next-line no-console
            console.log(payload)
            state[TITLE_APP] += ', ' + payload.value;
        },
        updateCount(state, payload) {
            if(!payload.value) {
                return;
            }
            state.count = payload.value
        }
    },
    actions: {
        titleExample({commit, dispatch}) {
            setTimeout(() => {
                commit('toUpperCase');

                dispatch({
                    type: 'updateCount',
                     value: 67
                })
            }, 2000);

            
        },
        updateCount({commit}, payload){
            commit({
                type: 'updateCount',
                value: payload.value
            })
        }
    },
    getters: {
        getCount(state) {
            return state.count*10;
        },
        [GET_TITLE](state) {
            return state[TITLE_APP];
        }
    }
})