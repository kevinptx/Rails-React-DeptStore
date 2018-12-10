class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  before_action :set_department

  def index
    item = @department.items.all
  end

  def show
    render json: @item
  end

  def create
    item = @department.item.new(item_params)
    if item.save
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  def update
    if @item.update(item_params)
      render json: item
    else
      render json: item.errors, status: 422
    end
  end

  def destroy
    @item.destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end
end
