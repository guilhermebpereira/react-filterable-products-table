import React from 'react';
import SearchBar from './search-bar';

export default class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                {/* <ProductTable /> */}
            </div>
        );
    }
}