class PokemonSerializer
  # include FastJsonapi::ObjectSerializer
  # attributes :nickname, :species, :trainer_id
  # # belongs_to :trainer

  def initialize(pokemon_object)
    @pokemon = pokemon_object
  end

  def to_serialized_json
    options = {
      only: [:id, :name, :number, :image, :height, :xaxis, :yaxis, :zindex, :trainer_id]
      # include: [:id, :name]
    }
    @pokemon.to_json(options)
  end
end
