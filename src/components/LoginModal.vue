<template>
    <div class="login-modal">
        <h1>Everlastia Online</h1>
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

<style scoped>
    .login-modal {
        width: 100%;
        max-width: 400px;
        height: auto;
        background: rgba(249,249,238, 0.9);
        border: 2px solid #C77566;
        border-radius: 5px;
    }
</style>