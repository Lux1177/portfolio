<script lang="ts" setup>

import {GridItem, GridLayout} from "vue3-drr-grid-layout";
import GridItemContent from "@/components/grid-items/grid-item-content.vue";
import {mdLayout} from "@/utils/md-layouts";

defineProps({
	layout: {
		type: Array,
		required: true,
	},
	cols: {
		type: Number,
		default: 12
	},
	rowHeight: {
		type: Number,
		default: 30
	}
})
</script>

<template>
	<grid-layout
		:breakpoints="{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }"
		:col-num="cols"
		:cols="{ lg: 12, md: 10, sm: 12, xs: 12, xxs: 12 }"
		:isResizable="false"
		:layout="layout"
		:margin="[15, 15, 15, 15]"
		:responsiveLayouts="{md: mdLayout}"
		:row-height="22"
		:useCssTransforms="true"
	>
		<template #default="{ gridItemProps }">
			<!-- | gridItemProps props from GridLayout | -->
			<!--breakpointCols: props.cols-->
			<!--colNum: props.colNum-->
			<!--containerWidth: width.value-->
			<!--isDraggable: props.isDraggable-->
			<!--isResizable: props.isResizable-->
			<!--lastBreakpoint: lastBreakpoint.value-->
			<!--margin: props.margin-->
			<!--maxRows: props.maxRows-->
			<!--responsive: props.responsive-->
			<!--rowHeight: props.rowHeight-->
			<!--useCssTransforms: props.useCssTransforms-->
			<!--width: width.value-->
			<grid-item
				v-for="item in layout"
				:key="item.i"
				:h="item.h"
				:i="item.i"
				:w="item.w"
				:x="item.x"
				:y="item.y"
				v-bind="gridItemProps"
				@move="move"
				@moved="moved"
				@resize="resize"
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
	background-color: transparent;
	box-sizing: border-box;
	touch-action: none;
	transition: all .350s ease-in-out;
	transition-property: left, top, right;
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