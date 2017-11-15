Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :workout_sessions, only: [:index, :show, :create] do
        resources :workout_types, only: [:index, :show, :create]
      end
    end
    resources :workout_types, only: [:index, :show, :create] 
    end 
    resources :workout_sessions, only: [:index, :show, :create] do
    end
  end


