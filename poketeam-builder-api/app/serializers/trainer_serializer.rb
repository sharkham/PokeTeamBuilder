class TrainerSerializer

  def initialize(trainer_object)
    @trainer = trainer_object
  end

  def to_serialized_json
    options = {
      include: {
        pokemons: {
          only: [:id, :name, :number, :image, :icon, :height, :xaxis, :yaxis, :zindex, :position, :trainer_id]
        }
      }
    }
    @trainer.to_json(options)
  end
end
