<script lang="ts" setup>
import {useNavbarStateStore} from "@/store/navbar";
import {ref, watch} from "vue";
import Particles from "@/components/particles.vue";

const tab = ref('all')

watch(tab, () => {
	useNavbarStateStore().set(tab.value)
})

</script>

<template>
	<nav class="flex items-center justify-center py-16 text-sm dark:text-wh tabs select-none">
		<div
			class="flex bg-[#e7e7e9]/80 rounded-full shadow p-[0.30rem] hover:bg-[#ededf3]/90 relative transition-colors
			duration-300 overflow-hidden dark:bg-[#16181f]/80 dark:border-borderDark dark:border dark:hover:bg-[#140f1d]/90
			dark:text-wh">
			<input id="all" v-model="tab" class="hidden" name="tab" type="radio" value="all">
			<label class="navbar-link" for="all">All</label>
			<input id="about" v-model="tab" class="hidden" name="tab" type="radio" value="about">
			<label class="navbar-link" for="about">About</label>
			<input id="work" v-model="tab" class="hidden" name="tab" type="radio" value="work">
			<label class="navbar-link" for="work">Work</label>
			<Particles/>
		</div>
	</nav>
</template>

<style scoped>

.navbar-link {
	@apply px-8 py-2 rounded-full hover:text-[#878a8d] transition-all duration-300 border border-transparent;
}

input[type=radio]:checked + label {
	@apply dark:border-[#353b41] bg-[#f5f5f5] dark:bg-[#24292f] duration-500 z-10;
}

</style>