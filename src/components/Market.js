import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Item from './Item';

class Market extends Component {
  constructor(){
    super();
    this.state={
        inputVal:""
    };
    this.changInput = this.changInput.bind(this);
    this.EnterClick = this.EnterClick.bind(this);
    
  }
    
  changInput(e){
    let inputVal = e.target.value;
    this.setState({ inputVal: inputVal }); 
  }
  EnterClick(event){
    if(event.key === 'Enter'){
        let inputVal = this.state.inputVal;
        this.props.store.addItem(inputVal)
        this.setState({inputVal:""})
    }      
  }
  render() {
    return (
        <div>
            <input style={{backgroundColor: "lightgrey",margin:'9px'}} type="text" placeholder="Insert Item" value={this.state.inputVal}
                                                         onChange={this.changInput}
                                                         onKeyDown={this.EnterClick}
                                                         >
                                                        
            </input>
            <ul style={{backgroundColor: "lightblue",maxWidth:'600px'}}>
                 {this.props.store.list.map((item,ind) => <Item item={item} 
                                                            key = {ind}
                                                            store={this.props.store} />)}
            </ul>
        </div>)
    }
}

export default observer(Market)