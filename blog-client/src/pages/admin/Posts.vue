<template>
	<div>
		<div class="container mx-auto px-4 sm:px-8 max-w-3xl">
			<div class="py-8">
				<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<button class="mb-2 py-1 px-3 bg-blue-500 text-gray-100 text-sm rounded-lg focus:border-4 border-blue-300 float-right" @click.prevent="newPost">New Post</button>
					<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table class="min-w-full leading-normal">
							<thead>
								<tr>
									<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
										Title
									</th>
									<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
										Status
									</th>
									<th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="post in posts" :key="post.uuid">
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{{ post.title }}</p>
									</td>
									
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span aria-hidden="true" class="absolute inset-0 opacity-50 rounded-full" :class="{ 'bg-green-200': post.published, 'bg-red-200' : !post.publisted }">
											</span>
											<span class="relative">
												{{ !post.published ? 'Unpublishe' : 'Published' }}
											</span>
										</span>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<router-link to="/" class="bg-white hover:bg-gray-100 text-red-600 font-semibold text-sm py-1 px-1.5 border border-red-600 rounded shadow mr-1">Delete</router-link>
										<router-link :to="{name: 'admin.posts.edit', params: {uuid: post.uuid}}" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-1 px-1.5 border border-gray-400 rounded shadow">Edit</router-link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import useAdminPosts from '../../api/useAdminPosts'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
	setup(){
		const { posts, fetchPosts, createPost } = useAdminPosts()
		const router = useRouter()

		const newPost = async () => {
			let post = await createPost()
			router.replace({name: 'admin.posts.edit', params: { uuid: post.uuid }})
		}

		onMounted(fetchPosts)
		return {
			posts,
			newPost
		}
	},
}
</script>