import React from 'react'

export default function Tiltle({name,title}) {
    return (
        <div className="container-fluid">
            <div className="row my-5">

                <div className="col-sm-10 mx-auto text-center">
                  <h3 className="title font-weight-bold mr-3">{name} 
                   <strong>{title}</strong>
                  </h3>
                
                 </div>
            </div>
        </div>
    )
}
