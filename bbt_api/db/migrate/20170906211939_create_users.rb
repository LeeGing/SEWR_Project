class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :password_digest
      t.string :email
      t.string :username

      t.timestamps null: false
    end
  end
end
