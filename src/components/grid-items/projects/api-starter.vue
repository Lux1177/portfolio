<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['PHP', 'Symfony', 'Docker', 'Api-Platform', 'Lexik-JWT', 'MySQL']
const link = 'https://github.com/Lux1177/api-starter-kit'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="Back-end starter-kit on Symfony">
		<img alt="Api Starter Swagger" class="w-full h-full object-cover" src="@/assets/img/api-starter-kit.png">
	</Project>
</template>

<style scoped>

</style>