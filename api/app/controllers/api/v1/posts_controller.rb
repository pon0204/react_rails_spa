class Api::V1::PostsController < ApplicationController

  def index
    posts = Post.all
    
    render json: {
      posts: posts
    }, status: :ok
  end

  def show
    posts = Post.find(params[:id])
    render json: {
      posts: [posts]
    }, status: :ok
  end
end
