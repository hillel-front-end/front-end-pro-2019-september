<template>
    <div>
        <div v-for="(input, index) in list" :key="input">
            <input 
                type="text" 
                :value="input"
                @input="onInput($event, index)"
                >
        </div>
       {{list}}

       <input
        id="super-title"
        ref="super-title-ref"
        type="text" 
        :value="title"
        @input="onInputTitle">
    </div>
</template>

<script>
export default {
    props: ["list", "title"],
    methods: {
        onInput(event, index) {
            this.$emit('test-example-super', {
                index: index,
                value: event.target.value
            });
        },
        onInputTitle(event) {
            this.$emit('title-update', {
                value: event.target.value
            });
        }
    },
    created() {
        setInterval(() => {
            this.$emit('title-update', {
                value: this.$refs['super-title-ref'].value
            });
        },1000);
    }
}
</script>

<style>

</style>
