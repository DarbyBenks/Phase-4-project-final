class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :totalLikes
      t.integer :user_id, index: true, foreign_key: true
      t.integer :post_id, index: true, foreign_key: true

      t.timestamps
    end
  end
end
