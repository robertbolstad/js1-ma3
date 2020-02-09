/*
    Module Assignment 3
*/

// Question 1
// Convert the function below to an arrow function:

/*
function(a, b) {
    return a - b;
}
*/

(a, b) => { 
    return(a - b); 
}

// Question 2

const api = "https://api.rawg.io/api/games?genres=sports"

fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const games = json.results;
        for (let i = 0; i < games.length; i++) {
            console.log(games[i].name);
            
            
        }
    })
    .catch(function(error) {
        console.dir(error);
    });


// question 3
// Replace the word cats with the word giraffes in the following sentence:
// These cats are outrageous.

const cats = "These cats are outrageous."
const giraffes = cats.replace("cats", "giraffes");
console.log(giraffes);

// question 4


