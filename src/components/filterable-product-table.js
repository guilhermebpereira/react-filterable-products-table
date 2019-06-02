import React from 'react';
import SearchBar from './search-bar';
import ProductTable from './product-table';

export default class FilterableProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            isStockOnly: false
        };
    }

    render() {
        return (
            <div>
                <SearchBar filterText={ this.state.filterText } isStockOnly={this.state.isStockOnly}/>
                <ProductTable  products={ this.props.products }/>
            </div>
        );
    }
}