import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/filterable-product-table';
import './index.css';


class App extends React.Component {

    componentWillMount() {
        fetch('mock.json')
            .then((response) => response.json())
            .then((response) => console.log("response: ", response))
            .catch((error) => console.log('error: ', error));
    }

    render() {
        return (
            <FilterableProductTable/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))