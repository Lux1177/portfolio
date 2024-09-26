<script lang="ts" setup>

import {Icon} from "@iconify/vue";

defineProps({
	link: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	}
})

</script>

<template>

	<div class="h-full w-full flex items-center py-6 px-8">
		<a :href="link"
		   class="mx-auto transition-colors duration-300 dark:text-[#c7c8ca] dark:hover:text-white text-[#1d1d1d]
				hover:text-black w-full h-full flex justify-center items-center"
		   target="_blank">
			<Icon :icon="icon" class="h-[135%] w-[135%]"/>
		</a>
	</div>

</template>

<style scoped>

</style>