class CreateWorkoutSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :workout_sessions do |t|
      t.datetime :timestart
      t.datetime :timeend
      t.string :workout
      t.integer :intensity
      t.date :date

      t.timestamps
    end
  end
end
