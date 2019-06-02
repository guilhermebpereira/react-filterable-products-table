import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/filterable-product-table';
import './index.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        fetch('mock.json')
            .then((response) => response.json())
            .then((response) => this.setState({ products: response }))
            .catch((error) => console.log('error: ', error));
    }

    render() {
        return (
            <FilterableProductTable products={this.state.products} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))