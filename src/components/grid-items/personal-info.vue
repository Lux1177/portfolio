<script lang="ts" setup></script>

<template>


	<div class="personal-info">
		<div class="flex items-center max-sm:flex-col max-sm:gap-4 justify-center gap-10 mb-6">
			<div class="rounded-full w-1/3 max-sm:w-1/5"><img alt="avatar" class="rounded-full" src="@/assets/img/hello.png">
			</div>
			<h2 class="text-[2.3rem] font-bold max-sm:text-center max-sm:font-semibold">Umarjon Alimdjanov</h2>
		</div>
		<p class="font-light">I am passionate about building beautiful and functional user interfaces.</p>
	</div>


</template>

<style scoped>

.personal-info {
	@apply px-8 py-6 dark:text-white;
	font-family: 'Poppins', 'Montserrat', sans-serif;
}

.personal-info p {
	@apply text-gray-700/90 dark:text-wh font-mono;
}

</style>