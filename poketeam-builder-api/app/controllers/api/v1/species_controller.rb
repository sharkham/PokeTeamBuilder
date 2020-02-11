class Api::V1::SpeciesController < ApplicationController
  def index
    @species = Species.all
    render json: @species, status: 200
  end

  def show
    @species = Species.find(params[:id])
    render json: @species, status: 200
  end

  def create
    @species = Species.create(species_params)
    render json: @species, status: 200
  end

  private

  def species_params
    params.require(:species).permit(:name, :id, :height, :image)
  end
end
