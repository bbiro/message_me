Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'chatroom#index'
  get 'login', to: 'sessions#new'
  get 'logout', to: 'session#logout'
  get 'signup', to: 'session#signup'

  get 'chatroom', to: 'chatroom#index'
end
