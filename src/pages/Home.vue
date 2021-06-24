<template>
	<section id="landing" class="container block md:flex flex-wrap mx-auto px-7">
		<Landing />
	</section>
	<section class="bg-gray px-7">
		<div class="container mx-auto px-7 lg:px-0 py-20">
			<EventList program="donation" />
			<div class="w-full block text-center text-md uppercase font-semibold text-main-dark hover:text-white mt-20 transition-all">
				<router-link to="/register" 
					class="border-2 bg-white hover:bg-main-dark border-main-dark px-14 py-2 rounded-full transition-all">
					View More
				</router-link>
			</div>
		</div>
	</section>
	<section class="bg-violet relative">
		<div class="container mx-auto py-14">
			<h2 class="text-4xl text-center text-white font-semibold uppercase">How it <span class="font-extrabold">works</span>?</h2>
			<div class="py-10 px-10 lg:px-24 mt-10">
				<HowItWorks />
			</div>
		</div>
	</section>
	<section class="bg-gray">
		<div class="container mx-auto py-14">
			<h2 class="text-4xl text-center font-semibold uppercase">Top Brands</h2>
			<p class="text-center mt-3">Be one of our merchant. <router-link to="/" class="text-main font-medium hover:text-main-dark">Merchant Application</router-link></p>
			<div class="grid grid-cols-3 md:grid-cols-6 gap-2 px-26 mt-10">
				<router-link to="/"><img src="https://i.imgur.com/D6yyM91.png" alt="brand logo" class="w-3/4 lg:w-1/2 mx-auto"></router-link>
				<router-link to="/"><img src="https://i.imgur.com/BbUFQvw.png" alt="brand logo" class="w-3/4 lg:w-1/2 mx-auto"></router-link>
				<router-link to="/"><img src="https://i.imgur.com/QtCmDKW.png" alt="brand logo" class="w-3/4 lg:w-1/2 mx-auto"></router-link>
				<router-link to="/"><img src="https://i.imgur.com/aymHk7c.png" alt="brand logo" class="w-3/4 lg:w-1/2 mx-auto"></router-link>
				<router-link to="/"><img src="https://i.imgur.com/chYF5Fw.png" alt="brand logo" class="w-3/4 lg:w-1/2 mx-auto"></router-link>
				<router-link to="/"><img src="https://i.imgur.com/AZuNfwk.png" alt="brand logo" class="w-3/4 lg:w-1/2 mx-auto"></router-link>
			</div>
		</div>
	</section>
	<section class="bg-gray">
		<div class="container mx-auto py-10">
			<div class="w-11/12 xl:w-8/12 mx-auto">
				<JoinUs />
			</div>
		</div>
	</section>
	<section>
		<div class="container mx-auto py-14">
			<h2 class="text-4xl text-center font-semibold uppercase">GVP Ranking</h2>
			<div class="grid grid-rows-10 lg:grid-rows-5 grid-flow-col gap-4 text-violet mt-10 px-5 lg:px-16">
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">1</p>
						<div class="self-center mx-4 relative">
							<img src="../assets/crown-1.png" alt="crown" class="absolute right-0 -top-1">
							<img src="https://i.imgur.com/NGw50lS.jpg" alt="@*********ler" class="h-12 w-12 object-cover border-4 border-gold rounded-full">
						</div>
						<p class="self-center">@*********ler</p>
					</div>
					<p class="self-center justify-self-end text-right">9,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">2</p>
						<div class="self-center mx-4 relative">
							<img src="../assets/crown-2.png" alt="crown" class="absolute right-0 -top-1">
							<img src="https://i.imgur.com/00bOkpf.jpg" alt="@*********een" class="h-12 w-12 object-cover border-4 border-silver rounded-full">
						</div>
						<p class="self-center">@*********een</p>
					</div>
					<p class="self-center justify-self-end text-right">8,500 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">3</p>
						<div class="self-center mx-4 relative">
							<img src="../assets/crown-3.png" alt="crown" class="absolute right-0 -top-1">
							<img src="https://i.imgur.com/voXSkv3.jpg" alt="@********ock" class="h-12 w-12 object-cover border-4 border-bronze rounded-full">
						</div>
						<p class="self-center">@**********ock</p>
					</div>
					<p class="self-center justify-self-end text-right">7,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">4</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/abQuizn.jpg" alt="@*********ing" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@*********ing</p>
					</div>
					<p class="self-center justify-self-end text-right">6,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">5</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/toTgg0w.jpg" alt="@*******ani" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@*******ani</p>
					</div>
					<p class="self-center justify-self-end text-right">5,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">6</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/mdDQvWJ.png" alt="@********oar" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@********oar</p>
					</div>
					<p class="self-center justify-self-end text-right">4,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">7</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/aJiCZqC.jpg" alt="@******sie" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@******sie</p>
					</div>
					<p class="self-center justify-self-end text-right">3,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">8</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/Gmbqo1W.jpg" alt="@**********tos" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@**********tos</p>
					</div>
					<p class="self-center justify-self-end text-right">2,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">9</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/bQC5p73.jpg" alt="@*********xyz" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@*********xyz</p>
					</div>
					<p class="self-center justify-self-end text-right">1,000 <span class="font-extrabold">GVP</span></p>
				</div>
				<div class="flex justify-between px-16">
					<div class="flex justify-start">
						<p class="self-center font-bold w-3 text-xl">10</p>
						<div class="self-center mx-4 relative">
							<img src="https://i.imgur.com/D66h78X.jpg" alt="@******mae" class="h-12 w-12 object-cover rounded-full">
						</div>
						<p class="self-center">@******mae</p>
					</div>
					<p class="self-center justify-self-end text-right">500 <span class="font-extrabold">GVP</span></p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Landing from '../components/Landing.vue'
	import EventList from '../components/EventList.vue'
	import HowItWorks from '../components/HowItWorks.vue'
	import JoinUs from '../components/JoinUs.vue'
	export default defineComponent({
		name: 'Home',
		components: {
			Landing,
			EventList,
			HowItWorks,
			JoinUs,
		}
	})
</script>

<style scoped>
	#landing{
		height: 100vh;
    	min-height: 900px;
	}
	@media (min-width: 1023px) {
		#landing{
			height: calc(100vh - 150px);
		}
	}
</style>
