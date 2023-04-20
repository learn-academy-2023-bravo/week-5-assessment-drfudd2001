# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

---

### 1. What does calling super do in a Ruby class?

Your answer:

In Ruby, super is like calling the same method in the parent class when you're in a subclass. It lets the subclass use the same method from the parent class and add extra behavior to it if needed. It's like borrowing something from your parent and adding your own touch to it.

Researched answer:

In Ruby, calling super in a class is used to invoke the same-named method from the superclass, allowing the subclass to inherit and extend the behavior of the parent class's method. Taking a fictional example inspired by Super Mario Bros, let's consider a Player class as the superclass and a Mario class as the subclass.
```ruby
class Player
  def jump
    puts "Player jumps"
  end
end

class Mario < Player
  def jump
    super # calling the 'jump' method from the parent class
      puts "Mario jumps higher" 
  end
end

mario = Mario.new
mario.jump
```
In this example, the Player class has a jump method that prints "Player jumps". The Mario class inherits from the Player class and overrides the jump method. The super call within the Mario class invokes the jump method from the Player class, allowing Mario to extend the behavior of the parent class's method by adding additional code after the super call.

When mario.jump is called, it will output:
```ruby
Player jumps
Mario jumps higher
```
As you can see, the jump method from the Player class is called first due to the super call in the Mario class, followed by the additional code in the Mario class's jump method. This allows Mario to inherit the behavior of the parent class's method and extend it with its own modifications.

---

### 2. What is a gem?

Your answer:

In Ruby, a gem is a pre-packaged library or software that can be added to Ruby projects to extend their functionality.

Researched answer:

In Ruby, a gem is like a power-up item from Sonic the Hedgehog. In the game, Sonic can collect power-up items like speed shoes, shields, or invincibility stars that enhance his abilities and help him overcome obstacles. Similarly, in Ruby, gems are packages of code that can be installed and integrated into a Ruby project, providing additional functionalities or features to the application.

For example, the 'rails' gem is a popular Ruby gem that provides a framework for building web applications. Just like how power-up items in Sonic the Hedgehog enhance Sonic's abilities, the 'rails' gem enhances a Ruby application's ability to build robust and scalable web applications by providing pre-built functions and conventions for developing web applications.

Another example is the 'faker' gem, which is a popular Ruby gem for generating fake data for testing and development purposes. Similar to how power-up items in Sonic the Hedgehog give Sonic an advantage, the 'faker' gem gives developers an advantage by providing ready-made functions for generating realistic fake data in Ruby applications, saving time and effort in creating test data.

In summary, just like power-up items in Sonic the Hedgehog enhance Sonic's abilities, gems in Ruby provide pre-built functionalities that can be added to Ruby projects to extend their capabilities and make development tasks easier and more efficient.

---

### 3. What is a relational database? Are there other kinds of databases?

Your answer:

A relational database is like a spreadsheet with tables, where data is organized in rows and columns with defined relationships. Another type of database is a NoSQL database. I'm sure there are others but at this time I have no knowledge of what they are.

Researched answer:

A relational database is like a city planning office in Cities: Skylines. It stores data in tables with rows and columns, where relationships between data elements are defined by keys. Just like how the city planning office organizes data in tables with different attributes for each building or infrastructure.

On the other hand, other types of databases, such as flat-file, hierarchical, network, and NoSQL databases, are like different ways of organizing data in Cities: Skylines based on data models and structures. For example:

Flat-file database: It's like a simple text file with data separated by delimiters, similar to how a list of building information may be stored in a text file in Cities: Skylines.

Hierarchical database: It's like a tree-like structure in Cities: Skylines, where buildings and infrastructure are organized in a hierarchy with parent and child nodes, similar to how different types of buildings are organized under a specific category or zone.

Network database: It's like a more complex tree-like structure in Cities: Skylines, where buildings and infrastructure can have multiple connections and relationships with other elements, similar to how different buildings may be interconnected with roads, power lines, or water pipes in the game.

NoSQL database: It's like using different data models, such as key-value, document, column-family, or graph, to store and manage data in different ways in Cities: Skylines. For example, using a key-value model to store data on available resources or using a graph model to represent the relationships between different districts or neighborhoods in the city.

In summary, a relational database is one way of organizing data, while other types of databases provide different approaches based on data models and structures, just like how different methods of organizing data are used in Cities: Skylines to manage the virtual city efficiently.

---

### 4. What are primary keys? Why are they important?

Your answer:

Primary keys are unique identifiers used in a relational database to uniquely identify each row in a table. They are important because they ensure that each row in a table has a unique identity, which helps to uniquely identify and differentiate each record in the table. Primary keys are crucial for maintaining data integrity, enabling efficient data retrieval, and establishing relationships between tables in a relational database. In simple terms, primary keys are like ID cards for database records, ensuring that each record has a unique identity and can be easily referenced and linked to other records in the database.

Researched answer:

In Crash Bandicoot, primary keys are like the unique serial numbers or identifiers assigned to each crate in the game. Just like how each crate in the game has a unique identifier to differentiate it from other crates, primary keys in a relational database are unique identifiers that distinguish each row in a table.

Primary keys are important in a database because they ensure data integrity and help establish relationships between different tables. Just as the unique identifiers on the crates help maintain the integrity of the crates' identity in the game, primary keys prevent duplicate or ambiguous data entries in a table and ensure that each row has a unique identity.

Moreover, primary keys are crucial for efficient data retrieval and linking data across tables. Just like how Crash Bandicoot needs to quickly locate a specific crate using its unique identifier, databases use primary keys to quickly locate and retrieve specific rows of data. Primary keys also serve as reference points for establishing relationships between different tables in a relational database, allowing data to be linked and combined based on their unique identifiers.

In summary, primary keys are like unique identifiers assigned to each row in a table in a relational database, similar to how crates have unique identifiers in Crash Bandicoot. They are important for maintaining data integrity, enabling efficient data retrieval, and establishing relationships between tables, just as they help identify and differentiate crates in the game.

---

### 5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

HTTP verbs are actions used in HTTP protocol for resources. 
Corresponding CRUD actions:  POST (Create), GET (Read), PUT (Update), DELETE (Delete).

Researched answer:

HTTP verbs, also known as HTTP methods, are the standard set of actions used in the HTTP protocol to perform operations on resources, such as web pages, files, or API endpoints. Here are some examples using "The Sims" as a reference:

GET: Corresponds to the "Read" action in CRUD. It retrieves information or data from a resource, without modifying it. For example, when you request to view a Sim's profile information from the game's server, it would use the GET method to retrieve that data.

POST: Corresponds to the "Create" action in CRUD. It submits data to be processed by the resource identified by the URL. For example, when you create a new Sim character in the game, it would use the POST method to send the character's information to the server for creation.

PUT: Corresponds to the "Update" action in CRUD. It updates an existing resource with new data. For example, when you modify a Sim's attributes or properties, such as changing their name or appearance, it would use the PUT method to update that information on the server.

DELETE: Corresponds to the "Delete" action in CRUD. It requests to remove or delete a resource. For example, when you delete a Sim character from your game, it would use the DELETE method to send a request to the server to delete that character's data.

PATCH: Corresponds to a partial update of a resource, where only the changes or modifications are sent to the server, instead of sending the entire resource. For example, when you update only the Sim's skill level or relationship status, it would use the PATCH method to send only the changes to the server, rather than sending the entire Sim's data.

In summary, HTTP verbs are the standard set of actions used in the HTTP protocol to perform operations on resources, and their corresponding CRUD actions are: GET for Read, POST for Create, PUT for Update, DELETE for Delete, and PATCH for Partial Update.

---

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

### 1. Model validations:

Model validation is like a safety net for data in an application, such as in a video game like God of War or Final Fantasy. It ensures that the data entered or submitted by users or other parts of the application meets certain criteria or rules before it is accepted and stored in the system. This helps maintain data integrity, accuracy, and consistency. For example, it can prevent invalid data from being saved in the game, such as an invalid character name, an incorrect weapon type, or an invalid quest status. Model validation helps ensure that the data in the application is valid and reliable, reducing the risk of errors or inconsistencies that could impact the functionality or performance of the application.

---

### 2. RESTful routes:

RESTful routes are a standardized way of defining URLs for web resources, allowing for efficient access and manipulation of those resources. In the context of "Far Cry 3", RESTful routes could be used to define URLs for various game elements, such as missions, characters, weapons, and locations. For example:

GET /missions: Retrieves a list of all missions in the game.
GET /missions/1: Retrieves the details of the mission with ID 1.
POST /missions: Creates a new mission in the game.
PUT /missions/1: Updates the details of the mission with ID 1.
DELETE /missions/1: Deletes the mission with ID 1 from the game.
By adhering to RESTful routes, "Far Cry 3" can have a well-organized and consistent way of accessing and manipulating game resources, making it easier to develop, maintain, and interact with the game world.

---

### 3. ERB:

ERB, which stands for Embedded Ruby, is a templating language commonly used in web development. It allows developers to embed Ruby code within HTML files to dynamically generate content. In the context of "Street Fighter", ERB could be used to create dynamic web pages that display game-related information such as character profiles, move lists, and game statistics. For example, a character profile page could use ERB to fetch and display data about a specific Street Fighter character, such as their name, image, biography, and special moves, by combining HTML markup with Ruby code to fetch and display the relevant information dynamically. This allows developers to create dynamic and interactive web pages that can be updated with fresh content based on data stored in a database or other data sources.

##### [  Templating is a way to create reusable structures for displaying content on the web. It allows developers to separate the design (how things look) from the data (what things are), making it easier to create dynamic and consistent web pages without duplicating code.  ]

---

### 4. Params:

Params are like messages that are sent between different parts of a program or system. When you use a website or an app, you often enter information, such as filling out a form or clicking on a link. This information is sent to the server, which uses it to process your request and provide you with the appropriate response. This information is called "params." Params can include things like your name, email address, or the actions you want to perform on the website or app. They are important for websites and apps to work correctly and provide you with the content or functionality you need.

---

### 5. API:

An API is like a Pokédex for developers, allowing them to request and retrieve data about Pokémon in a standardized way from a remote server, such as the PokéAPI. It makes it easier for developers to access and use data from remote sources in their applications without having to gather and organize the data themselves.

---
