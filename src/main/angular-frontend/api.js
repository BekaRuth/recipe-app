console.log('hello');

var express = require('express')
var app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var database_results = {
        "recipe": [],
        "recipeingredient": [],
        "recipeinstruction": [],
        "ingredient": []
    };

// Respond with "hello world" when a GET request is made to the homepage.
app.get('/recipedata', function (req, res) {
    console.log('starting get!');
    var mysql = require('mysql');
    console.log('importing mysql!');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cookbook'
    });
    console.log('connecting to mysql!');

    connection.connect();

    var data = null;

    var check_for_completion = function() {
        if ((database_results.recipe.length > 0) && (database_results.recipeingredient.length > 0) && (database_results.recipeinstruction.length > 0) && (database_results.ingredient.length> 0))
        {
            // Iterate through all recipes.
            for (var i = 0; i < database_results.recipe.length; i++)
            {
                var outer_recipe_id = database_results.recipe[i].id;
                database_results.recipe[i].ingredients = [];
                database_results.recipe[i].instructions = [];

                // Iterate through recipeingredients looking for matches.
                for (var j = 0; j < database_results.recipeingredient.length; j++)
                {
                    if (database_results.recipeingredient[j].recipe_id == outer_recipe_id)
                    {
                        // This ingredient is a part of this recipe.
                        var outer_amount = database_results.recipeingredient[j].amount;
                        var outer_name = '';


                        var outer_ingredient_id = database_results.recipeingredient[j].ingredient_id;

                        for (var k = 0; k < database_results.ingredient.length; k++)
                        {
                            if (database_results.ingredient[k].id == outer_ingredient_id)
                            {
                                outer_name = database_results.ingredient[k].name;
                            }
                        }

                        database_results.recipe[i].ingredients.push(outer_amount + ' ' + outer_name);
                    }
                }

                // Iterate through recipeinstructions looking for matches.

                var searching = true;
                var step_number = 1;

                while (searching)
                {
                    searching = false;
                    for (var m = 0; m < database_results.recipeinstruction.length; m++)
                    {
                        if (database_results.recipeinstruction[m].recipe_id == outer_recipe_id && database_results.recipeinstruction[m].step == step_number)
                        {
                            database_results.recipe[i].instructions.push(database_results.recipeinstruction[m].instruction);
                            step_number++;
                            searching = true;
                        }
                    }
                }
            }

            // We're good to go! send the response
            res.send(database_results.recipe);
        }
        else
        {
            // Do nothing; Database_results is incomplete.
        }
    }

    console.log('querying mysql server!');
    database_results = {
        "recipe": [],
        "recipeingredient": [],
        "recipeinstruction": [],
        "ingredient": []
    }

    connection.query('SELECT * FROM RECIPE' , function (err, rows, fields) {
        console.log('querying RECIPE');
        if (!err) {
            database_results.recipe = rows;
            check_for_completion();
        }
        else {
            data = { success: false, message: err };
            connection.end();
            res.send(data);
        }
    });

    connection.query('SELECT * FROM RECIPEINGREDIENT' , function (err, rows, fields) {
        console.log('querying RECIPEINGREDIENT');
        if (!err) {
            database_results.recipeingredient = rows;
            check_for_completion();
        }
        else {
            data = { success: false, message: err };
            connection.end();
            res.send(data);
        }
    });

    connection.query('SELECT * FROM RECIPEINSTRUCTION' , function (err, rows, fields) {
        console.log('querying RECIPEINSTRUCTION');
        if (!err) {
            database_results.recipeinstruction = rows;
            check_for_completion();
        }
        else {
            data = { success: false, message: err };
            connection.end();
            res.send(data);
        }
    });

    connection.query('SELECT * FROM INGREDIENT' , function (err, rows, fields) {
        console.log('querying INGREDIENT');
        if (!err) {
            database_results.ingredient = rows;
            check_for_completion();
        }
        else {
            data = { success: false, message: err };
            connection.end();
            res.send(data);
        }
    });
})

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3002, function () {
    console.log('Example app listening on port 3000!')
})


