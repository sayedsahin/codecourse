<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only('store');
    }

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
        return PostResource::collection($posts);
    }

    public function store(Request $request)
    {
        $request->validate([
            'body' => 'required'
        ]);

        $post = $request->user()->posts()->create($request->only('body'));
        return new PostResource($post);
    }
}
