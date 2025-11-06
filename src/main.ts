import './style.css'





class planet {
  static forEach(callback: (planet: string) => void) {
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
    planets.forEach(callback);
  }
  planet:string;

   constructor(planet:string) {
    this.planet = planet
   }


}

planet.forEach((p:string) => {
  const planetContainer = document.createElement("div");
  const name = document.createElement("h1");


  name.textContent = p;
  planetContainer.appendChild(name);
  document.body.appendChild(planetContainer);
});

});
  
