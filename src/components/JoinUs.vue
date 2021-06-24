<template>
	<router-link to="/" class="flex group bg-white text-violet gap-0 rounded-full border-4 border-violet delay-100 transition-all">
		<div class="w-3/4 group-hover:w-2/4 flex justify-center delay-100 transition-all">
			<p class="text-center self-center text-base md:text-xl font-semibold">Are you a non-profit organization?</p>
		</div>
		<div class="w-2/4 md:w-1/4 group-hover:w-2/4  flex justify-end text-lg uppercase text-center font-bold text-white delay-100 transition-all">
			<div class="bg-violet ring-4 ring-violet hover:border-violet float-right w-full block px-8 py-4 text-lg sm:text-1xl lg:text-3xl rounded-full delay-100 transition-all">Join Us</div>
		</div>
	</router-link>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'JoinUs'
	})
</script>

<style scoped>
</style>
