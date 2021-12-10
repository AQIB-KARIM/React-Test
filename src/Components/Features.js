import React from 'react'

const Features = () => {
    return (
        <div>
           
            <div className="container">

                <div className="row">


                    <div className="col-md">
                        <div className="card text-white features-card  ">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/017.jpg"
                                className="card-img"
                                alt="Stony Beach"
                                height='600px'
                               
                            />
                            <div className="card-img-overlay">

                                <h2 className="card-text">
                                    Things to do on your trip
                                </h2>
                                <button className="btn btn-sm experiences">Experiences</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md">
                        <div className="card  text-white features-card ">
                            <img
                                src="https://images.unsplash.com/photo-1581651842988-eaf2bf5c525a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                                className="card-img"
                                alt="Stony Beach"
                                height='600px'
                            />
                            <div className="card-img-overlay">

                                <h2 className="card-text">
                                    Things to do on your trip
                                </h2>
                                <button className="btn btn-sm experiences">Experiences</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Features
