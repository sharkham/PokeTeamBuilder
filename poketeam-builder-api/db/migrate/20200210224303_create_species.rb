class CreateSpecies < ActiveRecord::Migration[6.0]
  def change
    create_table :species do |t|
      t.string :name
      t.string :image
      t.integer :height
      t.timestamps
    end
  end
end
