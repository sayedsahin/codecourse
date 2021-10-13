<template>
	<div class="container mx-auto px-4 sm:px-8 max-w-3xl">
		<form class="flex w-full max-w-sm space-x-3 mx-auto">
			<div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
				<div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
					Post Edit
				</div>
				<div class="space-x-4 mb-4 text-center">
					<router-link to="/admin/posts">Autosaved</router-link>
					<button @click.prevent="post.published = !post.published" :class="{ 'text-green-600' : post.published }">
						{{ !post.published ? 'Publish' : 'Unpublish' }}
					</button>

					<!-- <router-link :to="{ name: 'post', params: { slug: post.slug } }">Preview</router-link> -->
					<router-link :to="`/posts/${post.slug}`">Preview</router-link>
				</div>
				<div class="grid max-w-xl grid-cols-1 gap-4 m-auto">
					<!-- <div class="col-span-2 lg:col-span-2">
						<div class=" relative ">
							<input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
						</div>
					</div> -->
					<div class="col-span-2 lg:col-span-2">
						<div class="relative flex">
							<input v-model="post.slug" spellcheck="false" @click="$event.target.select()" type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Post Slug"/>
						</div>
					</div>
					<div class="col-span-2">
						<label class="text-gray-700" for="name">
							<ResizeTextarea v-if="post.title">
								<template v-slot:default="{ resize, el }">
									<textarea :ref="el" v-model="post.title" v-on:input="resize" class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter Post Title" name="comment" rows="" cols="40">
										{{post.title}}
									</textarea>
								</template>
							</ResizeTextarea>
							
						</label>
					</div>
					<div class="col-span-2">
						<label class="text-gray-700">
							<Editor v-model:modelValue="post.body" v-model:teaserValue="post.teaser"/>
						</label>
					</div>
					<div class="col-span-2 text-center">
						<button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mb-4">
							Edit
						</button>
						<div class="text-center">
							<router-link to="/admin/posts">Back</router-link>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>

import useAdminPosts from '../../api/useAdminPosts'
import { onMounted, watch, watchEffect } from 'vue'
import _ from 'lodash'
import ResizeTextarea from '../../components/ResizeTextarea.vue'
import Editor from '../../components/Editor.vue'
import slugify from 'slugify'

export default {
	components: {
		ResizeTextarea,
		Editor
	},

	props: {
		uuid: {
			type: String, 
			required: true,
		}
	},

	setup(props){


		const { post, fetchPost, patchPost } = useAdminPosts()

		const updatePost = async () => {
			await patchPost(props.uuid)
		}

		const replaceSlug =  () => {
		    const slug = post.value.slug
		    if (slug.charAt(slug.length - 1) === ' ') {
		    	return
		    }
		    post.value.slug = slug ? slugify(slug, {strict: true }) : post.value.uuid
		 }

		onMounted( async () => {

			await fetchPost(props.uuid)

			watchEffect(() => {
			    replaceSlug()
			 })

			watch(() => _.cloneDeep(post), _.debounce(() => {
				updatePost()
			}, 1000))
		})

		return {
			post
		}
	}
}
</script>