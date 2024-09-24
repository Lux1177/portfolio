<script lang="ts" setup>

import {Icon} from "@iconify/vue";
</script>

<template>

	<div class="h-full w-full flex items-center justify-center py-6 px-8">
		<a class="social-link"
		   href="mailto:ualimdjanov10@gmail.com"
		   target="_blank">
			<Icon class="w-20 h-20" icon="mage:email"/>
		</a>
	</div>

</template>

<style scoped>

.social-link {
	@apply transition-colors duration-300 dark:text-[#c7c8ca] dark:hover:text-white text-[#1d1d1d] hover:text-black w-full h-full flex justify-center items-center;
}

</style>