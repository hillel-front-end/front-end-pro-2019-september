Vue.component('front-end', {
    // props: ['example', 'numbers'],
    props: {
        example: {
            type: [Number, String]
        },
        numbers: {
            type: Array,
            default: [6, 9, 0]
        },
        third: {
            type: Boolean,
            default: true
        }
    },
    data(){ 
        return {
            title: "Hello Front end!"
        }
    },
    methods: {
        onClick() {
            this.title += "!"
        },
        Remove(key) {
            this.numbers.splice(key, 1);
        }
    },
    template: `
        <div class="example">
            <h2>{{title}}</h2>
            <h3>{{example}}</h3>
            <button @click="onClick">Click</button> 
            <input type="text" v-model="example">
            <hr>
            <ol>
                <li v-for="(item, key) in numbers" @click="Remove(key)">
                    Item {{item}}
                </li>
            </ol>
        </div>
    `,
    mounted() {
        console.log(this);
    }
});

Vue.component('front-button', {
    props: ['type', 'text', 'onClick'],
    methods: {
        onEventClick() {
            this.onClick && this.onClick();
        }
    },
    template: `
        <button class="button" :class="type" @click="onEventClick">
            {{ text }}
        </button> 
    `,
    mounted() {
        console.log(this);
    }
});

let app = new Vue({
    el: '.app',
    data: {
        x: 10,
        title: 'Hello world!',
        checker: false,
        exampleApp: 'Hello Front End!',
        list: [1, 6, 7, 8, 9]
    },
    methods: {
        onClickFrontBtnPrimary() {
            console.log('onClickFrontBtnPrimary');
        },
        onAddToCart() {
            console.log('add to cart');

            console.log('POST', this.list);
        }
    },
    beforeMount(){
        // debugger;
    }
});
