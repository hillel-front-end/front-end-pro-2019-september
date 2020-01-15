<template>
  <div id="app">
    <h2>
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
    ></Example>
  </div>
</template>

<script>
import Example from './components/Example';

export default {
  name: 'app',
  components: {
    Example
  },
  data() {
    return {
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
