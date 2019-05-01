import React, { Component } from 'react';
import SelectedList from './SelectedList.js';

class Summary extends Component {
  render() {
    return (
      Object.keys(this.props.selected).map(key => 
        <SelectedList 
          key={key}
          sillyName={key} 
          selected={this.props.selected}
          cost={this.props.selected[key].cost}
        />
      )
    );
  }
}  
export default Summary;


