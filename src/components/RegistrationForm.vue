<template>
    <form class="registration-form" v-on:submit.prevent="onSubmit">
        <div class="registration-form__row">
            <label for="email">Email: </label>
            <input 
                id="email" 
                class="registration-form__field" 
                type="text" 
                value=""
                v-model="email" />
        </div>
        <div class="registration-form__row">
            <label for="username">Username: </label>
            <input 
                id="username" 
                class="registration-form__field" 
                type="text" 
                value=""
                v-model="username" />
        </div>
        <div class="registration-form__row">
            <label for="password">Password: </label>
            <input 
                id="password" 
                class="registration-form__field" 
                type="password" 
                v-model="password" />
        </div>
        <div class="registration-form__row">
            <label for="conf-password">Confirm Password: </label>
            <input 
                id="conf-password" 
                class="registration-form__field" 
                type="conf-password" 
                v-model="confPassword" />
        </div>

        <input class="registration-form__submit" type="submit" value="Register"/>
    </form>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return  {
            email: "",
            username: "",
            password: "",
            confPassword: ""
        }
    },
    methods: {
        onSubmit: function(){
            alert(this.username);
        }
    }
}
</script>

<style scoped lang="scss">
$cta-color: #796C6D;

.registration-form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: auto;
    width: 65%;
    margin: 0 auto;
    .registration-form__row {
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
    .registration-form__field {
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

    .registration-form__forgot-password {
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
    .registration-form__submit {
        height: 32px;
        font-size: 15px;
        background-color: $cta-color;
        border: 1px solid $cta-color;
        color: #fff;
        padding: 0;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px 0 20px 0;
        &:hover {
            background-color: darken($cta-color, 8%);
            color: darken(#fff, 8%);
        }
    }
}
</style>