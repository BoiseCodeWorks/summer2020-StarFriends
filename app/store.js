import Value from "./Models/Value.js";
import Character from "./Models/Character.js";

/**
 * Data is stored in the state to be accessable throughout the application
 * NOTE: do not set this value directly use the "commit" action
 */
let _state = {
  page: 1,
  /** @type {Character} */
  activeCharacter: null,
  /** @type {Value[]} */
  values: [],
  /** @type {Character[]} */
  characters: []
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  activeCharacter: [],
  values: [], // [ _draw(){...} ]
  characters: []
};

//NOTE You should not need to change the code from this point down

/**
 * Validates the property string is defined in both the state and the listeners
 * @param {string} prop
 */
function _validateProp(prop) { //"values"
  if (!_state.hasOwnProperty(prop) || !Array.isArray(_listeners[prop])) {
    throw new Error(
      `Unkown property ${prop}, please review your state and listeners`
    );
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) { //_draw(){...}, "values"
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  /**
   * Takes in a property to observe, and a function to run when it changes
   * @param {string} prop
   * @param {function} fn
   */
  subscribe(prop, fn) { // "values", _draw(){...}
    console.log(5, "Subscribing to prop:", prop, ", with function:", fn.name, fn)
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
    console.log(6, "listeners:", _listeners)
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    // NOTE put the data on the shelf
    _state[prop] = data;
    // NOTE invoke all subscribers
    _listeners[prop].forEach(fn => fn());
  }
}

console.log(1);
const store = new Store();
export default store;
