Vue.component('list', {
    props: {
        model: {
            type: Array,
            default: () => []
        }
    },
    template: `
        <div class="list">
            <ul>
                <li v-for="item in model">
                    {{ item }}
                </li>
            </ul>
        </div> 
    `,
});