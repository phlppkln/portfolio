<template>
    <div class="container">
        <div class="info-item">
            <div>
                <span class="info-header role-header">Role</span> </div><div class="info-text role-text">{{ role }}</div>
        </div>
        
        <div class="info-item">
        <div>
                <span class="info-header time-header">Duration</span> </div><div class="info-text time-text">{{ timeRange }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    role: {
        type: String,
        required: true
    },
    timeRange: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">
.container{
    @include fadein-default;

    .role{
        @include fadein-default;
    }

    .time-range{
        @include fadein-default;
    }

    & {   
        padding: 0rem 5rem 2rem 5rem;
        font-size: 1.5rem;
    }
}

.info-item{
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-bottom: 1rem;
    opacity: 0.65 !important;
    border-bottom: 0.5px solid $primary;
}

.info-header{
    font-weight: bolder;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: $secondary;
}
</style>