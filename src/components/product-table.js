import React from 'react';

export default class ProductTable extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </tbody>
            </table>
        );
    }
}