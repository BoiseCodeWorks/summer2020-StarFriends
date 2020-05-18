import store from "../store.js";
import Value from "../Models/Value.js";

class ValuesService {
    getValues() {
        // call to some api, which takes unknown amount of time (FAKE CALL TO API)
        let time = Math.floor(Math.random() * 3000)
        setTimeout(() => {
            console.log(time)
            let data = [new Value({ title: "stuff" }), new Value({ title: "stuff" }), new Value({ title: "stuff" })]
            store.commit("values", data)
        }, time)
    }
}
console.log(2)
const service = new ValuesService();
export default service;
