<script lang="ts" setup>

import {reactive, watch} from "vue";
import Background from "@/components/background.vue";
import Grid from "@/components/grid.vue";
import Navbar from "@/components/Navbar.vue";
import {mainLayout} from "@/utils/main-layouts";
import {useNavbarStateStore} from "@/store/navbar";


const layout = reactive(mainLayout)

const changeX = () => {
	let index = 0
	for (const item of layout) {
		item.x = about[index].x
		item.y = about[index].y
		item.w = about[index].w
		item.h = about[index].h
		index++
	}
}

watch(useNavbarStateStore().$state, () => {
	ex.value = 'qwerty'
})

</script>

<template>

	<div class="overflow-hidden min-h-max">
		<Background/>
		<Navbar/>
		<div class="mb-12 mx-auto 2xl:w-[70%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[95%]">
			<Grid :cols="12" :layout="layout"/>
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

</style>
