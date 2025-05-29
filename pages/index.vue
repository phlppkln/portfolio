<template>
    <div id="home-background">

</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const router = useRouter();

onMounted(() => {
	router.push("/about");
});
</script>


<style scoped>

</style>