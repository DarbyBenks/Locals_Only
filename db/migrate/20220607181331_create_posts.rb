class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :img_url
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
