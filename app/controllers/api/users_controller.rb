class Api::UsersController < ApplicationController
  
  def index
    @users = User.all
    render json: @users
  end

  def create 
    @user = User.new(user_params)
      if @user.save
        render json: @user
      end
  end

  def show
    user_id = params[:id]
    @user = User.find_by_id(user_id)
    render json: @user
  end

  def update
    user_id = params[:id]
    @user = User.find_by_id(user_id)
    @user.update!(user_params)
    render json: @user
  end

  def destroy
    user_id = params[:id]
    @user = User.find_by_id(user_id)
    @user.destroy
    @users = User.all
    render json: @users
    
  end

  private
  def   user_params
    params.require(:user).permit(:name, :username, :password, :email, :currentweight, :profileimg, :currentbicepsize, :currentthighsize, :currentchestsize, :currentwaistsize, :id, :created_at, :updated_at)
  end
  
end
