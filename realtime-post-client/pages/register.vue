<template>
	<div>
		<div class="mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-coolGray-50 text-coolGray-800">
			<div class="mb-8 text-center">
				<h1 class="my-3 text-4xl font-bold">Register</h1>
				<p class="text-sm text-coolGray-600">Create a new account</p>
			</div>
			<form novalidate="" action="" class="space-y-4 ng-untouched ng-pristine ng-valid">
				<div class="space-y-4">
					<div>
						<label for="email" class="block mb-2 text-sm">Name</label>
						<input v-model="form.name" type="email" name="name" placeholder="John Doe" class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800">
					</div>
					<div>
						<label for="email" class="block mb-2 text-sm">Email address</label>
						<input v-model="form.email" type="email" name="email" placeholder="john doe@jenkins.com" class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800">
					</div>
					<div>
						<div class="flex justify-between mb-2">
							<label for="password" class="text-sm">Password</label>
						</div>
						<input v-model="form.password" type="password" name="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800">
					</div>
					<div>
						<div class="flex justify-between mb-2">
							<label for="password_confirmation" class="text-sm">Confirm Password</label>
						</div>
						<input v-model="form.password_confirmation" type="password" name="password_confirmation" placeholder="*****" class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800">
					</div>
				</div>
				<div class="space-y-2">
					<div>
						<button @click.prevent="register" type="button" class="w-full px-8 py-3 rounded-md bg-purple-700 text-gray-50">Register</button>
					</div>
					<p class="px-6 text-sm text-center text-coolGray-600">You have already account?
						<nuxt-link :to="{name: 'login'}" class="hover:underline text-purple-600">Login</nuxt-link>. 
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {

	name: 'login',

	data () {
		return {
			form: {
				name: '',
				email: '',
				password: '',
				password_confirmation: ''
			}
		}
	},

	methods: {
	  async register () {
	  	try{
		  	// Register
		  	await this.$axios.get('sanctum/csrf-cookie');
		  	await this.$axios.post('register', this.form);

		  	// Login
		    await this.$auth.loginWith('laravelSanctum', {
		    	data: {
		    		'email': this.form.email,
		    		'password': this.form.password
		    	}
		    });
	  	}catch(e){
	  		// 
	  	}
	  }
	}
}
</script>