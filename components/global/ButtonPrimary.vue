<template>
    <div class="base-button" id="button-primary-container">
        <div class="inner-container">
            <div v-if="!iconClassName">
                <div key="text" class="text-container">{text}</div>
            </div>
            <div v-else>
                <div v-if="props.iconPosition === 't'" class="content-container-icon-top">
                    <div class="">
                        <i :class=iconClassName></i>
                        <div key="text" class="text-container">{{text}}</div>
                    </div>
                </div>
                <div v-else-if="props.iconPosition === 'r'" class="content-container-icon-right"></div>
                <div v-else-if="props.iconPosition === 'b'" class="content-container-icon-bottom"></div>
                <div v-else-if="props.iconPosition === 'l'" class="content-container-icon-left"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//insert emits
//insert imports

//insert props
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    iconClassName: {
        type: String,
        default: null,
    },
    iconName: {
        type: String,
        default: null,
    },
    iconPosition: {
        type: String,
        default: "l",
    },
});

onMounted(() => {
    checkIconPosition();
});

//insert functions
function checkIconPosition() {
    const positions = ["t", "r", "b", "l"];
    if (props.iconPosition && !positions.includes(props.iconPosition)) {
        console.warn(
            `iconPosition '${props.iconPosition
            }' is not a valid option. Valid options are ${positions.join(", ")}`
        );
    }
}

checkIconPosition();

//insert computed

//insert lifecycle
</script>

<style scoped lang="scss">
#button-primary-container {
    border: 3px solid var(--secondary-color);
    border-radius: 1rem;
    padding: 0.5rem;
    background-color: var(--primary-color);
    cursor: pointer;
    max-width: fit-content;

    &:hover {
        background-color: var(--secondary-color);
        box-shadow: 0 0 1rem var(--secondary-color);
        border: 3px solid var(--primary-color);
    }
}

.inner-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.text-container {
    font-weight: bold;
}



</style>
