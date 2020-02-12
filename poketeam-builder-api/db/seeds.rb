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

require 'rest-client'
require 'pry'

pokedex_url = 'https://pokeapi.co/api/v2/pokemon/'

pokedex = RestClient.get 'https://pokeapi.co/api/v2/pokemon/'

386.times do |i|
  num = i+1
  pokedex_entry = RestClient.get "https://pokeapi.co/api/v2/pokemon/#{num}"
  pokedex_entry_json = JSON.parse(pokedex_entry)
  Entry.create(
    name: pokedex_entry_json["name"].capitalize, #capitalize this somewhere
    height: pokedex_entry_json["height"],
    image: "image/#{num}.png"
  )
  # binding.pry
end

#loop from 1-386, for each number, grab the URL from that

# rm_array = JSON.parse(rm)[“results”]
# rm_array.each do |character|
#   Character.create(
#   name: character[“name”],
#   status: character[“status”],
#   species: character[“species”],
#   gender: character[“gender”],
#   image: character[“image”]
#   )
#  end

# Entry.create(name: "Bulbasaur", height: 7, image: "image/1.png")
# Entry.create(name: "Ivysaur", height: 10, image: "image/2.png")
# Entry.create(name: "Venusaur", height: 20, image: "image/3.png")
# Entry.create(name: "Charmander", height: 6, image: "image/4.png")
# Entry.create(name: "Charmeleon", height: 11, image: "image/5.png")
# Entry.create(name: "Charizard", height: 17, image: "image/6.png")
# Entry.create(name: "Squirtle", height: 5, image: "image/7.png")
# Entry.create(name: "Wartortle", height: 10, image: "image/8.png")
# Entry.create(name: "Blastoise", height: 16, image: "image/9.png")

red = Trainer.create(name: "Red", height: 15)
blue = Trainer.create(name: "Blue", height: 16)

# red.pokemons.build(name: "Bulbasaur", number: 1, height: 7)
# red.pokemons.build(name: "Ivysaur", number: 2, height: 10)
# red.save

blue.pokemons.build(name: "Blastoise", number: 1, height: 16)
blue.pokemons.build(name: "Wartortle", number: 2, height: 10)
blue.pokemons.build(name: "Charizard", number: 3, height: 17)
blue.save


