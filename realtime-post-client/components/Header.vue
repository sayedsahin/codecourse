<template>
	<div>
		<nav class="bg-white shadow dark:bg-gray-800">
			<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div class="flex items-center justify-between">
					<div>
						<nuxt-link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Home</nuxt-link>
					</div>

					<!-- Mobile menu button -->
					<div class="flex md:hidden">
						<button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
							<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
								<path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
							</svg>
						</button>
					</div>
				</div>

				<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
				<div class="items-center md:flex">
					<div class="flex flex-col md:flex-row md:mx-6">
						<template v-if="$auth.loggedIn">
							<nuxt-link :to="{name: 'blog'}" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Blog</nuxt-link>
							<a @click.prevent="logout" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="/logout">Logout</a>
						</template>
						<template v-if="!$auth.loggedIn">
							<nuxt-link class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" :to="{ name: 'login' }">Login</nuxt-link>
							<nuxt-link :to="{name: 'register'}" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Register</nuxt-link>
						</template>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {

		name: 'Header',

		data () {
			return {

			}
		},
		methods: {
			async logout () {
				await this.$auth.logout()
		    // this.$router.replace({name: 'index'})
		}
	}
}
</script>