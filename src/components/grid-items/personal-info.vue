<script lang="ts" setup></script>

<template>


	<div class="personal-info">
		<div class="flex items-center max-sm:flex-col max-sm:gap-4 justify-center gap-10 mb-8">
			<div class="rounded-full w-1/4 max-sm:w-1/5 h-1/4"><img alt="avatar" class="rounded-full"
			                                                        src="@/assets/img/hello.png">
			</div>
			<h2 class="text-4xl/normal font-bold max-sm:text-center max-sm:font-semibold">Umarjon Alimdjanov</h2>
		</div>
		<p class="font-light text-xl max-sm:text-base text-gray-700/90 dark:text-wh font-mono">I am passionate about
			building beautiful and functional user
			interfaces.</p>
	</div>


</template>

<style scoped>

.personal-info {
	@apply px-8 py-6 dark:text-white;
	font-family: 'Poppins', 'Montserrat', sans-serif;
}

</style>