<template>
  <div id="app">
    <router-view></router-view>
    <div class="version-number">v1.0.5</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}

</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Girassol|Roboto&display=swap');

/* Global Styles */
body, html {
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url("./assets/background.gif") no-repeat center center fixed; 
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  font-family: 'Roboto', sans-serif;
}

h1 {
    font-family: 'Girassol', cursive;
    font-size: 3rem;
    letter-spacing: 2px;
    margin: 10px 0;
}

a {
  color: #796C6D;
  &:hover {
      color: darken(#796C6D, 8%);
  }
}

.version-number {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff
}
</style>
