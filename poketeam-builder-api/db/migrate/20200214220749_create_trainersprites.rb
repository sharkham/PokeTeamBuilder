class CreateTrainersprites < ActiveRecord::Migration[6.0]
  def change
    create_table :trainersprites do |t|
      t.string :image
    end
  end
end
