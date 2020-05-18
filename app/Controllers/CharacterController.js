import CharactersService from "../Services/CharactersService.js";
import store from "../store.js";

//Private
function _draw() {
    let characters = store.State.characters;
    let template = "";
    characters.forEach(c => {
        template += c.Template
    })
    document.getElementById('characters').innerHTML = template
}

function _drawDetails() {
    let character = store.State.activeCharacter
    document.getElementById('active-character').innerHTML = character.DetailsTemplate
}

//Public
export default class CharactersController {
    constructor() {
        store.subscribe("characters", _draw);
        store.subscribe("activeCharacter", _drawDetails)

        CharactersService.getApiPeople();
    }

    next() {
        CharactersService.next();
    }
    previous() {
        CharactersService.previous();
    }

    setActive(id) {
        CharactersService.setActive(id)
    }
}
