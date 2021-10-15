<template>
	<div>
		<a href="" @click.prevent="login">Login</a>
	</div>
</template>

<script>
export default {

	name: 'login',

	data () {
		return {

		}
	},

	methods: {
	  login () {
	    this.$auth.loginWith('laravelSanctum', {
			  data: {
			    email: 'sayed@gmail.com',
			    password: 'password'
			  }
			})
	  }
	}
}
</script>