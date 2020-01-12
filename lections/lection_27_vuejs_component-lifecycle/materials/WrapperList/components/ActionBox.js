Vue.component('action-box', {
    props: {
        source: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            checker: false,
            text: '',
            showWindow: false
        }
    },
    methods: {
        onClick() {
           if(this.checker) {
               this.source.push(this.text)
           } else
           this.source.unshift(this.text)
           
          this.resetConfigs(); 
        },
        onOpen() {
            this.showWindow = true;
        },
        resetConfigs() {
            this.text = '';
            this.showWindow = false;
            this.checker = false;
        }
    },
    template: `
        <div class="action-box">
            <div v-if="showWindow">
                <input type="checkbox" v-model="checker" />
                <input type="text" v-model="text" />
                <button @click="onClick">Add</button>
            </div>
            
            <button @click="onOpen">Open</button>
        </div> 
    `,
});