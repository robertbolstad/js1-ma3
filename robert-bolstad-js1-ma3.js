/*
    Module Assignment 3
*/

// Question 1
(a, b) => { 
    return(a - b); 
}

// Question 2
const api = "https://api.rawg.io/api/games?genres=sports";

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
    .catch(function(){
        location.href= "./error.html";         
    });


    
// Question 3
const cats = "These cats are outrageous.";
const giraffes = cats.replace("cats", "giraffes");
console.log(giraffes);



// Question 4
const url = "https://my.site.com?userId=7";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("userID");

if (params.has("userId")) {
    if(id >= 10) {
        document.location.replace("./second.html");
    }
    else if(id < 10) {
        document.location.replace("./first.html");
    }
}
else {
    document.location.replace = "./third.html";
}



// Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);



// Question 6
const liElement = document.createElement("li");
const liElementContent = document.createTextNode("Parrots")
liElement.className = "parrots";
liElement.appendChild(liElementContent);

const elephants = document.querySelector(".elephants");

const animals = document.querySelector(".animals");
animals.appendChild(liElement);
elephants.before(liElement);



// Question 7
const object = "https://api.rawg.io/api/games/3801";

fetch(object)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const ratingHtml = document.querySelector(".rating");
        const rating = json.ratings;
        for (let i = 0; i < rating.length; i++) {
            ratingHtml.innerText += rating[i].title + "\n";                  
        }
        
    })
    .catch(function(error) {
        console.log(error);
    });    