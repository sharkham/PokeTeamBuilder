class CreateTrainers < ActiveRecord::Migration[6.0]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :image
      t.integer :height
      t.integer :xaxis
      t.integer :yaxis
      t.integer :zindex
      t.string :position

      t.timestamps
    end
  end
end
