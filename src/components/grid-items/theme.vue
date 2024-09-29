<script setup>
import { Icon } from '@iconify/vue';
import { onMounted, ref, watch } from 'vue';
import { usePreferredColorScheme } from '@vueuse/core'


const theme = ref('')

watch(theme, () => {
	document.querySelector('html').removeAttribute('class')
	document.querySelector('html').classList.add(theme.value)
	localStorage.setItem('theme', theme.value)
})

onMounted(() => {
	if ( localStorage.getItem('theme') ) {
		theme.value = localStorage.getItem('theme')
	} else {
		theme.value = usePreferredColorScheme()
		localStorage.setItem('theme', theme.value)
	}
})

</script>

<template>

	<div class="cursor-pointer h-full w-full flex items-center p-[0.3rem]">
		<input id="light-theme" v-model="theme" class="hidden" name="theme" type="radio" value="light">
		<label class="h-full w-full flex items-center justify-center text-[#1d1d1d] rounded-3xl bg-white/80 shadow-sm
		hover:text-[#1d1d1d] dark:bg-transparent dark:shadow-none dark:text-[#737777] dark:hover:text-[#ebebeb]
		transition-colors duration-300 z-10 dark:z-auto"
		       for="light-theme">
			<Icon class="icon" icon="lucide:sun"/>
		</label>
		<input id="dark-theme" v-model="theme" class="hidden" name="theme" type="radio" value="dark">
		<label class="h-full w-full flex items-center justify-center text-[#737777] rounded-3xl dark:text-[#ebebeb]
			dark:shadow-sm hover:text-[#1d1d1d] dark:bg-[#1f2126] dark:z-10 dark:hover:text-[#ebebeb] transition-colors duration-300"
		       for="dark-theme">
			<Icon class="icon" icon="hugeicons:gibbous-moon"/>
		</label>
	</div>

</template>

<style scoped>

.icon {
	@apply w-9 h-9 max-sm:w-12 max-sm:h-12;
}

</style>