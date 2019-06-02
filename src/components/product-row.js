import React from 'react';

export default class ProductRow extends React.Component {
   render() {
       return (
            <tr>
                <td className={this.props.product.stocked === false ? 'stockless' : ''}>{ this.props.product.name }</td>
                <td>{ this.props.product.price }</td>
            </tr>
       );
   } 
}