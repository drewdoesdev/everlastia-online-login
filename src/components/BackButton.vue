<template>
    <div class="back-button"><router-link to="/"> &lt; Back</router-link></div>
</template>

<script>
export default {
    name: 'BackButton',
}
</script>

<style lang="scss">
.back-button {
    width: 100%;
    text-align: left;
    font-size: 1.25rem;
    font-weight: bold;
    a {
        text-decoration: none;
    }
}
</style>