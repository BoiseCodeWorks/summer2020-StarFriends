//import ValuesController from "./Controllers/ValuesController.js";

import CharactersController from "./Controllers/CharacterController.js";

class App {
  //valuesController = new ValuesController();
  charactersController = new CharactersController()
}
console.log(3)
window["app"] = new App();
