import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';

export default class ProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentDidUpdate() {
        const toBeAddedCategories = [];
        this.props.products.forEach((product) => {
            const alreadyAdded = toBeAddedCategories.some((category) => product.category === category);
            if (!alreadyAdded) {
                toBeAddedCategories.push(product.category);
            }
        });
        
        if (this.state.categories && this.state.categories.length !== toBeAddedCategories.length) {
            this.setState({ categories: toBeAddedCategories });
        }
    }

    filterProductsByCategory(products, filteredCategory) {
        return products.filter((product) => product.category === filteredCategory);
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {
                        this.state.categories.map((category) => {
                            return (
                                <ProductCategoryRow title={category} /> ,
                                this.filterProductsByCategory(this.props.products, category).map((product, index) => {
                                    return (<ProductRow product={product} key={index} />)
                                }));
                        })
                    }
                </tbody>
            </table>
        );
    }
}