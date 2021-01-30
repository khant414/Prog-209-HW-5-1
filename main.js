movieArray = [];

document.addEventListener("DOMContentLoaded", function (event) {
    
});

function ShowMovieRatings {} 


function StartProgram() {
    let ul = document.getElementById("output");
    ul.innerHTML = '';
    
    let Movie  = {
        movieName:  document.getElementById("movie").value,
        rating: document.getElementById("rating").value
    }    

    movieArray.push(Movie); 
    console.log(movieArray.length)
    movieArray.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.movieName} ${element.rating}` 
        let ul = document.getElementById("output");
        ul.appendChild(li)
    });

    
    let frm = document.getElementsByName('mainForm')[0];
   //reset form data
   frm.reset();
   //prevents page from refreshing
   return false;

}
    
    

