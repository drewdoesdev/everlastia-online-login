<template>
    <div class="registration-modal">
        <BackButton />
        <h1>Register</h1>
        <p>Enter your credentials and we'll get you started.</p>
        <RegistrationForm />
    </div>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm.vue';
import BackButton from '../components/BackButton.vue';

export default {
    name: 'RegistrationModal',
    components: {
        RegistrationForm,
        BackButton
    }
}
</script>

<style scoped lang="scss">
.registration-modal {
    @include modal(700px);
    padding-bottom: 24px;
}
</style>