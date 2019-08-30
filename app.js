const liste = document.querySelector("#listMovie");
        const userClick = document.querySelector("#userSend");

            userClick.addEventListener("click",(event)=>{
            event.preventDefault();
            liste.innerHTML='';

        const userInput = document.querySelector("#userInput").value;
        getMovie(userInput);
    });
    const getMovie = (movie) => { 
        const URL = `http://www.omdbapi.com/?s=${movie}&apikey=29678008`;
        ;

        fetch (URL)
        .then (response => response.json())
        .then ((data) => {
     data.Search.forEach((movie) => {

        liste.insertAdjacentHTML("beforeend",
            <li>
        <img src ="${movie.Poster}"alt=""/>
        <p>${movie.Title}</p>
        <p>${movie.Year}</p>
    </li>
    `);
             });
        });
     };

    getMovie("mon super film")