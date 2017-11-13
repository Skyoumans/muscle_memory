class CreateLegsAndBacks < ActiveRecord::Migration[5.1]
  def change
    create_table :legs_and_backs do |t|
      t.integer :deadlift
      t.integer :lyinglegcurl
      t.integer :latraise
      t.integer :tbarrow
      t.integer :widecablerow
      t.integer :dbelllunges

      t.timestamps
    end
  end
end
