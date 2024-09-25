<script lang="ts" setup>

import {Icon} from "@iconify/vue";


defineProps({
	projectSrc: {
		type: String,
		default: 'Personal Project'
	},
	projectSrcIcon: {
		type: String,
		default: 'icon-park-outline:personal-collection'
	},
	projectName: {
		type: String,
		required: true
	},
	technologies: {
		type: Array,
		required: true
	},
	projectLink: {
		type: String,
		required: true
	}
})

</script>

<template>

	<div class="w-full h-full py-5 px-7 flex flex-col justify-between items-center pb-6">

		<div
			class="w-full aspect-video rounded-xl overflow-hidden shadow-lg img-shadow object-fill dark:shadow-slate-800">
			<slot></slot>
		</div>

		<div class="w-full flex flex-col justify-end gap-2">

			<div class="flex uppercase text-gray-700 gap-2 dark:text-gray-400/80">
				<p class="text-[0.77rem] font-semibold">{{ projectSrc }}</p>
				<Icon :icon="projectSrcIcon"/>
			</div>

			<div class="flex uppercase font-semibold text-2xl items-center gap-2 dark:text-wh">
				<h4>{{ projectName }}</h4>
				<a :href="projectLink" class="transition-colors duration-300 rounded-full p-1.5 border border-transparent
					hover:dark:bg-transparent hover:dark:border-gray-700/80 hover:bg-white hover:dark:text-wh relative
					tooltip-container text-gray-800/70 hover:text-black dark:text-gray-400/80"
				   target="_blank">
					<Icon icon="icon-park-outline:send-one"/>
				</a>
			</div>

			<div class="dark:text-gray-400/80 text-[#211e4c] flex gap-1.5 font-bold flex-wrap">
				<span v-for="tech in technologies" :key="tech"
				      class="text-[0.77rem] dark:bg-gray-400/25 bg-black/10 rounded-full px-2 py-0.5">
					{{ tech }}
				</span>
			</div>

		</div>

	</div>

</template>

<style scoped>

.tooltip-container:after {
	content: 'Visit';
	position: absolute;
	text-transform: none;
	@apply w-12 h-6 -top-[80%] -left-[15%] bg-transparent text-transparent transition-colors duration-500 ease-in-out text-base
	rounded-2xl flex items-center justify-center py-3 px-6 -z-10 font-normal;
}

.tooltip-container:hover:after {
	@apply dark:text-wh dark:bg-gray-700/60 text-gray-600 bg-gray-400/20 z-50;
}


</style>