<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['Solo Project', 'VueJs', 'NuxtJs', 'Pinia', 'Appwrite']
const link = 'https://github.com/Lux1177/crm-system-nuxt'

</script>

<template>
	<Project :project-link="link" :technologies="technologies"
	         img-src="@/assets/img/crm-system.png" project-name="Crm System">
		<img alt="" src="@/assets/img/crm-system.png">
	</Project>
</template>

<style scoped>

</style>