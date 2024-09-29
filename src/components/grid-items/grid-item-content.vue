<script lang="ts" setup>
import Particles from "@/components/particles.vue";
</script>

<template>

	<div class="grid-item-content !overflow-hidden">
		<slot></slot>
		<Particles/>
	</div>

</template>

<style scoped>

.grid-item-content {
	@apply w-full h-full bg-white/65 rounded-[1.6rem] transition-all duration-300 ease-in-out overflow-hidden
	shadow-sm hover:bg-white/75 cursor-grab opacity-85 hover:shadow-md hover:opacity-90 dark:bg-[#191921]/60
	dark:hover:bg-[#0f1116]/70 border dark:border-[#31383d] relative;
}

.vue-draggable-dragging > .grid-item-content {
	@apply !cursor-grabbing;
}

</style>