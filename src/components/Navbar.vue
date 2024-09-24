<script lang="ts" setup>

</script>

<template>
	<nav class="flex items-center justify-center py-16 text-sm dark:text-wh tabs">
		<div
			class="flex bg-[#e7e7e9]/80 rounded-full shadow p-[0.30rem] hover:bg-[#ededf3]/90 relative transition-colors
			duration-300 overflow-hidden dark:bg-[#16181f]/80 dark:border-borderDark dark:border dark:hover:bg-[#140f1d]/90 dark:text-wh">
			<NuxtLink class="navbar-link" to="/public">All</NuxtLink>
			<NuxtLink class="navbar-link" to="/about">About</NuxtLink>
			<NuxtLink class="navbar-link" to="/work">Work</NuxtLink>
		</div>
	</nav>
</template>

<style scoped>

.navbar-link {
	@apply px-8 py-2 rounded-full hover:text-[#878a8d] transition-colors duration-300;
}

.router-link-exact-active {
	@apply border-[#353b41] bg-[#f5f5f5] dark:border dark:bg-[#24292f] transition-all duration-500;
}

</style>