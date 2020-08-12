import React, {Component} from 'react';

class Product extends Component{
    state= {
        products:[
                {
                    "id": 1,
                    "name": "Bicycle",
                    "price": 30,
                    "quantity": 15,
                    "desc": "Bicycle is Good"
                },
                {
                    "id": 2,
                    "name": "TV",
                    "price": 40,
                    "quantity": 16,
                    "desc": "TV is good"
                },
                 {
                    "id": 3,
                    "name": "Pencil",
                    "price": 50,
                    "quantity": 17,
                    "desc": "Pencil is good"
                }
            ]
    }
    render(){
        return (
            <div>
                <p>Products Details:</p>
                <p>name:{this.state.products[this.props.match.params.id-1].name} </p>
                <p>Id:{this.state.products[this.props.match.params.id-1].id} </p>
                <p>Price:{this.state.products[this.props.match.params.id-1].price} </p>
                <p>Quantity:{this.state.products[this.props.match.params.id-1].quantity} </p>
                <p>Desc:{this.state.products[this.props.match.params.id-1].desc} </p>
                <p>URL:/products/{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Product;