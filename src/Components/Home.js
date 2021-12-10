import React from 'react'
import '../Assets/Css/header.css'
import Filter from './Filter'
import CardContent from './Content'
import Features from './Features'
import Footer from './Footer'
import Navbar2 from './Navbar2'

const Navbar1 = () => {

    return (
        <div>
            <div id="main">
                <div classNameName='container-fluid'>
                    <header style={{ backgroundColor: "transparent" }}>

                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarExample01"
                                    aria-controls="navbarExample01"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >

                                    <i className="fas fa-bars"></i>
                                </button>

                                <div>

                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-oNtuJIQNfaZ9cLTbCFbcW_2VIAIb3CWxXhpVR1a3mA8JD2WEKNGN-vDl7FprdCrq1U&usqp=CAU'
                                        width='130px'
                                        height='100px'
                                    />
                                </div>

                                <div className="collapse navbar-collapse justify-content-center" id="navbarExample01">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item active">
                                            <a className="nav-link" aria-current="page" href="#">Places to stay</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Experiences</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Online Experiences</a>
                                        </li>

                                    </ul>
                                </div>

                                <div style = {{display:"flex"}}>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>


                                </div>
                            </div>
                        </nav>

                     

                        <div className='container-fluid'>
                            <Filter />
                        </div>


                        <div
                            className="p-5  bg-image card">

                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white">

                                    <h2 className="mb-3" style={{ fontSize: "45px", fontWeight: "bold", top: "40%", fontFamily: "cursive" }}>Not sure where to go? Perfect</h2>
                                    <div className='text-center'>
                                        <button className="btn btn-outline-light btn-lg" href="#!" role="button"
                                        >Perfect</button>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </header>

                    {/* console.writeline ("Hello World") */}



                </div>


                <div className="containers">
                    <CardContent />

                </div>

            </div>


            <div className = 'features-div'>
                <h2 className = 'feature-head' style = {{marginLeft: "90px" , fontSize: "40px",marginBottom:"20px",fontWeight: "bold"}}>Discover Airbnb Experiences</h2>
                <Features/>
            </div>





            <div style = {{marginTop: "20%"}}>
            <Footer/>
            </div>


            
        </div>

    )
}

export default Navbar1
