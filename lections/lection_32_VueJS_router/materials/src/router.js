import VueRouter from 'vue-router'
import Vue from 'vue';
import Example from './components/Example';
import ExampleRouterEntry from './components/ExampleRouterEntry';
import User from './components/User';
import Main from './components/Main';
import HelloWorld from './components/HelloWorld';
import ModuleRouter from './module/router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/example',
        component: ExampleRouterEntry,
        children: [
            {
                path: '',
                component: Example
            },
            {
                path: 'test',
                name: 'super-puper',
                component: HelloWorld
            }
        ]
    },
    {
        path: '/user/:userId',
        component: User
    },
    ModuleRouter
];

export default new VueRouter({routes});