import {observable, action} from "mobx";

class HatchStore {
    @observable hatches;

    constructor() {
        this.hatches = this.loadHatches();
     }

     loadHatches = () => {
        const hatchData = fetch('./hatches.json');
        return hatchData;
    }

}


const store = new HatchStore();
export default store;