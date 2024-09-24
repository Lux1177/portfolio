<script lang="ts" setup>
import Slider from "@/components/grid-items/slider.vue";
import {techs} from "@/components/grid-items/techs"
import {Icon} from "@iconify/vue";
</script>

<template>

	<div class="mx-7">

		<div class="slider-container">
			<Slider :speed="1200">
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>
				<span v-for="tech in techs" :key="tech.name" class="tech-icon-container">
					<Icon :icon="tech.icon" class="tech-icon"/>
				</span>

			</Slider>
		</div>

		<div class="uppercase font-semibold">
			<p class="text-[#737777] text-sm mb-1">Tech Stack</p>
			<p class="text-2xl flex gap-1.5 dark:text-wh">I use <span class="flex items-center text-red-600"><Icon
				name="mdi:cards-heart"/></span>
			</p>
		</div>

	</div>

</template>

<style scoped>

.slider-container {
	@apply mt-14 mb-16 overflow-hidden;
	-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.tech-icon-container {
	@apply p-3 bg-gray-600/15 dark:bg-[#272628] flex justify-center items-center rounded-2xl mx-1
	transition-colors duration-300;
}

.tech-icon {
	@apply w-12 h-12;
}

</style>