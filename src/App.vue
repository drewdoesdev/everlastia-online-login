<template>
  <div id="app">
    <LoginModal />
    <div class="version-number">v1.0.5</div>
  </div>
</template>

<script>
import LoginModal from './components/LoginModal.vue'

export default {
  name: 'App',
  components: {
    LoginModal
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Girassol|Roboto&display=swap');

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

.version-number {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #fff
}
</style>
