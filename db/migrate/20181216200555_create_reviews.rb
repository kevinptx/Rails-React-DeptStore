class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body
      t.string :author
      t.integer :rating, default: 3
      t.belongs_to :item, foreign_key: true

      t.timestamps
    end
  end
end
