import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

function logger() {
  console.log("new data")
}

//Public
export default class ValuesController {
  constructor() {
    console.log(4)
    // NOTE this line indicates that when values changes, run the _draw function
    store.subscribe("values", _draw);
    store.subscribe("values", logger);
  }


  getValues() {
    ValuesService.getValues();
  }
}
