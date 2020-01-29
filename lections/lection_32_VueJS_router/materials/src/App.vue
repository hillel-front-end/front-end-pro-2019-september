<template>
  <div id="app">
    X: {{ x }}
    <br>
    x^2 {{ getUniqueX(x) }}
    <br>
    x^2 {{ getUniqueX(x) }}
    <br>
    special {{ getSpecialValue }}
    <br>
    special {{ getSpecialValue }}
    <button @click="ClickMe">Click me</button>
    {{temp}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      x: 10,
      y: 78,
      z: 56,
      temp: 0
    }
  },
  methods: {
    getUniqueX(value) {
      // eslint-disable-next-line no-console
      console.log('getUniqueX');
      return value*value - 23;
    },
    ClickMe() {
      this.temp = this.getSpecialValue;
    }
  },
  computed: {
    getSpecialValue() {
      // eslint-disable-next-line no-console
      console.log('getSpecialValue');
      return this.x - this.y*this.z;
    }
  },
  watch: {
    $route() {
      // eslint-disable-next-line no-console
      console.log(arguments);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
