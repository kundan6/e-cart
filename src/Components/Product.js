import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
export default class Product extends Component {
    render() {
        const {id,img,title,price,inCart}=this.props.product;
        return (
            <React.Fragment>
               
                    <div className="col-sm-3 col-md-3 mb-3">
                        <div className="card  text-center">
                            <div className="img-container p-5">
                                <Link to="/details">
                                   <img src={img} className="card-img-top"/>
                                </Link>
                                <button className="btn btn-sm btn-primary"
                                 disabled={inCart? true:false}
                                onClick={()=>{console.log("added to cart;")}}
                                >
                                {inCart?(<p className="text-captialize mb-0" disabled>in Cart</p>):(<i className="fa fa-cart-plus"/>)}
                                
                                
                                </button>
                            </div>
                        </div>
                        <div className="card-footer  d-flex justify-content-between">
                           <p class="mb-0 align-self center">{title}</p>
                           <p class="mb-0 text-primary italic"><span class="ml-3">$</span>{price}</p>
                         </div> 
                    </div>
               
            </React.Fragment>
        )
    }
}
