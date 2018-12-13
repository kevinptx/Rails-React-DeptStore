class AddImageUrlToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :image_url, :text, default: Faker::Avatar.image
  end
end
