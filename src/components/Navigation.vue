<template>
	<div id="nav" class="tracking-wide text-base font-medium bg-main-light lg:bg-white px-7">
		<div class="container mx-auto">
			<div class="block lg:flex px-5 lg:px-0 py-5 relative">
				<div class="mr-auto self-center">
					<router-link to="/" class="text-xl">Go<span class="font-extrabold">Volunteer</span></router-link>
				</div>
				<div class="hidden lg:block">
					<router-link to="/" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Home</router-link>
					<router-link to="/events" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Events</router-link>
					<router-link to="/merchants" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Merchants</router-link>
					<router-link to="/login" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Login</router-link>
					<router-link to="/register" class="block lg:inline text-center lg:text-left my-4 lg:my-0 bg-main-dark hover:bg-main ml-0 lg:ml-8 self-center px-6 py-2 rounded-full text-white transition-all">Register</router-link>
				</div>
				<div class="block lg:hidden">
					<button @click="menuActive = !menuActive" class="focus:outline-none absolute top-5 right-3"><img src="../assets/menu.svg" alt="" class="w-7"></button>
					<div v-show="!menuActive" class="w-full lg:w-auto h-full lg:h-auto p-5 lg:p-0">
						<router-link to="/" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Home</router-link>
						<router-link to="/events" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Events</router-link>
						<router-link to="/merchants" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Merchants</router-link>
						<router-link to="/login" class="block lg:inline text-center lg:text-left my-4 lg:my-0 ml-0 lg:ml-16 self-center">Login</router-link>
						<router-link to="/register" class="block lg:inline text-center lg:text-left my-4 lg:my-0 bg-main-dark hover:bg-main ml-0 lg:ml-8 self-center px-6 py-2 rounded-full text-white transition-all">Register</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Navigation',
		data: ()=>{
          return {  
			  menuActive: false,
		  }
        }
	})
</script>

<style scoped>
</style>
