<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
		<div class="mt-10 md:mt-auto my-auto text-center md:text-left">
			<h1 class="text-6xl lg:text-7xl font-extrabold uppercaset">Donate<br />& Volunteer</h1>
			<p class="text-xl mt-6 font-medium">Help the future by shopping</p>
			<p class="mt-3 mb-8">
				Get involve and support non-profit organizations.<br />
				Shop with your favorite merchants to earn donation points.<br />
				Rank up, collect certificates, and earn rewards. 
				<a href="/" class="text-main hover:text-main-dark font-bold transition-all">Join us now!</a>
			</p>
			<router-link to="/register" class="bg-main-dark hover:bg-main px-8 py-2 rounded-full text-lg uppercase font-bold text-white transition-all">Learn More</router-link>
		</div>
		<div id="illustration" class="relative mt-72 md:mt-0">
			<img alt="background" src="../assets/illustration/bg.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
			<img alt="phone" src="../assets/illustration/phone.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
			<img alt="man" src="../assets/illustration/man.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
			<img alt="bag" src="../assets/illustration/bag.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
			<img alt="food" src="../assets/illustration/food.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
			<img alt="drink" src="../assets/illustration/drink.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
			<img alt="cart" src="../assets/illustration/cart.svg" class="absolute inset-y-0 right-0 md:-right-10 m-auto"/>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Landing'
	})
</script>

<style scoped>
	#illustration{
		transform: scale(1);
	}
	@media (max-width: 1199px) {
		#illustration{
			transform: scale(0.8);
		}
	}
</style>
