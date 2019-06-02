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
        const text = event.target.value;
        const filteredProducts = this.filterByName(this.props.products, text);

        this.setState({
            filterText: text,
            filteredProducts: this.state.isStockOnly ? this.filterStocked(filteredProducts) : filteredProducts
        });
    }

    onChangeIsStockOnly(event) {
        const isChecked = event.target.checked;

        this.setState({
            isStockOnly: isChecked,
            filteredProducts: isChecked ? this.filterStocked(this.state.filteredProducts) : this.filterByName(this.props.products, this.state.filterText)
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