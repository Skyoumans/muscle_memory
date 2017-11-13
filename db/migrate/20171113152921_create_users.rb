class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password
      t.string :email
      t.float :currentweight
      t.string :profileimg
      t.integer :currentbicepsize
      t.integer :currentthighsize
      t.integer :currentchestsize
      t.integer :currentwaistsize

      t.timestamps
    end
  end
end
