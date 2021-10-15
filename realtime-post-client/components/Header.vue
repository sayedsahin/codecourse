<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<template v-if="$auth.loggedIn">
							<a class="nav-link active" href="#">Profile</a>
							<a class="nav-link" href="#" @click.prevent="logout">Logout</a>
						</template>
						<template v-if="!$auth.loggedIn">
							<nuxt-link class="nav-link" :to="{ name: 'login' }">Login</nuxt-link>
							<nuxt-link class="nav-link" to="">Register</nuxt-link>
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