# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN = "This is the way..." - Paz Vizla (RIP)

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Pseudo code
    # Use the select method in Ruby, which returns a new array containing elements that satisfy a given condition.
    # Pass a block that checks if each word in the words array includes the given letter, case-insensitive.
    # Use the downcase method to ensure that the comparison is case-insensitive.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def words_containing_letter(words, letter)
    filtered_words = words.select { |word| word.downcase.include?(letter.downcase) }
    return filtered_words
end

p words_containing_letter(beverages_array, letter_o) # Output: ['coffee', 'soda water']

p words_containing_letter(beverages_array, letter_t) # Output: ['tea', 'water', 'soda water']



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Pseudo code:
    # Flatten the nested arrays and get all values
    # Sort the values in alphabetical order

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def ordered_states_unleashed(hash)
    values = hash.values.flatten
    values.sort!
    return values
end

p ordered_states_unleashed(us_states) # ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Pseudo code:
    # Define a Bike class with an initialize method that takes in model, wheels, and current_speed as arguments.
    # Inside the initialize method, set instance variables @model, @wheels, and @current_speed to the corresponding arguments.
    # Define a bike_info method that returns a string with the information of the bike object, using the instance variables @model, @wheels, and @current_speed.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
    # Define a pedal_faster method that takes in speed_increase as an argument.
    # Inside the pedal_faster method, increment the @current_speed instance variable by speed_increase.
    # Define a brake method that takes in speed_decrease as an argument.
    # Inside the brake method, decrement the @current_speed instance variable by speed_decrease.
    # Use the max method to set the @current_speed to the maximum of 0 and its current value, ensuring that it doesn't go negative.

    def pedal_faster(speed_increase)
        @current_speed += speed_increase
    end

    def brake(speed_decrease)
        @current_speed -= speed_decrease
        @current_speed = [0, @current_speed].max
    end
end

that_bike = Bike.new('Trek')
p that_bike.bike_info # "The Trek bike has 2 wheels and is going 0 mph."

that_bike.pedal_faster(10)
p that_bike.bike_info # "The Trek bike has 2 wheels and is going 10 mph."

that_bike.pedal_faster(18)
p that_bike.bike_info # "The Trek bike has 2 wheels and is going 28 mph."

that_bike.brake(5)
p that_bike.bike_info # "The Trek bike has 2 wheels and is going 23 mph."

that_bike.brake(25)
p that_bike.bike_info # "The Trek bike has 2 wheels and is going 0 mph."