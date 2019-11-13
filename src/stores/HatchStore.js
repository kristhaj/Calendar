import {observable, action} from "mobx";

class HatchStore {
    @observable hatches = [];
    @observable hatchData = './hatches.json';

    constructor() {
        this.fetchHatches(this.hatchData);
    }

     @action
     fetchHatches = (fileURL) => {
        fetch(fileURL)
            .then((result) => result.json())
            .then((result) => {
                console.log(result);
                for (const hatch of result.hatches) {
                    console.log(hatch);
                    this.hatches.push({
                        id: hatch.date.split('-')[2],
                        date: hatch.date,
                        text: hatch.text,
                        img: hatch.image,
                        redeemed: hatch.redeemed
                        }
                    );
                }
            });
    };

    @action
    redeemHatch = (index) => {
        this.hatches[index].redeemed = true;
    }


}


const store = new HatchStore();
export default store;