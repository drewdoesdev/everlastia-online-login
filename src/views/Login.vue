<template>
    <div class="login-modal">
        <h1>Everlastia Online</h1>
        <p>Enter your username and password to begin</p>
        <LoginForm />
        <p>Not a member? <router-link to="/registration">Register today!</router-link></p>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
    name: 'LoginModal',
    components: {
        LoginForm
    }
}
</script>

<style scoped lang="scss">
.login-modal {
    @include modal(500px);
}
</style>