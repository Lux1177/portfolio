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

	<div class="w-full h-full py-5 px-7 flex flex-col justify-between items-center">

		<div class="w-full aspect-video rounded-xl overflow-hidden img-shadow">
			<slot></slot>
		</div>

		<div class="w-full flex flex-col justify-end gap-2">

			<div class="flex uppercase text-gray-700 gap-2">
				<p class="text-[0.77rem] font-semibold">{{ projectSrc }}</p>
				<Icon :icon="projectSrcIcon"/>
			</div>

			<div class="flex uppercase font-semibold text-2xl items-center gap-2">
				<h4>{{ projectName }}</h4>
				<a :href="projectLink" class="transition-colors duration-300 rounded-full p-1.5 border border-transparent hover:bg-white relative
					tooltip-container text-gray-800/70"
				   target="_blank">
					<Icon class="transition-colors duration-300 hover:text-black" icon="icon-park-outline:send-one"/>
				</a>
			</div>

			<div class="text-[#211e4c] flex gap-1.5 font-bold">
				<span v-for="tech in technologies" :key="tech" class="text-[0.77rem] bg-black/10 rounded-full px-2 py-0.5">
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
	rounded-2xl flex items-center justify-center py-3 px-6 -z-10;
}

.tooltip-container:hover:after {
	@apply text-gray-600 bg-gray-400/20 z-50;
}

.img-shadow {
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

</style>