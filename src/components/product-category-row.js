import React from 'react';

export default class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr><td>{this.props.title}</td></tr>
        );
    }
}