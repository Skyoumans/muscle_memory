class User < ApplicationRecord
  has_many :workout_sessions
end
