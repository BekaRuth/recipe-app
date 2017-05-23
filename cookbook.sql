
create database cookbook;
use cookbook;

create table Recipe (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(75), 
	description VARCHAR(200),
	image VARCHAR(100))
	ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table Ingredient (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(50)) 
	ENGINE=InnoDB DEFAULT CHARSET=utf8; 
	
create table RecipeIngredient (recipe_id INT NOT NULL, 
	ingredient_id INT NOT NULL, 
	amount VARCHAR(100), 
	CONSTRAINT fk_recipe FOREIGN KEY(recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE,	
	CONSTRAINT fk_ingredient FOREIGN KEY(ingredient_id) REFERENCES Ingredient(id))
	ENGINE=InnoDB DEFAULT CHARSET=utf8; 

create table RecipeInstruction (recipe_id INT NOT NULL,
	step INT,
	instruction VARCHAR(500),
	CONSTRAINT fk_recipe_id FOREIGN KEY(recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE)
	ENGINE=InnoDB DEFAULT CHARSET=utf8; 
	
INSERT INTO Ingredient (name) VALUES('Chicken Breast(s)'), ('Lemon(s)'), ('Olive Oil'), ('Dried Oregano'), ('Fresh Parsley'), ('Salt'), ('Pepper'), ('Flour'), ('Baking Soda'), ('Baking powder'), ('Butter'), ('White Sugar'), ('Egg(s)'), ('Vanilla Extract'), ('Mayonnaise'), ('Italian Bread Slice(s)'), ('Kraft Single(s)'), ('Crescent Roll(s)'), ('Semisweet Chocolate Chip(s)'), ('Avocado(s)'), ('Lime(s)'), ('Chicken Broth'), ('Cornstarch'), ('Tuna'), ('Brown Sugar'), ('Peanut Butter'), ('Salsa'), ('Onion(s)'), ('Tomatoe(s)');

INSERT INTO Recipe (name, description, image) VALUES('Lemon Herb Chicken', 'A simple chicken recipe, good with salad', 'lemonHerbChicken');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 1, 'Two');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 2, 'One');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 3, '1 Tablespoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 4, 'Two');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 5, 'One');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 6, 'One');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (1, 7, 'One');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (1,1,'Cut lemon in half, and squeeze juice from 1/2 lemon on chicken. Season with salt to taste. Let sit while you heat oil in a small skillet over medium low heat.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (1,2,'When oil is hot, put chicken in skillet. As you saute chicken, add juice from other 1/2 lemon, pepper to taste, and oregano. Saute for 5 to 10 minutes each side, or until juices run clear. Serve with parsley for garnish.');



INSERT INTO Recipe (name, description, image) VALUES('Sugar Cookies', 'A simple dessert', 'sugarCookies');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 8, '2 3/4 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 9, 'One Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 10, '1/2 Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 11, 'One Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 12, '1 1/2 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 13, 'One');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (2, 14, 'One Tablespoon');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (2,1,'Preheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (2,2,'In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (2,3,'Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks.');


INSERT INTO Recipe (name, description, image) VALUES('Grilled Cheese', 'Easy meal for college students', 'grilledCheese');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (3, 15, '1/4 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (3, 16, '8');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (3, 17, '8');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (3,1,'Spread 1 1/2 tsp. mayonnaise on 1 side of each bread slice.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (3,2,'Heat a large nonstick skillet over medium heat. Place 2 bread slices, mayonnaise side down, in skillet; top each with 2 cheese slices and 1 bread slice, mayonnaise side up. Cook 3 minutes on each side or until golden brown. Repeat with remaining bread slices and cheese.');


INSERT INTO Recipe (name, description, image) VALUES('Chocolate Croissants', 'Simple Dessert', 'chocolateCroissants');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (4, 18, '1 tube');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (4, 19, '1/3 Cup');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (4,1,'Heat oven to 375° F.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (4,2,'Unroll the dough and separate it into 8 triangles. Place about 10 chocolate chips on the bottom third of each triangle and roll the dough up around the chocolate.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (4,3,'Transfer the croissants to a baking sheet (lined with parchment paper, if desired, for easier cleanup). Bake until golden brown, 12 to 14 minutes.');


INSERT INTO Recipe (name, description, image) VALUES('Guacamole', 'Guacamole', 'guacamole');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (5, 20, '3');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (5, 21, '1');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (5, 6, '1 Teaspoon');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (5,1,'In a medium bowl, mash together the avocados, lime juice, and salt. Mix in onion, cilantro, tomatoes, and garlic. Stir in cayenne pepper. Refrigerate 1 hour for best flavor, or serve immediately.');


INSERT INTO Recipe (name, description, image) VALUES('Scrambled Eggs', 'Creamy scrambled eggs for breakfast', 'scrambledEggs');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (6, 13, '6');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (6, 22, '5 Tablespoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (6, 6, '1/2 Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (6, 11, '1/2 Teaspoon');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (6,1,'In a bowl, beat eggs to blend. In a 1- to 3-quart pan (depending on amount being cooked), blend broth with cornstarch. Stir over high heat until boiling. Let cool slightly (or cover and chill up to 1 day). Whisk broth mixture into eggs.');
INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (6,2,'Set a frying pan (see below for size) over medium heat. Add butter; when melted, pour in the egg mixture. With a heat-resistant flexible spatula, or a wide metal one, push cooked eggs from pan bottom and sides, letting liquid mixture flow against hot pan; for creamiest texture, do not stir. Cook until eggs are firm but still moist and shiny on top (they must be at least 160° for egg safety), 3 to 20 minutes.');


INSERT INTO Recipe (name, description, image) VALUES('Spicy Tuna Avocado', 'Tuna lunch sandwhich', 'spicyTunaAvocadoMelts');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 15, '1 Tablespoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 21, '1 Tablespoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 6, '1/2 Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 7, '');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 23, '1 can');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 20, '1');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (7, 17, '4');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (7,1,'Preheat oven to 375ºF. In a small bowl, combine mayonnaise, jalapeños, lime juice and salt in a small bowl. Season with pepper. Combine tuna and avocado in a medium bowl. Gently fold mayonnaise mixture into tuna mixture.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (7,2,'Arrange English muffins in a single layer on a baking sheet. Top each muffin half with 1/4 of tuna mixture, 1 slice of tomato and 1 slice of cheese. Bake until cheese has melted, about 10 minutes.');


INSERT INTO Recipe (name, description, image) VALUES('Hard Boiled Egg', 'Hard Boiled Egg', 'boiledEgg');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (8, 13, '12');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (8,1,'Place eggs in a large saucepan. Cover them with cool water by 1 inch. Slowly bring water to a boil over medium heat; when the water has reached a boil, cover and remove from heat. Let sit 12 minutes.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (8,2,'Transfer eggs to a colander; place under cool running water to stop the cooking. Eggs can be peeled and served immediately.');


INSERT INTO Recipe (name, description, image) VALUES('Chocolate Chip Cookie', 'Chocolate chip cookie dessert', 'chocolateChip');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 8, '2 1/4 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 9, '1/2 Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 12, '1/2 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 25, '1 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 11, '1 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 6, '1 Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 14, '2 Teaspoon');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 13, '2');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (9, 13, '2 Cups');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (9,1,'Preheat oven to 350 degrees. In a small bowl, whisk together the flour and baking soda; set aside. In the bowl of an electric mixer fitted with the paddle attachment, combine the butter with both sugars; beat on medium speed until light and fluffy. Reduce speed to low; add the salt, vanilla, and eggs. Beat until well mixed, about 1 minute. Add flour mixture; mix until just combined. Stir in the chocolate chips.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (9,2,'Drop heaping tablespoon-size balls of dough about 2 inches apart on baking sheets lined with parchment paper.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (9,3,'Bake until cookies are golden around the edges, but still soft in the center, 8 to 10 minutes. Remove from oven, and let cool on baking sheet 1 to 2 minutes. Transfer to a wire rack, and let cool completely. Store cookies in an airtight container at room temperature up to 1 week.');


INSERT INTO Recipe (name, description, image) VALUES('Peanut Butter Cookie', 'Peanut butter cookie dessert', 'peanutbutterCookie');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (10, 26, '1 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (10, 12, '1 Cup');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (10, 13, '1');


INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (10,1,'Preheat oven to 350 degrees F (175 degrees C). Line baking sheets with parchment paper.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (10,2,'Combine the peanut butter, white sugar and egg. Mix until smooth.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (10,3,'Drop spoonfuls of dough onto the prepared baking sheet. Bake at 350 degrees F (175 degrees C) for 6 to 8 minutes. Do not overbake! These cookies are best when they are still soft and just barely brown on the bottoms.');


INSERT INTO Recipe (name, description, image) VALUES('Salsa Chicken', 'Slow Cooker Recipe', 'slowCookerMexicanChicken');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (11, 1, '4 shredded');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (11, 12, '2 Cups');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (11, 20, '');


INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (11,1,'Place chicken breasts in a slow cooker and cover with salsa. Toss until the chicken is covered.');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (11,2,'Cover and cook on high for 4 hours (or low for 6-8 hours), or until the chicken shreds easily with a fork. Shred the chicken in the slow cooker and toss with the remaining salsa and juices until well-mixed. Serve immediately, or refrigerate in an airtight container for up to 5 days. (This chicken also freezes well.)');


INSERT INTO Recipe (name, description, image) VALUES('Tomato Soup', 'Simple tomato soup', 'tomatoSoup');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (12, 11, '4 Tablespoons');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (12, 27, '1/2');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (12, 28, '1 can');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id,  amount) VALUES (12, 6, '1 Teaspoon');


INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (12,1,'Melt butter over medium heat in a Dutch oven or large saucepan. Add onion wedges, water, can of tomatoes with their juices, and the salt. Bring to a simmer. Cook, uncovered, for about 40 minutes. Stir occasionally and add additional salt as needed');

INSERT INTO RECIPEINSTRUCTION (recipe_id, step, instruction) VALUES (12,2,'Blend the soup — it doesn’t need to be ultra-smooth, some texture is a nice touch. An immersion blender makes quick work of this or use a blender. If you use a regular blender, it is best to blend in batches and not fill the blender as much as you usually would since the soup is so hot. We like to remove the center insert of the lid and cover it with a kitchen towel while blending — this helps some of the steam release and prevents the lid from popping off (which can be a big, hot mess).');
