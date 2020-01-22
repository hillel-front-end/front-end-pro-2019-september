<template>
    <div>
        <h3>{{title}}</h3>

    <!-- React -> this.children -->
    <!-- AngularJS -> transclude -->
    <!-- Angular2-8 -> ng-content -->
    <!-- VueJS -> slots -->
        <input type="text" v-model="slotName">
        <slot :name="slotName"></slot>
        <input type="checkbox" v-model="isSLotVisible">
        <!-- <slot name="default"></slot>
        <hr>
        <slot name="super-puper"></slot> -->
    </div>
</template>
<script>
export default {
    props: ["title", "template"],
    data() {
        return {
            slotName: '',
            isSLotVisible: true,
            list: [8,89,5,75,67567,567]
        }
    },
    created() {
        console.log(this);
        setTimeout(() => {
            this.$emit('event-example', Math.random());
        }, 2000)
    }
}
</script>
<style>

</style>