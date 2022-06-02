class SessionController < ApplicationController
  skip_before_action :user_is_authenticated, only: [  :destroy]
  
  def create
    # binding.pry
    @user = User.find_by(username: params[:username])
    
      if @user && @user.authenticate(params[:password])  
        session[:user_id] = @user.id
        # binding.pry
        render json: @user
      else 
        render json: @user.errors, status: :unprocessable_entity
      end
  end 


  def destroy 
    # binding.pry
    session.delete("user_id")
    # session.id.clear
    session[:user_id] = nil 
    # binding.pry
    
  end 

  private 

  

  def user_params
    params.permit(:username, :password)
  end
end
