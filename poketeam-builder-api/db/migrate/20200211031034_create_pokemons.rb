class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :image
      t.integer :height
      #add the other attributes in here

      t.timestamps
    end
  end
end
