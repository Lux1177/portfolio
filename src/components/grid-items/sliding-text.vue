<script lang="ts" setup>
import Slider from "@/components/grid-items/slider.vue";
import {Icon} from "@iconify/vue";
</script>

<template>

	<div class="sliding-text-container">
		<Slider :speed="100">
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
			<span class="marquee__item font-[350]"> personal </span>
			<span class="marquee__item font-bold"> portfolio </span>
			<span class="marquee__item icon"> <Icon class="icon" icon="solar:sun-2-bold-duotone"/> </span>
		</Slider>
	</div>

</template>

<style scoped>

.sliding-text-container {
	@apply h-full flex items-center justify-center text-[#23204e] uppercase overflow-hidden text-[0.92rem]
	pt-[0.175rem] mx-3;
	-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee__item {
	@apply dark:text-[#9a9a9a];
}

.icon {
	@apply flex items-center justify-center text-gray-600/40 dark:text-[#9a9a9a];
}

</style>