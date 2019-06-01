import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="search" placeholder="Search..."/>
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        );
    }
}