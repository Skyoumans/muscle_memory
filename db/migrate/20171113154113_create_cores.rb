class CreateCores < ActiveRecord::Migration[5.1]
  def change
    create_table :cores do |t|
      t.string :crunch
      t.string :vup
      t.string :flutterkick
      t.string :sideplank
      t.string :russiantwist
      t.string :vtuck
      t.string :superman
      t.string :plank
      t.string :birddog

      t.timestamps
    end
  end
end
