class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :famil_name
      t.string :given_name
      t.datetime :birthdate

      t.timestamps
    end
  end
end
