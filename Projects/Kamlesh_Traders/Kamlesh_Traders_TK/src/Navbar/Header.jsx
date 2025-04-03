import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid  ">

                    <Link to="/mainhome" class="navbar-brand text-black animate__heartBeat">
                        <img src="./src/img_src/K.T_log_no_bg.png"
                            title="K.T" height={80} width={80} id='logo' /> Kamlesh Traders </Link>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item ">
                                <Link class="nav-link active " aria-current="page" to="/producthome">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inventory">Inventory</a>
                            </li>
                            {/* 
                            <li class="nav-item">
                                <a class="nav-link" href="#">Inventory</a>
                            </li> */}




                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/grocery">Grocery</a></li>
                                    <li><a class="dropdown-item" href="/kitchen-items">kitchen & dining</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/office-stationary">Office Stationery</a></li>
                                </ul>
                            </li>
                        </ul>



                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-info text-white" type="submit">Search</button>
                        </form>


                        <button class="btn btn-outline-info text-white m-2" href="#">Login</button>
                        <button class="btn btn-outline-info text-white m-2" href="#">Admin</button>
                    </div>
                </div>
            </nav>




        </>
    );
}

export default Header;
