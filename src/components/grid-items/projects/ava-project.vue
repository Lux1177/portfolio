<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['Solo Project', 'HTML', 'CSS', 'JS']
const link = 'https://github.com/Lux1177/AVA_project'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="AVA Project">
		<img alt="AVA Project home page" class="w-full h-full object-cover" src="@/assets/img/ava-project.png">
	</Project>
</template>

<style scoped>

</style>