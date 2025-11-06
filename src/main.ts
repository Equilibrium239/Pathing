import './style.css'





class planet {
  static forEach(arg0: (planet: string) => void) {
    throw new Error('Method not implemented.');
  }
  planet:string;

   constructor(planet:string) {
    this.planet = planet
   }


}

planet.forEach((planet:string) => {
  const planetContainer = document.createElement("div");
  const name = document.createElement("h1");


  name.innerHTML = planet;

