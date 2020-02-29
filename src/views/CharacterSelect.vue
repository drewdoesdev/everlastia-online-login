<template>
    <div class="character-select-modal">
        <h1>Select your Character</h1>
    </div>
</template>

<script>
export default {
    name: 'CharacterSelectModal',
}
</script>

<style scoped lang="scss">
.character-select-modal {
    @include modal(500px);
}
</style>