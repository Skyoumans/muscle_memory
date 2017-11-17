class WorkoutSession < ApplicationRecord
  has_many :workout_types 
  belongs_to :users
end
