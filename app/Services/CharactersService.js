import store from "../store.js";
import Character from "../Models/Character.js";

// @ts-ignore
const _api = axios.create({
    baseURL: "https://swapi.dev/api/people" // default route
})


class CharactersService {
    next() {
        store.State.page++
        this.getApiPeople();
    }
    previous() {
        if (store.State.page > 1) {
            store.State.page--
            this.getApiPeople();
        }
    }
    setActive(id) {
        let char = store.State.characters.find(c => c.id == id)
        store.commit('activeCharacter', char)
    }
    getApiPeople() {
        // NOTE axios fires request to get from baseurl + 1st argument 
        _api.get("?page=" + store.State.page) // NOTE this is asynchronous
            // NOTE if Successful
            .then(response => {
                let characters = response.data.results.map(rc => new Character(rc))
                store.commit("characters", characters)
            })
            // NOTE if failed
            .catch(error => {
                console.error(error)
            })
    }



}

const service = new CharactersService();
export default service;
