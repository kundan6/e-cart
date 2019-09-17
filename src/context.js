import React, { Component } from 'react';

import { storeProducts,detailProduct} from './data';
const ProductContext = React.createContext();
//consumer
//provider


 class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    };
    hadleDetail=()=>{console.log("Hello from handel details")};
    addToCart=()=>{console.log("Hello from Cart")};
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,hadleDetail:this.hadleDetail,addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer ;
export { ProductProvider, ProductConsumer};
