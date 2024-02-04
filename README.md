**ANIMAL KINGDOM CLASSIFICATION**
This JavaScript program models a simple classification for the Animal Kingdom, allowing users to interact with the hierarchy through the command line. The classification includes classes such as "Without Backbone" and "With Backbone," with additional details on blood types for specific orders.

**USER INTERACTION:**
The program will prompt you to enter a class ("Without Backbone" or "With Backbone").
Based on your input, it will display information about the selected class, including orders and their blood types.

**CODE STRUCTURE**
The code is organized into classes representing different levels of animal classification:

Animal Class: Base class for animals.
AnimalClass: Represents a level of classification.
Order: Represents an order in the classification hierarchy.
Family: Represents a family in the classification hierarchy.
Genus: Represents a genus in the classification hierarchy.
Species: Represents a species, extending the base Animal class.
Kingdom: Represents the Animal Kingdom, containing animal classes.
The interactWithHierarchy function uses the readline module to enable user interaction through the command line.

**CLASSIFICATIONS**
The classification hierarchy includes classes such as "Without Backbone" and "With Backbone," with specific orders and blood types:

Without Backbone:
Arthropoda (Cold-blooded)

With Backbone:
Fish (Cold-blooded)
Amphibia (Cold-blooded)
Reptiles (Cold-blooded)
Aves (Warm-blooded)
Mammals (Warm-blooded)