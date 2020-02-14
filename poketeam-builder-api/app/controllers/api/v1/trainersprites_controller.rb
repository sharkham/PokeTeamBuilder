class Api::V1::TrainerspritesController < ApplicationController
  def index
    @trainersprites = Trainersprite.all
    render json: @trainersprites, status: 200
  end

  def show
    @trainersprite = Trainersprite.find(params[:id])
    render json: @trainersprite, status: 200
  end

  def create
    @trainersprite = Trainersprite.create(trainersprite_params)
    render json: @trainersprite, status: 200
  end

  private

  def trainersprite_params
    params.require(:trainersprite).permit(:id, :image)
  end
end
