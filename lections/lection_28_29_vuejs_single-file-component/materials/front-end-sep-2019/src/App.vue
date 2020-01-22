<template>
  <div
  
  
  
  
   id="app">
    <!-- <h2>
      {{title}}
    </h2>
    <ul>
      <li v-for="(item, index) in list" :key="item" @click="onClickRemove(index)">
        {{ item }}
      </li>
    </ul>
    <Example 
      :list="list"
       @test-example-super="onSomethingChangeInList"
       :title="title"
       @title-update="onTitleUpdate"
    ></Example> -->
    <!-- <hr>
    <FormExample></FormExample> -->
    <hr>
    <SlotExample 
      :title="'Slot example'"
      @event-example="onEventHandler"
    >
        Unique text
        <p>Paragraph</p>
        <input type="checkbox" v-model="isVisible">
        <p v-if="isVisible"> {{list}} </p>
        <!-- <FormExample></FormExample> -->
        <template v-slot:super-puper>
          Super unique text
        </template>
       

        UNDER SUPER TEXT
    </SlotExample>
  </div>
</template>

<script>
import Example from './components/Example';
import FormExample from './components/FormExample';
import SlotExample from './components/SlotExample';

export default {
  name: 'app',
  components: {
    // Example,
    // FormExample,
    SlotExample
  },
  data() {
    return {
      isVisible: false,
      list: [1, 2, 3, 4],
      title: 'Hello world'
    }
  },
  methods: {
    onClickRemove(position) {
      this.list.splice(position, 1);
    },
    onSomethingChangeInList(data) {
      this.$set(this.list, data.index, data.value)
    },
    onTitleUpdate({ value }) {
      this.title = value;
    },
    onEventHandler(args) {
      console.log('args', args);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
