<template>
    <form class="login-form">
        <div class="login-form__row">
            <label for="username">Username: </label>
            <input id="username" class="login-form__username" type="text" />
        </div>
        <div class="login-form__row">
            <label for="password">Password: </label>
            <input id="password" class="login-form__password" type="text" />
        </div>

        <input type="submit" />
    </form>
</template>

<script>
export default {
    name: 'LoginForm'
}
</script>

<style>
.login-form {
    
}
</style>