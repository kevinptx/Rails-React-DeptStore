class AddDescriptionToDepartments < ActiveRecord::Migration[5.2]
  def change
    add_column :departments, :description, :string
  end
end
