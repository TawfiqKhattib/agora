import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'


export class Inventory  {
    constructor() {
        this.list = []
        // your code here
        makeObservable(this, {
            list: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed
        })
    }

    get numItems(){
        return this.list.length;
    }
    addItem = (name,price=0,quantity=1) => {
        // your code here
        let itemIndx = this.list.findIndex(item => item.name===name);
        if(itemIndx>=0){
            this.list[itemIndx].quantity+=1;
        }
        else{
            let newItem = new Item(name,price,quantity);
            this.list.push(newItem);
        }

    }
    buyItem = (name) => {
        // your code here
        let itemIndx = this.list.findIndex(item => item.name === name)
        if(this.list[itemIndx].quantity>1){
            this.list[itemIndx].quantity-=1;
        }
        else{
            this.list.splice(itemIndx,1);
        }
    }

    changePrice = (name,price) =>{
        let itemIndx = this.list.findIndex(item => item.name===name);
        if(itemIndx>=0){
            this.list[itemIndx].price = price;
        }
    }

}

