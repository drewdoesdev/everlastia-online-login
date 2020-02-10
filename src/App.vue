<template>
  <div id="app">
    <LoginModal />
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
@import url('https://fonts.googleapis.com/css?family=Girassol&display=swap');

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

h1 {
    font-family: 'Girassol', cursive;
    font-size: 3rem;
    letter-spacing: 2px;
}
</style>
