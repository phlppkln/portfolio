<template>
    <div class="container">
    <div id="landing-page-background">
    </div>
        <div class="p5-background">
            <P5LandingPage :width="width" :height="height" :loadScheme="colorScheme"></P5LandingPage>
        </div>

        <div>
            <ColorSchemeSelector @set-color-scheme="setColorScheme" @enter-page="enterPage"></ColorSchemeSelector>
        </div>

</div>
</template>

<script setup lang="ts">
import { onMounted, } from 'vue';
const router = useRouter();

const colorScheme = ref('none');
const emit = defineEmits(['page-entered']);


import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

onMounted(() => {
    emit('page-entered', false);
});

const setColorScheme = (value: string) => {
    colorScheme.value = value;
}

const getAppTheme = () => {
    if(colorScheme.value == 'patagonian-knot'){
        return 'theme-patag-knot';
    }
    else if(colorScheme.value == 'tdf'){
        return 'theme-tdf';
    }
    else if(colorScheme.value == 'dark'){
        return 'theme-dark';
    }
    else if(colorScheme.value == 'green-sea'){
        return 'theme-green-sea';
    }
    else if(colorScheme.value == 'neon-night'){
        return 'theme-neon-night';
    }
    return 'theme-default';
}

const enterPage = () => {
    // remove old theme from body
    const el = document.body;
    const classList = el.classList;
    classList.forEach((c) => {
        if(c.includes('theme')){
            el.classList.remove(c);
        }
    })

    // add new theme to body
    let selectedTheme = getAppTheme();
    el.classList.add(selectedTheme);

    emit('page-entered', true);
    router.push('/about');
}
</script>


<style scoped>
.p5-background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
}
</style>