<template>
	<Navigation />
	<router-view />
	<Footer />
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Navigation from './components/Navigation.vue'
	import Footer from './components/Footer.vue'

	export default defineComponent({
		name: 'App',
		components: {
			Navigation,
			Footer
		}
	})
</script>

<style>
</style>
