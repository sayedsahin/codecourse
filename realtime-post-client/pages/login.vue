<template>
	<div>
		<div class="mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-coolGray-50 text-coolGray-800">
			<div class="mb-8 text-center">
				<h1 class="my-3 text-4xl font-bold">Sign in</h1>
				<p class="text-sm text-coolGray-600">Sign in to access your account</p>
			</div>
			<form novalidate="" action="" class="space-y-4 ng-untouched ng-pristine ng-valid">
				<div class="space-y-4">
					<div>
						<label for="email" class="block mb-2 text-sm">Email address</label>
						<input v-model="form.email" type="email" name="email" placeholder="leroy@jenkins.com" class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800">
					</div>
					<div>
						<div class="flex justify-between mb-2">
							<label for="password" class="text-sm">Password</label>
							<a href="#" class="text-xs hover:underline text-coolGray-600">Forgot password?</a>
						</div>
						<input v-model="form.password" type="password" name="password" placeholder="*****" class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800">
					</div>
				</div>
				<div class="space-y-2">
					<div>
						<button @click.prevent="login" type="button" class="w-full px-8 py-3 rounded-md bg-purple-700 text-gray-50">Sign in</button>
					</div>
					<p class="px-6 text-sm text-center text-coolGray-600">Don't have an account yet?
						<a href="#" class="hover:underline text-purple-600">Sign up</a>. 
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
				email: '',
				password: ''
			}
		}
	},

	methods: {
	  login () {
	    this.$auth.loginWith('laravelSanctum', {
	    	data: this.form
	    })
	  }
	}
}
</script>