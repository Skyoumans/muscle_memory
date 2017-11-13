class CreateUpperbodies < ActiveRecord::Migration[5.1]
  def change
    create_table :upperbodies do |t|
      t.integer :bpress
      t.integer :bentoverrow
      t.integer :overheadpress
      t.integer :latraise
      t.integer :overheaddbellpress
      t.integer :tricepextension
      t.integer :pullups
      t.string :bicepcurl

      t.timestamps
    end
  end
end
