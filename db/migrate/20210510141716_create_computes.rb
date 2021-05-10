class CreateComputes < ActiveRecord::Migration[6.1]
  def change
    create_table :computes do |t|
      t.string :name
      t.string :power
      t.string :memory
      t.string :speed
      t.string :storage

      t.timestamps
    end
  end
end
