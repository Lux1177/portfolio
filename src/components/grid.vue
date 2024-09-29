<script lang="ts" setup>

import {GridItem, GridLayout} from "vue3-drr-grid-layout";
import GridItemContent from "@/components/grid-items/grid-item-content.vue";
import type {IGrid} from "@/utils/IGrid";

defineProps<{
	layout: IGrid[],
	rowHeight: number,
}>()

</script>

<template>
	<grid-layout
		:col-num="12"
		:isResizable="false"
		:layout="layout"
		:margin="[15, 15, 15, 15]"
		:row-height="rowHeight"
		:useCssTransforms="true"
	>
		<template #default="{ gridItemProps }">
			<grid-item
				v-for="item in layout"
				:key="item.i"
				:h="item.h"
				:i="item.i"
				:w="item.w"
				:x="item.x"
				:y="item.y"
				v-bind="gridItemProps"
			>
				<grid-item-content>
					<component :is="item.component"/>
				</grid-item-content>
			</grid-item>
		</template>
	</grid-layout>
</template>

<style scoped>

.vue-grid-item {
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	border-radius: 1.6rem;
	box-sizing: border-box;
	transition: all .350s ease-in-out;
	transition-property: left, top, right;
	@apply touch-none sm:!touch-auto;
}

.vue-grid-item.no-touch {
	touch-action: none
}

.vue-grid-item.css-transforms {
	left: 0;
	right: auto;
	transition-property: transform;
}

.vue-grid-item.vue-draggable-dragging {
	transition: none;
	z-index: 3;
}

.vue-grid-item.disable-user-select {
	user-select: none;
}

.vue-grid-layout {
	position: relative;
	transition: height .2s ease;
}

.vue-grid-item {
	@apply !bg-transparent !rounded-[1.6rem];
}

</style>