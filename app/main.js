import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
}
console.log(3)
window["app"] = new App();
