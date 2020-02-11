class Api::V1::PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render json: @pokemons, status: 200
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: @pokemon, status: 200
  end

  def create
    @pokemon = Pokemon.create(pokemon_params)
    render json: @pokemon, status: 200
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :id, :height, :image)
  end
end
