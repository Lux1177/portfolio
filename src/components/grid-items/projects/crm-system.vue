<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['Solo Project', 'VueJs', 'NuxtJs', 'TailwindCSS', 'Pinia', 'Appwrite']
const link = 'https://github.com/Lux1177/crm-system-nuxt'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="Crm System">
		<img alt="CRM System home page" class="w-full h-full object-cover" src="@/assets/img/crm-system.png">
	</Project>
</template>

<style scoped>

</style>