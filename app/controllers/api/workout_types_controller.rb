class Api::WorkoutTypesController < ApplicationController

  def index
    @workout_types = WorkoutType.all
    render json: @workout_types
  end
end
