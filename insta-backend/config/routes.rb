Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :posts
  resources :users

  get '/signin', to: 'session#new', as: 'signin'
  post '/session', to: 'session#create', as: 'session'
  delete '/logout' => 'session#destroy'
  get '/logout' => 'session#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
