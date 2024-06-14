function post(title) {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=66d8b6a5`)
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data);
            if (data.Response === "True") {
                const movie = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <img src="${data.Poster}" alt="Movie Poster">
                `;
                document.getElementById('movie').innerHTML = movie;
            } else {
                document.getElementById('movie').innerHTML = `<p>Movie not found</p>`;
            }
        }).catch((err) => console.error(err)); 
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault(); 
        const inputMovie = document.getElementById("movieTitle").value;
        post(inputMovie);
    });
});














// function film(title) {
//     fetch(`http://www.omdbapi.com/?t=${title}&apikey=66d8b6a5`)
//     .then(res=> res.json)
//     .then(data=>{ console.log(data)
//     if(data.Response==='True'){
//         const movie = ` 
//         <h1>${data.Title}</h1>
//         <img src="${data.Poster}"/>
//         `
//         document.getElementById("movie").innerHTML = movie
//     }else{
//         document.getElementById('movie').innerHTML = `<p>this movies doedn exist</p>`
//     }
    
// }).catch(err => console.error(err))
// }

// document.addEventListener('DOMcontentLoaded', function(){
//     document.getElementById("searchForm").addEventListener('submit' , function(e) {
//       e.preventDefault()
//       const input = document.getElementById("input").value
//       film(input)
//     })
// })
