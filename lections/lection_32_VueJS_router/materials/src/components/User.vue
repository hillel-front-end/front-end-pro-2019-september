<template>
  <div class="example">
    <h1>User</h1>
    <h3>
      {{ $route.params.userId }}
    </h3>
    <router-link to="/">Go</router-link>
    <button @click="goHome(78)">
      Click go to home
    </button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
  },
  data() {
    return {

    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    goHome(userID = 120) {
      // this.$router.push('/example/test');
      // this.$router.go(-1);
      // this.$router.push(`/user/${userID}`);
      this.$router.push({name: 'super-puper'});
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this);
  }
}
</script>
