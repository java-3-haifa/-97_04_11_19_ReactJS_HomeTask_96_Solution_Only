import React from 'react';
import Row from './row.js';

export default class extends React.Component {
    state = {
        products: getData()
    };
    onChange = (indx, count) => {
        let products = [...this.state.products];
        let p = {...products[indx], count};
        products[indx] = p;
        this.setState({products})
    };

    onRemove = (indx) => {
        let products = [...this.state.products];
        products.splice(indx, 1);
        this.setState({products});
    };

    render() {
        let total = this.state.products.reduce((acc,p)=> acc + p.price * p.count,0);
        return (
            <div className="wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th className="action"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((p, i) => {
                        return <Row key={p.id}
                                    title={p.title}
                                    price={p.price}
                                    count={p.count}
                                    indx={i}
                                    onChange={this.onChange}
                                    onRemove={this.onRemove}
                        />
                    })
                    }
                    </tbody>
                </table>
                <div>
                    <span><strong>Total: {total}</strong></span>
                </div>
            </div>
        );
    }
}

function getData() {
    return [
        {
            id: 123,
            title: 'Parker Jotter stainless steel ballpen',
            price: 16.0,
            count: 1
        },
        {
            id: 124,
            title: 'Pilot retractable black ballpoint pen',
            price: 3.0,
            count: 1
        },
        {
            id: 125,
            title: 'Parker Vector Stainless Steel Rollerball',
            price: 5.0,
            count: 1
        },
        {
            id: 126,
            title: 'Super parker',
            price: 25.0,
            count: 1
        }
    ];
}
