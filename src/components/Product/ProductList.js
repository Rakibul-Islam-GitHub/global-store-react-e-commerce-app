import React from "react";



function ProductList() {

    return(
        <div className='mb-2'>
            <div className="container d-flex justify-content-center">
    <div className="row">
        <div className="">
            <div className="card card-body">
                <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                    <div className="mr-2 mb-3 mb-lg-0"> <img src="https://i.imgur.com/5Aqgz7o.jpg" width="150" height="150" alt=""/> 
                    </div>
                    <div className="media-body">
                        <h6 className="media-title font-weight-semibold"> <a href="#" data-abc="true">Apple iPhone XR (Red, 128 GB)</a> </h6>
                        <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                            <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">Phones</a></li>
                            <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">Mobiles</a></li>
                        </ul>
                        <p className="mb-3">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display </p>
                        <ul className="list-inline list-inline-dotted mb-0">
                            <li className="list-inline-item">All items from <a href="#" data-abc="true">Mobile point</a></li>
                            <li className="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                        </ul>
                    </div>
                    <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                        <h3 className="mb-0 font-weight-semibold">$459.99</h3>
                        <div> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        <div className="text-muted">1985 reviews</div> 
                        <button type="button" className="btn addtocartbtn mt-4 text-white"><i className="icon-cart-add mr-2"></i> Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
        </div>
    )
    

    
}

export default ProductList;