import React, { Component } from 'react'
import { storeProducts} from '../data';
import Tiltle from '../Components/Tiltle';
import Product from './Product';
import {ProductConsumer} from '../context';
export default class ProductList extends Component {

    // state={
    //  Products:storeProducts
    // };
    render() {
        
        return (
            <React.Fragment>
            <Tiltle name="Our" title="Products"/>
            <div>
                <h3>From ProductList page</h3> 
                <div className="row"> 
                <ProductConsumer>
                    {value=>{
                       return value.products.map(product=>{
                           return <Product key={product.id} product={product}/>
                       });
                    }}
                </ProductConsumer>
                </div>
            </div>
          </React.Fragment>
             
        )
    }
}
