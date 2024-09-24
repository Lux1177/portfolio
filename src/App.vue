<script lang="ts" setup>

import {reactive} from "vue";
import Background from "@/components/background.vue";
import Grid from "@/components/grid.vue";
import Navbar from "@/components/Navbar.vue";
import {mainLayout} from "@/utils/main-layouts";


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
</script>

<template>

	<Background/>
	<Navbar/>

	<div class="mx-auto 2xl:w-[70%] xl:w-[85%] lg:w-[90%] md:w-[95%] sm:w-[95%]">
		<Grid :cols="12" :layout="layout"/>
	</div>

</template>

<style scoped>

* {
	font-family: Montserrat, 'Roboto Condensed', sans-serif;
}

@import "assets/base.css";

</style>
