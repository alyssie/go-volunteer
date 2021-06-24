<template>
	<div id="merchants" class="h-screen text-center flex justify-center">
		<div class="self-center">
			<h1 class="text-5xl">MERCHANTS PAGE IS UNDER DEVELOPMENT</h1>
			<p class="text-2xl mt-3">PLEASE CLICK <router-link to="/dashboard" class="text-main hover:text-main-dark">LOGIN</router-link> TO VIEW THE DASHBOARD</p>
		</div>
	</div>
</template>

<script lang="ts">
	import {defineComponent } from 'vue'
	export default defineComponent({
		name: 'Merchants',
	})
</script>

<style scoped>
#merchants{
	height: calc(100vh - 112px);
}
</style>
