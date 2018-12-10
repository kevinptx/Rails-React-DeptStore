class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  
  def index
    render json: Item.all
  end

  def show
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
