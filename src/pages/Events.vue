<template>
	<div id="events" class="h-screen text-center flex justify-center">
		<div class="self-center">
			<h1 class="text-5xl">EVENTS PAGE IS UNDER DEVELOPMENT</h1>
			<p class="text-2xl mt-3">PLEASE CLICK <router-link to="/dashboard" class="text-main hover:text-main-dark">HERE</router-link> TO VIEW THE DASHBOARD</p>
			<div class="block mx-auto text-center mt-10">
				<router-link to="/dashboard" 
					class="border-2 bg-main-dark text-white font-bold border-main-dark px-14 py-2 rounded-full">
					Dashboard
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {defineComponent } from 'vue'
	export default defineComponent({
		name: 'Events',
	})
</script>

<style scoped>
#events{
	height: calc(100vh - 112px);
}
</style>
