Department.delete_all
Item.delete_all

5.times do
  department = Department.create(
    name: Faker::Commerce.unique.department
  )   
  50.times do
    department.items.create(
      name: Faker::Commerce.unique.product_name,
      description: Faker::Lorem.paragraph,
      price: Faker::Commerce.price
    )
  end
end