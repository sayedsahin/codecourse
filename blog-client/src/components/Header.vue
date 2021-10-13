<template>
	<div>
		<header class="w-full px-4 pt-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
	      <div class="mb-12 text-center">
	        <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900"><router-link to="/">Laravel Vue.Js Blog</router-link></h2>
	        <p class="text-lg text-gray-500">My Lord, increase me in knowledge.</p>
	        <div>
	        	<router-link v-if="!$store.getters.authenticated" to="/login" class="mr-3">Login</router-link>
	        	<router-link v-if="$store.getters.authenticated" to="/admin/posts">Admin</router-link>
	        </div>
	      </div>
	    </header>
	</div>
</template>
