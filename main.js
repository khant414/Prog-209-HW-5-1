let movieArray = [];

console.log(movieArray);

document.addEventListener("DOMContentLoaded", function (event) {});

function StartProgram() {
    let ul = document.getElementById("output");
    ul.innerHTML = "";

    movieName = document.getElementById("movie").value;
    rating = document.getElementById("rating").value;

    const movie = new Movie(movieName, rating);

    if (movie.isValid()) {
        movieArray.push(movie);
    } else {
        alert("Information not valid");
    }

    movieArray = movieArray.sort((a, b) => a.rating - b.rating);

    let frm = document.getElementsByName("mainForm")[0];
    //reset form data
    frm.reset();
    //prevents page from refreshing
    return false;
}

const showMovieRatings = () => {
    movieArray.forEach((element) => {
        let li = document.createElement("li");
        li.innerText = `${element.title} ${element.rating}`;
        let ul = document.getElementById("output");
        ul.appendChild(li);
    });
};
