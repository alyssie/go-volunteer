<template>
	<section class="px-10 lg:px-4 pt-10 lg:pt-5">
		<div class="container mx-auto">
			<div class="grid grid-cols-6 gap-6 py-5">
				<div class="col-span-4">
					<div class="rounded-lg overflow-hidden">
						<router-link to="/dashboard"><img src="https://i.imgur.com/CjHNcj2.jpg" alt="advertisment" class="object-cover"></router-link>
					</div>
				</div>
				<div class="col-span-2">
					<div class="rounded-lg overflow-hidden">
						<router-link to="/dashboard"><img src="https://i.imgur.com/Owe9gaz.jpg" alt="advertisment" class="object-cover"></router-link>
					</div>
					<div class="rounded-lg overflow-hidden mt-3">
						<router-link to="/dashboard"><img src="https://i.imgur.com/bOTASPd.jpg" alt="advertisment" class="object-cover"></router-link>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-4 lg:grid-cols-8 gap-3 py-5 mt-3">
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/donate.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">donate</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/volunteer.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">volunteer</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/merchant.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">merchant</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/qr.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">qr</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/ranking.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">ranking</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/history.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">history</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/inbox.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">inbox</p>
					</div>
				</router-link>
				<router-link to="/dashboard">
					<div class="rounded-lg overflow-hidden shadow bg-white py-5">
						<img src="../assets/menu/help.svg" alt="menu" class="block mx-auto mb-3 h-10">
						<p class="text-base font-semibold uppercase text-center">help</p>
					</div>
				</router-link>
			</div>
		</div>
		<div class="container mx-auto py-5">
		</div>
	</section>
	<section class="bg-gray px-4 lg:px-0 py-10">
		<div class="container mx-auto px-7">
			<div class="block w-full lg:w-1/2 mx-auto block py-5 relative">
				<input type="text" class="w-full bg-transparent border-b-2 border-main p-3 focus:outline-none" placeholder="Search events">
				<img src="../assets/search.svg" alt="search" class="absolute right-3 top-8">
			</div>
		</div>
		<div class="container mx-auto px-7 py-10">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<EventList/>
				<EventList/>
				<EventList/>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import EventList from '../components/EventList.vue'
	export default defineComponent({
		name: 'Home',
		components: {
			EventList,
		}
	})
</script>

<style scoped>
</style>
