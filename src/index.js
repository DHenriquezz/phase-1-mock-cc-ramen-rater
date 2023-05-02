// write your code here
//Functions go here
function addRamentoDom(ramens){
const div = document.getElementById("ramen-menu")
ramens.forEach((ramen) => {
//const ramenDetails = document.getElementById('ramen-detail');
let h3 = document.querySelector('h3.restaurant')
h3.textContent = ramen.restaurant
let img = document.createElement('img')
img.src = ramen.image
//appending img to div
div.appendChild(img)
// lets add a click eventlistener to see the data of each ramen
// using the img tag we created.

img.addEventListener('click', () => {
    let h2 = document.querySelector('h2.name')
    h2.textContent = ramen.name;
    let imgDisplay = document.querySelector('img.detail-image')
    imgDisplay.src = ramen.image;
    let h3 = document.querySelector('h3.restaurant')
    h3.textContent = ramen.restaurant
    let span = document.querySelector('span#rating-display')
    span.textContent = ramen.rating
    let comment = document.querySelector('p#comment-display')
    comment.textContent = ramen.comment

    //huge function ^

})
});
}
function addNewRamen(newRamen) {
    fetch('http://localhost:3000/ramens/', {
    method : "POST",
    headers : 
    {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body: JSON.stringify({
        ...newRamen
      
      })
    })
    .then(resp => resp.json())
      .then(respRamen => addRamentoDom([respRamen]))
    }






// making shit happen !!!!!
document.addEventListener('DOMContentLoaded', () =>{
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramen => addRamentoDom(ramen));

const form = document.querySelector('form#new-ramen')
form.addEventListener('submit', (event) => {
event.preventDefault()
const formData = Object.fromEntries(new FormData(event.target))
addNewRamen(formData)

})




} )