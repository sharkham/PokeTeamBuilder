class Api::V1::EntriesController < ApplicationController
  def index
    @entries = Entry.all
    render json: @entries, status: 200
  end

  def show
    @entry = Entry.find(params[:id])
    render json: @entry, status: 200
  end

  def create
    @entry = Entry.create(entry_params)
    render json: @entry, status: 200
  end

  private

  def entry_params
    params.require(:entry).permit(:name, :id, :height, :image, :icon)
  end
end
