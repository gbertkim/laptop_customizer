import React, { Component } from 'react';

class SelectedList extends Component {
  render() {
    return (
        <div className="summary__option" key={this.props.key}>
            <div className="summary__option__label">{this.props.key}</div>
            <div className="summary__option__value">{this.props.selected.name}</div>
            <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.cost) }
            </div>
        </div>
        );
    }
  }  
  
export default SelectedList;