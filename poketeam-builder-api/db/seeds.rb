# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# species_list = Scraper.scrape_list_page


# species_list.each do |species_name|
#   Species.create(name: species_name)
# end


# Species.all.each_with_index do |species, index|
#   pokemon_name = species.name
#   hash = Scraper.scrape_pokemon_page(pokemon_name)
#   species.description = hash[:description]
#   species.pokemon_type = hash[:type]
#   species.number = hash[:number]
#   species.save
# end

Species.create(name: "Bulbasaur", height: 7)
Species.create(name: "Ivysaur", height: 10)
Species.create(name: "Venusaur", height: 20)
