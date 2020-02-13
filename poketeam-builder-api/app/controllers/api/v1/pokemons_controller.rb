class Api::V1::PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render json: PokemonSerializer.new(@pokemons).to_serialized_json, status: 200
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: PokemonSerializer.new(@pokemon).to_serialized_json, status: 200
  end

  def create
    @pokemon = Pokemon.create(pokemon_params)
    render json: PokemonSerializer.new(@pokemon).to_serialized_json, status: 200
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    @pokemon.update(pokemon_params)
  end


  def destroy
    Pokemon.find_by(id: params[:id]).destroy
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:id, :name, :number, :image, :height, :xaxis, :yaxis, :zindex, :trainer_id)
  end
end
