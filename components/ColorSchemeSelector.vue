<template>
    <div class="container">
        <div class="color-schemes-container">
            <div v-for="colorScheme in colorSchemes" class="color-scheme">
                <ColorScheme :colorSchemeName="colorScheme" :selected="colorScheme == selectedColorScheme" @click="setColorScheme(colorScheme)"></ColorScheme>
            </div>
        </div>
        <div class="btn-primary" @click="$emit('enter-page', true)">Enter</div>
    </div>

</template>


<script setup lang="ts">

const selectedColorScheme = ref('');

const colorSchemes = [
    'patagonian-knot',
    'tdf',
    'dark',
    'neon-night',
    'green-sea'
]

const emit = defineEmits(['set-color-scheme', 'enter-page']);

const setColorScheme = (value: string) => {
    selectedColorScheme.value = value
    emit('set-color-scheme', value);
}

</script>


<style scoped lang="scss"></style>