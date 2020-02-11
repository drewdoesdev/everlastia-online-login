<template>
    <form class="login-form">
        <div class="login-form__row">
            <label for="username">Username: </label>
            <input id="username" class="login-form__field" type="text" />
        </div>
        <div class="login-form__row">
            <label for="password">Password: </label>
            <input id="password" class="login-form__field" type="password" />
            <a class="login-form__forgot-password">Forgot Password?</a>
        </div>

        <input class="login-form__submit" type="submit" value="SUBMIT" />
    </form>
</template>

<script>
export default {
    name: 'LoginForm'
}
</script>

<style scoped lang="scss">
$cta-color: #796C6D;

.login-form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: auto;
    width: 65%;
    margin: 0 auto;
    .login-form__row {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
         margin-bottom: 18px;
    }

    label {
        display: flex;
        font-weight: bold;
        text-align: left;
        margin-bottom: 5px;
    }
    .login-form__field {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 6px);
        height:25px;
        font-size: 15px;
        padding: 2px;
        border-radius: 5px;
        border: 1px solid $cta-color;
        &:focus {
            outline: none;
        }
    }

    .login-form__forgot-password {
        display: inline-block;
        font-size: 0.85rem;
        text-align: right;
        margin-left: auto;
        margin-top: 5px;
        text-decoration: underline;
        color: $cta-color;
        cursor: pointer;
        &:hover {
            color: darken($cta-color, 8%);
        }
    }
    .login-form__submit {
        height: 32px;
        font-size: 15px;
        background-color: $cta-color;
        border: 1px solid $cta-color;
        color: #fff;
        padding: 0;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px 0;
        &:hover {
            background-color: darken($cta-color, 8%);
            color: darken(#fff, 8%);
        }
    }
}
</style>