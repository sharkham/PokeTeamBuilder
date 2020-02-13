class Api::V1::TrainersController < ApplicationController

  def index
    trainers = Trainer.all
    render json: TrainerSerializer.new(trainers).to_serialized_json, status: 200
  end

  def show
    trainer = Trainer.find(params[:id])
    render json: TrainerSerializer.new(trainer).to_serialized_json, status: 200
  end

  def create
    trainer = Trainer.create(trainer_params)
    render json: TrainerSerializer.new(trainer).to_serialized_json, status: 200
  end

  private

  def trainer_params
    params.require(:trainer).permit(:id, :name, :image, :height, :xaxis, :yaxis, :zindex)
  end

end
