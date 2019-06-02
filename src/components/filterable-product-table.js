import React from 'react';
import SearchBar from './search-bar';
import ProductTable from './product-table';

export default class FilterableProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            isStockOnly: false,
            filteredProducts: []
        };

        this.onChangeFilterText = this.onChangeFilterText.bind(this);
        this.onChangeIsStockOnly = this.onChangeIsStockOnly.bind(this)
    }

    componentWillReceiveProps(props) {
        if (props.products && props.products.length !== this.state.filteredProducts.length) {
            this.setState({ filteredProducts: this.filterByName(props.products, this.state.filterText) });
        } 
    }

    onChangeFilterText(event) {
        this.setState({
            filterText: event.target.value
        });
    }

    onChangeIsStockOnly(event) {
        this.setState({
            isStockOnly: event.target.checked,
            filteredProducts: event.target.checked ? this.filterStocked(this.state.filteredProducts) : this.filterByName(this.props.products, this.state.filterText)
        });
    }

    filterStocked(products) {
        return products.filter((product) => product.stocked);
    }

    filterByName(products, text) {
        if (products && text && text.trim()) {
            return products.filter((product) => product.name.includes(text));
        } else {
            return products;
        }
    }

    render() {
        return (
            <div>
                <SearchBar filterText={ this.state.filterText } onChangeFilterText={this.onChangeFilterText} onChangeIsStockOnly={this.onChangeIsStockOnly} isStockOnly={this.state.isStockOnly}/>
                <ProductTable  products={ this.state.filteredProducts }/>
            </div>
        );
    }
}