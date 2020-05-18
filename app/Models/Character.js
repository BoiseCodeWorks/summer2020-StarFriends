export default class Character {
    constructor(data) {
        this.name = data.name
        this.gender = data.gender
        this.height = data.height + " cm"
        this.hair = data.hair_color

        let urlArr = data.url.split("/")
        this.id = urlArr[urlArr.length - 2]
    }

    get Template() {
        return `<p onclick="app.charactersController.setActive('${this.id}')">${this.id}. ${this.name}</p>`
    }

    get DetailsTemplate() {
        return `
        <div class="card text-left">
        <div class="card-body">
          <h4 class="card-title">NAME: ${this.name}</h4>
          <p class="card-text">Gender: ${this.gender}</p>
          <p class="card-text">Height: ${this.height}</p>
          <p class="card-text">Hair Color: ${this.hair}</p>
        </div>
      </div>
      `
    }
}


// {
//     "birth_year": "19 BBY",
//     "eye_color": "Blue",
//     "films": [
//         "https://swapi.dev/api/films/1/",
//         ...
//     ],
//     "gender": "Male",
//     "hair_color": "Blond",
//     "height": "172",
//     "homeworld": "https://swapi.dev/api/planets/1/",
//     "mass": "77",
//     "name": "Luke Skywalker",
//     "skin_color": "Fair",
//     "created": "2014-12-09T13:50:51.644000Z",
//     "edited": "2014-12-10T13:52:43.172000Z",
//     "species": [
//         "https://swapi.dev/api/species/1/"
//     ],
//     "starships": [
//         "https://swapi.dev/api/starships/12/",
//         ...
//     ],
//     "url": "https://swapi.dev/api/people/1/",
//     "vehicles": [
//         "https://swapi.dev/api/vehicles/14/"
//         ...
//     ]
// }