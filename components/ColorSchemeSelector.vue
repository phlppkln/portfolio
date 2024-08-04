<template>
    <div class="container-fluid">
        <div class="color-schemes-container">
            <div v-for="colorScheme in colorSchemes" class="color-scheme">
                <div class="color-scheme-container">
                <ColorScheme :colorSchemeName="colorScheme" :selected="colorScheme == selectedColorScheme" @click="setColorScheme(colorScheme)"></ColorScheme>
            </div>
            </div>
    </div>
        <div class="btn-container">
        <div class="btn-primary theme-default" @click="enterBtnClicked()" ref="btnPrimary">Enter</div>
        <div class="error-message">
            {{ errorMessage }}
        </div></div>
        </div>

</template>


<script setup lang="ts">

const selectedColorScheme = ref('');
const btnPrimary = ref<HTMLElement | null>(null);

const errorMessage = ref('');

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

    changeBtnTheme(value);

    errorMessage.value = "";
}

const changeBtnTheme = (value: string) => {
    //remove old theme from btn-primary
    btnPrimary.value?.classList.remove("theme-default");
    btnPrimary.value?.classList.remove("theme-patag-knot");
    btnPrimary.value?.classList.remove("theme-tdf");
    btnPrimary.value?.classList.remove("theme-dark");
    btnPrimary.value?.classList.remove("theme-green-sea");
    btnPrimary.value?.classList.remove("theme-neon-night");

    if (value == "patagonian-knot") {
     btnPrimary.value?.classList.add("theme-patag-knot");
  } else if (value  == "tdf") {
    btnPrimary.value?.classList.add("theme-tdf");
  } else if (value  == "dark") {
    btnPrimary.value?.classList.add("theme-dark");
  } else if (value  == "green-sea") {
    btnPrimary.value?.classList.add("theme-green-sea");
  } else if (value == "neon-night") {
    btnPrimary.value?.classList.add("theme-neon-night");
  }
}

const enterBtnClicked = () => {
    if(selectedColorScheme.value == ''){
        errorMessage.value = ('Please select a color theme first!');
    } else{
        emit('enter-page', true);
    }
}

</script>


<style scoped lang="scss">

.color-schemes-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.theme-default{
    background-color: #2d2d2d;
    color: #dfdfdf;
    border: 0.2rem solid #b4b4b4;

    &:hover{
        background-color: #1a1a1a;
    }
}

.btn-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
}
</style>