class CreateLowerbodies < ActiveRecord::Migration[5.1]
  def change
    create_table :lowerbodies do |t|
      t.integer :legextensions
      t.integer :frontsquat
      t.integer :hacksquat
      t.integer :dbellstepup
      t.integer :romaniandeadlift
      t.integer :lyinglegcurl

      t.timestamps
    end
  end
end
