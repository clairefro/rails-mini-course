# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: "Hello World!", desc: "create react app with RoR");
section = Section.create(title: "Chap 1", course: course);

episodes = Episode.create([
  { title:'1 .Setup', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', url: "https://www.youtube.com/embed/tgbNymZ7vqY", section: section },
  { title:'2. Tooling', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', url: "https://www.youtube.com/embed/tgbNymZ7vqY", section: section },
  { title:'3. Something else', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', url: "https://www.youtube.com/embed/tgbNymZ7vqY", section: section },
  { title:'4. Deploy', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquid vel dolore tempora quis laudantium veritatis magnam reiciendis suscipit placeat tempore distinctio, nostrum repellat dolores odit. Necessitatibus incidunt voluptas quae.', url: "https://www.youtube.com/embed/tgbNymZ7vqY", section: section }
])
