import './style.css'

type Movie = {
    Title: string;
    Poster: string;
    imbID: string;
}


type OmdbResponse = {
    totalResults: string;
    Response: string;
    Search: Movie[];
}






const getMovies = async (titleToSearchFor:string) => {
   const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=" + titleToSearchFor,);
   const data: OmdbResponse = await response.json();

   return data.Search;
};


const createHtml = (theMovieList: Movie[]) => {
  //section element
  const moviesContainer = document.getElementById("movies");

  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  theMovieList.forEach((movies) => {
     const container = document.createElement("div");
     const title = document.createElement("h2");
     const imgContainer= document.createElement("div");
     const img = document.createElement("img");


     container.className ="movie";

    title.innerHTML = movies.Title
    img.src = movies.Poster
    img.alt = movies.Title
    imgContainer.appendChild(img);

    container.appendChild(title);
    container.appendChild(imgContainer);

    moviesContainer?.appendChild(container);

  });
};  

document.getElementById("getButton")?.addEventListener("click", async () => {
  
    const inputTag = document.getElementById("titleToSearchFor");

    if(!inputTag) {
      return;
    }
    // Hitta texten i textrutan
  const userInput = (inputTag as HTMLInputElement).value
 
 
 
  const movies = await getMovies(userInput);
  
  createHtml(movies);
});