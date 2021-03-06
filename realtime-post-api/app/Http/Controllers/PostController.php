<?php

namespace App\Http\Controllers;

use App\Events\PostCreated;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only('store');
    }

    // Use skip when created a new post before pagination like twitter
    public function index(Request $request)
    {
        /* Pagination Logic
         1 - 1 * 5 = 0
         2 - 1 * 5 = 5
         3 - 1 * 5 = 10
        */
        
        $skip = $request->get('skip', 0) + ( ($request->get('page') - 1) * 5 );
        $posts = Post::with('user')
            ->take(5)
            ->skip($skip)
            ->latest()
            ->get();
        return (PostResource::collection($posts))->additional([
            'likes' => $posts->mapWithKeys(
                fn ($post) => [$post->id => $post->likes->count()]
            )
        ]);
    }

    public function show(Post $post)
    {
        return (new PostResource($post))->additional([
            'likes' => [$post->id => $post->likes->count()]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'body' => 'required'
        ]);

        $post = $request->user()->posts()->create($request->only('body'));

        broadcast(new PostCreated($post))->toOthers();

        return (new PostResource($post))->additional([
            'likes' => [$post->id => $post->likes->count()]
        ]);
    }
}
