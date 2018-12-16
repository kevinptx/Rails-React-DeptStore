class Api::DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :update, :destroy]

  def index
    render json: Department.all
  end

  def show
    # d = Department.get_department_items(params[:id])
    render json: @department
  end

  def create
    department = Department.new(department_params)
    if department.save
      render json: department
    else
      render json: department.errors
    end
  end

  def update
    if @department.update(department_params)
      render json: @department
    else
      render json: @department.errors
    end
  end

  def destroy
    @department.destroy
  end

  private

  def set_department
    @department = Department.find(params[:id])
  end

  def department_params
    params.require(:department).permit(:name, :description)
  end
end
