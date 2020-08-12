import React, {Component} from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import Product from "./Product";

class Products extends Component{
    constructor(props){
        super(props);
        this.state= {
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
    }
    render(){
        return (
            <div>
                <h3>All Products</h3>
                <ul className="productlinks">
                    {this.state.products.map(item=>(
                        <li key={item.id}>
                         <Link className='productlink' to={`/products/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <Switch><Route path="/products/:id" component={Product}/></Switch>
            </div>
        )
    }
}

export default Products;