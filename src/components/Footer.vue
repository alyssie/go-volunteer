<template>
	<div class="bg-violet tracking-wide text-sm text-white font-light px-7">
		<div class="container mx-auto">
			<div class="block lg:flex py-5 lg:py-2">
				<div class="mr-auto self-center mt-2 lg:mt-0">
					<router-link to="/" class="block text-center lg:text-left text-xl">Go<span class="font-extrabold">Volunteer</span></router-link>
				</div>
				<router-link to="/maintenance" class="my-3 hover:text-yellow lg:my-0 ml-0 lg:ml-16 self-center block text-center lg:text-left">FAQ</router-link>
				<router-link to="/maintenance" class="my-3 hover:text-yellow lg:my-0 ml-0 lg:ml-16 self-center block text-center lg:text-left">Partnership</router-link>
				<router-link to="/maintenance" class="my-3 hover:text-yellow lg:my-0 ml-0 lg:ml-16 self-center block text-center lg:text-left">Contact Us</router-link>
				<router-link to="/maintenance" class="my-3 hover:text-yellow lg:my-0 ml-0 lg:ml-16 self-center block text-center lg:text-left">Terms of Service</router-link>
				<router-link to="/maintenance" class="my-3 hover:text-yellow lg:my-0 ml-0 lg:ml-16 self-center block text-center lg:text-left">Privacy Policy</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Footer'
	})
</script>

<style scoped>
</style>
