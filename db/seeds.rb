Department.destroy_all
Item.destroy_all

20.times do
  d = Department.create(
    name: Faker::Commerce.department,
    description: Faker::Seinfeld.quote,
  )
  10.times do
    i = d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::GreekPhilosophers.quote,
      price: Faker::Commerce.price,
      image_url: Faker::Avatar.image,
    )
    10.times do
      i.reviews.create(
        title: Faker::BreakingBad.episode,
        body: Faker::BackToTheFuture.quote,
        rating: rand(1..5),
        author: Faker::BackToTheFuture.character,
      )
    end
  end
end

print `clear`
puts "20 Departments Seeded, 10 Items with 10 Reviews!"
