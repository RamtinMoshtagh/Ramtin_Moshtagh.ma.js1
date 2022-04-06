const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



//question 1
//create an object called cat
//give the object one property called complain.
//complains value should be a method (a function).

//which logs the string "Meow!".





function createCat() {
    let cat = {};
    cat.name = "complain";
    cat.meow = () => "Meow!";
    return cat;
}

let myCat = createCat();
console.log(myCat);

//question 2
//select the h3 from the HTML using the querySelector method
//and assign it to a varibale called heading.
//change its innerHTML value to "Updated heading"
let heading = document.querySelector("h3").innerHTML = "Updated heading";

//question 3
//use the style property on the heading variable from
//the question above to change its font size to "2em".

document.querySelector("h3").style.fontSize = "2em";

//question 4
//add a class to heading variable called subheading.
document.querySelector("h3").classList.add("subheading");


//question 5
//write code that selects all the p elements on a page
//and assing them to a variable called "paragraphs".
//loop through the p elements and change the colour of each to "red".
let paragraphs = document.querySelectorAll("p").forEach(p => p.style.color = "red");


//question 6
//Select the div with a class of results,
//assign it to a variable called resultsContainer

//and set its inner HTML to be <p>New paragraph</p> and 

//its background colour to be yellow.

const resultsContainer = document.querySelector(".results").innerHTML = "<p>New paragraph</p>";
document.querySelector(".results").style.backgroundColor = "yellow";


console.log(resultsContainer);

//question 7

//Create a function that has one parameter called list.
function myList(list) {
    //Inside the function, loop through the list parameter 
    for (var i = 0; i < list.length; i++) {
     //and console log the name property in each object.
    
     console.log(list[i]);
    }
}
//Call the function and pass in the cats variable in the script.js file in the repo.
myList(cats);

//question 8
//Create a function called createCats. 
function createCats(cats) {
    
    //and create HTML for each object in the array.
    let listCatsh5 = cats["name"];
    let listCatsp = cats["age"];

    for (let i = 0; i < cats.length; i++) {
         //console.log(cats[i]);
         
         //each name property in an h5 tag 
         listCatsh5 = listCatsh5 + "<h5>" + cats[i] + "</h5>";
         //and each age property in a p tag.
         listCatsp = listCatsp + "<p>" + cats[i] + "</p>";
         //console.log(listCats);
    }

    const finalHtml = "<ul" + listCatsh5 + listCatsp + "</ul";
    console.log(finalHtml);

    //Return the HTML from the function.
    return finalHtml;

    //If the age property is missing, it should display â€śAge unknownâ€ť instead.


}
//Call the function and pass in the cats array as the argument.
const newHtml = createCats(cats);

console.log(newHtml);
//Assign the return value of the function to the innerHTML property of the 
// element on the HTML page with a class of cat-container.
//Wrap each item in a div,
const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;