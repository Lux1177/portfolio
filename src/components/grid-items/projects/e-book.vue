<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['VueJs', 'Axios', 'Pinia', 'Vue-Router', 'TailwindCSS', 'PHP', 'Symfony']
const link = 'https://github.com/Lux1177/book-front'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="E-Book website with Back-end"
	         project-src="Team Project - Online course" project-src-icon="fluent:people-team-28-regular">
		<img alt="" class="w-full h-full object-fill" src="@/assets/img/e-book.png">
	</Project>
</template>

<style scoped>

</style>