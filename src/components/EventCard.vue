<template>
	<div class="rounded-lg overflow-hidden shadow">
		<div class="h-56 bg-center bg-cover" :style="{ backgroundImage: `url('${eventImage}')` }"></div>
		<div class="p-4 bg-white">
			<p class="text-xl font-medium mb-1 overflow-ellipsis truncate">{{ eventName }}</p>
			<p class="text-base font-medium mb-1 overflow-ellipsis truncate">{{ organizationName }}</p>
			<p class="text-sm mb-1">
				<span v-if="eventType === 'Donate'">Until</span> {{ eventDate }} 
				<span v-if="eventType === 'Volunteer'"> | {{ eventLoc }}</span>
			</p>
			<p v-if="eventType === 'Donate'" class="text-sm text-main-dark mb-2">PHP {{ eventNeeds }} / PHP {{ eventGoal }}</p>
			<p v-if="eventType === 'Volunteer'" class="text-sm text-main-dark mb-2">{{ eventNeeds }} people / {{ eventGoal }}  people</p>
			<div class="block relative rounded-md h-5 bg-main-light overflow-hidden mb-3">
				<div class="w-1/2 h-5 bg-main mb-2"></div>
				<p class="text-sm absolute inset-0 m-auto font-bold text-center">{{ progressBar }}%</p>
			</div>
			<router-link to="/events" class="bg-main-dark hover:bg-main px-8 py-2 rounded-lg text-md uppercase font-bold text-white block text-center transition-all">
				<span v-if="eventType === 'Donate'">Donate</span>
				<span v-if="eventType === 'Volunteer'">Volunteer</span>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'EventCard',
		props: {
			eventType: {
				type: String,
				required: true
			},
			eventImage: {
				type: String,
				required: true
			},
			eventName: {
				type: String,
				required: true
			},
			organizationName: {
				type: String,
				required: true
			},
			eventDate: {
				type: String,
				required: true
			},
			eventLoc: {
				type: String,
				required: true
			},
			eventNeeds: {
				type: String,
				required: true
			},
			eventGoal: {
				type: String,
				required: true
			},
			progressBar: {
				type: String,
				required: true
			},
		},
	})
</script>

<style scoped>
</style>
