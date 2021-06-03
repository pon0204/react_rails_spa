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
      posts: posts
    }, status: :ok
  end

  def create
    post = User.first.posts.build(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def destroy
    if Post.destroy(params[:id])
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :caption,:date)
  end

end
