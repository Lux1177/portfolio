<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['Solo Project', 'VueJs', 'TailwindCSS', 'Vue-Router', 'Axios', 'Pinia']
const link = 'https://github.com/Lux1177/vue-sneakers'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="Sneakers Shop">
		<img alt="Vue-Sneaakers shop home page" class="w-full h-full object-cover" src="@/assets/img/vue-sneakers.png">
	</Project>
</template>

<style scoped>

</style>