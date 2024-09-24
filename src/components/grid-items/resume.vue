<script lang="ts" setup>

import {Icon} from "@iconify/vue";
</script>

<template>
	<div class="h-full flex justify-between items-center px-7 text-[#828585] tracking-tighter pt-1.5">
		<div class="flex flex-col gap-[0.2rem] mb-1">
			<p class="text-[0.8rem] dark:text-[#515254] font-semibold">2024 CV</p>
			<h2 class="font-semibold text-[#1d1d1d] text-2xl dark:text-[#e1e2e3]">RESUME</h2>
		</div>
		<div class="flex gap-8">
			<a download href="/CV.png">
				<Icon class="icon" icon="hugeicons:inbox-download"/>
			</a>
			<a href="/CV.png" target="_blank">
				<Icon class="icon" icon="ph:eye"/>
			</a>
		</div>
	</div>
</template>

<style scoped>

.icon {
	@apply w-10 h-10 hover:text-[#1d1d1d] transition-colors duration-200 dark:text-[#87888c] dark:hover:text-[#e1e2e3];
}

</style>