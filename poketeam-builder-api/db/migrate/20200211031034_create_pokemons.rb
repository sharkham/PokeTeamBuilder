class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.integer :pokedexid
      t.string :name
      t.integer :number
      t.string :image
      t.string :icon
      t.integer :height
      t.integer :xaxis
      t.integer :yaxis
      t.integer :zindex
      t.string :position
      t.belongs_to :trainer, null: false, foreign_key: true

      #add the other attributes in here

      t.timestamps
    end
  end
end
