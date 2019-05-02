import React, { Component } from 'react';
import ListItem from './ListItem.js'

class Parts extends Component {
    render() {
        return (
            Object.keys(this.props.features).map(key => {
                const options = this.props.features[key].map((item, index) => {
                    const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                    const featureClass = 'feature__option ' + selectedClass;
                    const itemKey = key
                    return (
                        <ListItem 
                            index={index}
                            item={item}
                            itemKey={itemKey}
                            featureClass={featureClass}
                            handleUpdate={(key, item) => this.props.handleUpdate(key, item)}
                        />
                    )
                });
                return (
                <div className="feature" key={key}>
                    <div className="feature__name">{key}</div>
                    <ul className="feature__list">
                        { options }
                    </ul>
                </div>)
            })      
        )
    }       
}  

export default Parts;