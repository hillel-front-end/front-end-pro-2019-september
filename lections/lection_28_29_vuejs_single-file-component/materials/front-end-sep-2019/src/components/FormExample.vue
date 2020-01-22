<template>
    <div @contextmenu.prevent="handlerClick('WRAPPER')">
        <input type="text" v-model.lazy="text"> {{text}}
        <hr > 
        <input type="checkbox" value="Ex1" v-model="checkboxList">
        <input type="checkbox"  value="Ex2" v-model="checkboxList">
        <input type="checkbox"  value="Ex3" v-model="checkboxList">
        {{checkboxList}}
        <hr > 
        <input type="radio" name="radios" value="r1" v-model="radio">
        <input type="radio" name="radios" value="r2" v-model="radio">
        {{radio}}
        <hr >
        <select name="some" id="some" v-model="select" multiple>
            <option value="var_1">Variant 1</option>
            <option value="var_2">Variant 2</option>
            <option value="var_3">Variant 3</option>
            <option value="var_4">Variant 4</option>
        </select>
        {{select}}
        <hr>
        <input type="number" v-model.number="number">{{ number + 1000}}
        <hr>
        <input type="text" v-model.lazy.number="text">{{ text + 105 }}
        <hr>
        <button @contextmenu.prevent.stop="handlerClick">Click me</button>
        <hr>
        <button @click.once="handlerClick">Click me</button>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            text: '',
            checkbox: false,
            checkboxList: [],
            radio: false,
            select: [],
            number: 0
        }
    },
    methods: {
        handlerClick(text) {
            console.log('click me', text)
        }
    }
}
</script>

<style>
</style>
