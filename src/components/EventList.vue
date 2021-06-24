<template>
	<EventCard 
		eventType="Donate"
		eventImage="https://i.imgur.com/3gHNeYb.jpg"
		eventName="Equiments for Marine Conservation Project"
		organizationName="Marine Life Organization"
		eventDate="July 29, 2022"
		eventLoc="Pasig City"
		eventNeeds="5,000"
		eventGoal="10,000"
		progressBar="50"
	/>
	<EventCard 
		eventType="Donate"
		eventImage="https://i.imgur.com/nwXoQ1O.jpg"
		eventName="Help for Earthquake Victims"
		organizationName="People for People Organization"
		eventDate="August 1, 2022"
		eventLoc="Taguig City"
		eventNeeds="50,000"
		eventGoal="200,000"
		progressBar="25"
	/>
	<EventCard 
		eventType="Volunteer"
		eventImage="https://i.imgur.com/WsVN4Q3.jpg"
		eventName="Education for all"
		organizationName="Children Learning Foundation"
		eventDate="August 3, 2022"
		eventLoc="Quezon City"
		eventNeeds="5"
		eventGoal="20"
		progressBar="25"
	/>
	<EventCard 
		eventType="Volunteer"
		eventImage="https://i.imgur.com/gjlQvKd.jpg"
		eventName="Blood Donation for G.V. Hospital"
		organizationName="Bloodline Foundation"
		eventDate="July 30, 2022"
		eventLoc="Malabon City"
		eventNeeds="100"
		eventGoal="1000"
		progressBar="10"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import EventCard from './EventCard.vue'

	export default defineComponent({
		name: 'EventList',
		components: {
			EventCard
		}
	})
</script>

<style scoped>
</style>
