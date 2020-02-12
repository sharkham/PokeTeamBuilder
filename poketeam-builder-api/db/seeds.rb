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

Entry.create(name: "Bulbasaur", height: 7)
Entry.create(name: "Ivysaur", height: 10)
Entry.create(name: "Venusaur", height: 20)
Entry.create(name: "Charmander", height: 6)
Entry.create(name: "Charmeleon", height: 11)
Entry.create(name: "Charizard", height: 17)
Entry.create(name: "Squirtle", height: 5)
Entry.create(name: "Wartortle", height: 10)
Entry.create(name: "Blastoise", height: 16)

red = Trainer.create(name: "Red", height: 15)
blue = Trainer.create(name: "Blue", height: 16)

red.pokemons.build(name: "Bulbasaur", number: 1, height: 7)
red.pokemons.build(name: "Ivysaur", number: 2, height: 10)
red.save

blue.pokemons.build(name: "Blastoise", number: 1, height: 16)
blue.pokemons.build(name: "Wartortle", number: 2, height: 10)
blue.pokemons.build(name: "Charizard", number: 3, height: 17)
blue.save



Pokemon.create(name: "Bulbasaur", height: 7)
