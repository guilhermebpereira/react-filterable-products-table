import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="search" value={this.props.filterText} onChange={this.props.onChangeFilterText} placeholder="Search..."/>
                <input type="checkbox" checked={this.props.isStockOnly} onChange={this.props.onChangeIsStockOnly} />
                <label>Only show products in stock</label>
            </div>
        );
    }
}