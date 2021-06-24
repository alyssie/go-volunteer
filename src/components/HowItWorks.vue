<template>
	<div class="bg-red-light w-full lg:w-10/12 relative py-10 lg:py-5 px-6 rounded-lg shadow">
		<div class="bg-red rounded-full w-20 h-20 flex justify-center absolute -top-10 left-16">
			<p class="self-center text-4xl font-bold text-white">1</p>
		</div>
		<div class="flex justify-start">
			<img alt="cart" src="../assets/shopping.svg" class="h-32" />
			<div class="self-center ml-10">
				<p class="text-2xl font-semibold">SHOP</p>
				<p class="text-lg">Earn points every time you shop at any participating merchants. Let them scan your QR code to receive the accumulated Go Volunteer Points (GVP).</p>
			</div>
		</div>
	</div>
	<div class="bg-main-light w-full lg:w-10/12 relative py-10 lg:py-5 px-6 rounded-lg shadow mt-5 lg:mt-16 ml-auto">
		<div class="bg-main rounded-full w-20 h-20 flex justify-center absolute -top-10 left-5">
			<p class="self-center text-4xl font-bold text-white">2</p>
		</div>
		<div class="flex justify-between">
			<div class="self-center ml-5">
				<p class="text-2xl font-semibold">HELP</p>
				<p class="text-lg">Support events by donating your earned Go Volunteer Points (GVP) or by doing a voluntary work.</p>
			</div>
			<img alt="cart" src="../assets/help.svg" class="h-32" />
		</div>
	</div>
	<div class="bg-yellow-light w-full lg:w-10/12 relative py-10 lg:py-5 px-6 rounded-lg shadow mt-5 lg:mt-16 mx-auto">
		<div class="bg-yellow rounded-full w-20 h-20 flex justify-center absolute -top-10 -left-5">
			<p class="self-center text-4xl font-bold text-white">3</p>
		</div>
		<div class="flex justify-start">
			<img alt="cart" src="../assets/reward.svg" class="ml-10 h-32"/>
			<div class="self-center ml-5">
				<p class="text-2xl font-semibold">BE REWARDED</p>
				<p class="text-lg">Every donation and works are appreciated. Level up, earn reward points, and receive certifications for every achievements you make.</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'HowItWorks'
	})
</script>

<style scoped>
</style>
