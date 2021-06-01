class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title,       null: false, default: ""
      t.string :description, null: false, default: ""
      t.string :url,         null: true,  default: ""

      t.timestamps
    end
  end
end
