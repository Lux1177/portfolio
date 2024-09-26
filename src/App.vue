<script lang="ts" setup>

import {onMounted, reactive, ref, watch} from "vue";
import Background from "@/components/background.vue";
import Navbar from "@/components/Navbar.vue";
import {mainAboutLayout, mainAllLayout, mainLayout, mainWorkLayout} from "@/utils/main-layouts";
import Grid from "@/components/grid.vue";
import {useNavbarStateStore} from "@/store/navbar";
import {screenLayout, tabLayout} from "@/utils/layoutChagers";
import {useWindowSize} from '@vueuse/core'

const {width} = useWindowSize()

const layout = reactive(mainLayout)
let allLayout = mainAllLayout
let aboutLayout = mainAboutLayout
let workLayout = mainWorkLayout
const rowHeight = ref(22)


watch(useNavbarStateStore().$state, () => {
	tabLayout(layout, allLayout, aboutLayout, workLayout)
})


watch(width, () => {
	screenLayout(layout, allLayout, aboutLayout, workLayout, rowHeight)
}, {})

onMounted(() => {
	screenLayout(layout, allLayout, aboutLayout, workLayout, rowHeight)
})

</script>

<template>

	<div class="overflow-hidden min-h-max">
		<Background/>
		<Navbar/>
		<div class="mb-14 mx-auto 2xl:w-[70%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[95%]">
			<Grid :cols="12" :layout="layout" :row-height="rowHeight"/>
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
	@apply dark:bg-gray-900 bg-wh;
	scroll-behavior: smooth;
}


</style>
