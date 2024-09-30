<script lang="ts" setup>

import {onMounted, reactive, type Ref, ref, watch} from "vue";
import Background from "@/components/background.vue";
import Navbar from "@/components/Navbar.vue";
import {mainAboutLayout, mainAllLayout, mainLayout, mainWorkLayout} from "@/utils/main-layouts";
import Grid from "@/components/grid.vue";
import {useNavbarStateStore} from "@/store/navbar";
import {screenLayout, tabLayout} from "@/utils/layoutChagers";
import {useWindowSize} from '@vueuse/core'
import type {IGrid} from "@/utils/IGrid";

const {width} = useWindowSize()

const layout: IGrid[] = reactive(mainLayout)
let allLayout: IGrid[] = mainAllLayout
let aboutLayout: IGrid[] = mainAboutLayout
let workLayout: IGrid[] = mainWorkLayout

const rowHeight: Ref<number> = ref(22)
const isDraggable: Ref<boolean> = ref(true)

watch(useNavbarStateStore().$state, () => {
	tabLayout(layout, allLayout, aboutLayout, workLayout)
})


watch(width, () => {
	screenLayout(layout, allLayout, aboutLayout, workLayout, rowHeight, isDraggable)
}, {deep: true})

onMounted(() => {
	screenLayout(layout, allLayout, aboutLayout, workLayout, rowHeight, isDraggable)
})

</script>

<template>

	<div class="overflow-hidden min-h-max">
		<Background/>
		<Navbar/>
		<div class="h-auto mb-36 pb-36 mx-auto 2xl:w-[70%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[95%]">
			<Grid :cols="12" :is-draggable="isDraggable" :layout="layout" :row-height="rowHeight"/>
		</div>
	</div>

</template>

<style>

@import "assets/base.css";

* {
	font-family: Montserrat, 'Roboto Condensed', sans-serif;
}


body::-webkit-scrollbar {
	display: none;
}

body {
	scroll-behavior: smooth;
}

#app {
	position: relative;
}
</style>
