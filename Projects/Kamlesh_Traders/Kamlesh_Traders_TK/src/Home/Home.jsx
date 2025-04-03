import React from "react";

const Home = () => {
    return (
        <>
            <div className="container-fluid    ">
                <h1 className="text-left h1_home">Product Home</h1>
                <p className="fs-3">
                    Welcome to Kamlesh Traders Lakshmi Enterprises! We specialize in providing high-quality products and excellent services

                    to our customers.Our mission is to meet and exceed customer expectations by offering competitive prices and timely delivery.

                    Once you order our product from flipkart, amazon, and from other e-commerce website.

                    we gurented that you will like it most and whenever you think about organic product than you will order from our store.
                </p>

                <div className="row">

                    {/* first card */}
                    <div className="col-4 ">
                        <div className="card CARD">
                            <div className="card-header">
                                <h1 className="">Ghee</h1>
                            </div>

                            <div className="card-body table  ">
                                <img
                                    src=".\src\img_src\Ghee_img_1kg.jpg"
                                    alt="Ghee"
                                    title="ghee"
                                    height={200}
                                    width={390}
                                />

                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            LAKSHMI Product's Premium Organic Desi Cow A2 Ghee (1
                                            litre Pack) 100% Natural & Pure Ghee | Extracted from
                                            Deshi Cow A2 Milk || by Bilona Method (1 litre)|| For
                                            Eating & Cooking || Religious Purpose
                                        </li>

                                        <li className="fw-bold  list-group-item">Price: 1400rs</li>

                                        <li className="fw-bold list-group-item ">Quantity: 10</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-footer ">
                                <button className="btn btn-outline-warning text-black m-2">
                                    Order
                                </button>
                                <button className="btn btn-outline-warning text-black m-2">
                                  Add to cart
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* second card */}
                    <div className="col-4">
                        <div className="card CARD">
                            <div className="card-header">
                                <h1 className="">Calender combo</h1>
                            </div>

                            <div className="card-body table  ">
                                <img
                                    src=".\src\img_src\calender combo.png"
                                    alt="Ghee"
                                    title="ghee"
                                    height={200}
                                    width={390}
                                />

                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                        Bhakti Sagar & Divine Power Lord Shree Ganesh 2025 Hindi Table/Desk/Office Calendar Combo, 13 Pages with Finger Cut Indexes, Spiral Binding With Planner and Space for Notes
                                        </li>

                                        <li className="fw-bold  list-group-item">Price: 395rs</li>

                                        <li className="fw-bold list-group-item ">Quantity: 2</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-footer ">
                                <button className="btn btn-outline-warning text-black m-2">
                                    Order
                                </button>
                                <button className="btn btn-outline-warning text-black m-2">
                                  Add to cart
                                </button>
                            </div>
                        </div>
                    </div>




                    {/* third card */}
                    <div className="col-4">
                        <div className="card CARD">
                            <div className="card-header">
                                <h1 className="">Ram Diary</h1>
                            </div>

                            <div className="card-body table  ">
                                <img
                                    src=".\src\img_src\ram diary.jpg"
                                    alt="Ghee"
                                    title="ghee"
                                    height={200}
                                    width={390}
                                />

                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                        Lord Ram 2025 Executive Diary/Planner/Organiser, Hard Cover, Ruled A5 Size, 400 Pages, Dated Diary with Planner Pages, Maps, Financial Summary pages
                                        </li>

                                        <li className="fw-bold  list-group-item">Price: 459</li>

                                        <li className="fw-bold list-group-item ">Quantity: 20</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-footer ">
                                <button className="btn btn-outline-warning text-black m-2">
                                    Order
                                </button>
                                <button className="btn btn-outline-warning text-black m-2">
                                  Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>










            </div>




           
        </>
    );
};

export default Home;
