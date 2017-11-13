class CreateChestAndArms < ActiveRecord::Migration[5.1]
  def change
    create_table :chest_and_arms do |t|
      t.integer :bpress
      t.integer :dbellpress
      t.integer :seatedmachinechestpress
      t.integer :inclinebenchcablefly
      t.integer :barbellcurl
      t.integer :standingbicepcablecurl

      t.timestamps
    end
  end
end
