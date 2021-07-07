import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  constructor(){
    super();
    this.state={update:false,clicked:1}
    this.updatePrice=this.updatePrice.bind(this);
    this.buyItem = this.buyItem.bind(this);
    
  }
 
  buyItem = () =>{
    let itemName = this.props.item.name
    this.props.store.buyItem(itemName)
    this.setState({update:true})
  }

  updatePrice = (e) =>{
      if(this.state.clicked===2){
        let itemName = this.props.item.name
        var price = prompt("Please enter new price", "");
        if(price===null){
            price=this.props.item.price;
        }
        this.props.store.changePrice(itemName,price);
        this.setState({update:true})
        this.setState({clicked:0})
      }
      else{
          this.setState({clicked:this.state.clicked+1});
      }
  }
 
  render() {
    let item = this.props.item
    return (
        <div >
            <li onClick={this.updatePrice} className="mdc-list-item" 
                style={{backgroundColor: "lightyellow",display:"inline-block"}}>
                {item.quantity} {item.name} available at ${item.price} per item
            </li>  
            <button onClick={this.buyItem} style={{margin: "9px"}}>buy</button>
        </div>
    )}
}

export default observer(Item)