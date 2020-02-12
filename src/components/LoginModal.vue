<template>
    <div class="login-modal">
        <h1>Everlastia Online</h1>
        <p>Enter your username and password to begin</p>
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
    name: 'LoginModal',
    components: {
        LoginForm
    }
}
</script>

<style scoped lang="scss">
.login-modal {
    width: 100%;
    max-width: 500px;
    height: auto;
    background: rgba(249,249,238, 0.95);
    border: 10px groove #C77566;
    border-radius: 10px;
    padding: 1em;
}
</style>