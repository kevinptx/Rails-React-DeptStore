Department.destroy_all
Item.destroy_all

20.times do
  department = Department.create(
    name: Faker::Commerce.unique.department,
    description: Faker::GreekPhilosophers.quote,
  )
  10.times do
    department.items.create(
      name: Faker::Commerce.unique.product_name,
      description: Faker::Lorem.paragraph,
      price: Faker::Commerce.price,
      image_url: Faker::Avatar.image,
    )
  end
end

print `clear`
puts "20 Departments Seeded with 10 Items each!"
