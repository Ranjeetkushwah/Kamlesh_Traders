import React from 'react';

const Inventory = () => {
    return (
        <>

            <h1 className='m-1'>Manage All Inventory</h1>
            <h5 className='d-inline m-1 ' >Manage your inventory across marketplaces from a single place.</h5>
            <a className=' m-3' href='/learnmore'>Learn more</a>
            <a className=' m-3' href='/learnmore'>View product tour</a>
            <a className=' m-3' href='/learnmore'>Provide feedback</a>
            <button className='btn btn-sm btn-primary m-3 '>Add a variation </button>
            <button className='btn btn-sm btn-primary'>Add a Product </button>
            <hr />
            <div className='container '>
                <div className='row '>
                    <table className='bg-warning'>
                        <thead>
                            <tr>
                                <th><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                                <th>Listing status</th>
                                <th>Product details</th>
                                <th>Performance</th>
                                <th>Inventory</th>
                                <th>price and shipping cost</th>
                                <th> Estimated fees</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                <td>{ }hi</td>
                                <td>Product details</td>
                                <td>Performance</td>
                                <td>Inventory</td>
                                <td>price and shipping cost</td>
                                <td> Estimated fees</td>
                            </tr>
                        </tbody>


                    </table>

                </div>
            </div>

        </>
    );
}

export default Inventory;
