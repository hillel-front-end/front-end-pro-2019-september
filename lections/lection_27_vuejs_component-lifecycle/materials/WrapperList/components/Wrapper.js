Vue.component('wrapper', {
    data() {
        return {
            superList: [
                'Hello',
                'World',
                '!'
            ]
        }
    },
    template: `
        <div class="wrapper">
            <list :model="superList"></list>
            <action-box :source="superList"></action-box>  
        </div> 
    `,
});