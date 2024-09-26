<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['Solo Project', 'HTML', 'CSS', 'Bootstrap']
const link = 'https://github.com/Lux1177/IPDC_project'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="IPDC Finance">
		<img alt="" class="w-full h-full object-cover" src="@/assets/img/ipdc-finance.png">
	</Project>
</template>

<style scoped>

</style>