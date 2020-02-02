<template>
  <div id="app">
    <h3>
      <!-- {{ $store.state.title }} -->
      {{ getTitle }}
    </h3>
    <h3>
      {{ getCount }}
    </h3>
    <button @click="clickUpperCase">UpperCase</button>
    <button @click="addItem">Add Item</button>


    <hr>
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
import { mapGetters, mapActions } from 'vuex';
import {
  GET_TITLE
} from './store/const';

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      x: 10,
      y: 78,
      z: 56,
      temp: 0,
      commit: this.$store.commit
    }
  },
  methods: {
    ...mapActions(['titleExample']),
    getUniqueX(value) {
      return value*value - 23;
    },
    ClickMe() {
      this.temp = this.getSpecialValue;
    },
    clickUpperCase() {
      this.commit('toUpperCase');
    },
    addItem() {
      // this.commit('addItem', {value: 100500, options: {x: 10, y: 20}});
      // this.commit({
      //   type: 'addItem',
      //   x: 10,
      //   value: 100500,
      //   zz: 'hello zz'
      // });

      // this.$store.dispatch('titleExample');
      // this.$store.dispatch({
      //   type: 'updateCount',
      //   value: 67
      // });

      this.titleExample();
    }
  },
  computed: {
    ...mapGetters(['getCount']),
    ...mapGetters({
      getTitle: GET_TITLE
    }),
    getSpecialValue() {
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
